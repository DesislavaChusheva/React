import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as petService from '../../services/PetService'
import * as adoptionService from '../../services/AdoptionService'
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import AdoptionStatus from '../../enums/AdoptionStatus'
import { useNavigate } from 'react-router-dom';



const AdoptPet = () => {

    const navigate = useNavigate();

    const [pet, setPet] = useState([]);

    let petId = window.location.pathname.split("/").reverse()[0];

    useEffect(() => {
        petService.getPetById(petId).then(pet => setPet(pet))
    }, [])

    const { user } = useContext(AuthContext);
    let userId = user._id;

    const [adoptions, setAdoptions] = useState([]);

    useEffect(() => {
        adoptionService.getAllAdoptionRequests().then(adoptions => setAdoptions(adoptions));
    }, [])

    let sameAdoption = []

    adoptions.forEach(a => {
        if (a._ownerId === userId && a.petId === petId) {
            sameAdoption.push(a)
        }
    });

    const previousRequestExists = Boolean(sameAdoption.length > 0)
    //console.log(previousRequestExists);

    const sendAdoptionRequest = () => {
        const adoptionRequestData = {
            petId: pet._id,
            status: AdoptionStatus.Pending,
            fostererEmail: user.email
        }
        adoptionService.createAdoptionRequest(adoptionRequestData)
        navigate(`/adoptions/${userId}`)
    }






    const deleteAll = () => {
        console.log(adoptions);

        adoptions.forEach(a => {
            adoptionService.removeAdoptionRequest(a._id)
        });
    }






    return (
        <div id="adopt-pet">
            <h2>SEND ADOPTION REQUEST</h2>
            <img id="adopt-pet-img" src={pet.image} />
            {previousRequestExists
                ? <div>
                    <h3>You`ve already requested adoption for {pet.name}!</h3>
                    <p>See your <Link to={`/adoptions/${userId}`}>Adoption requests</Link></p>
                </div>
                : <button className="btn" onClick={sendAdoptionRequest}>Adopt <strong>{pet.name}</strong></button>}
            {/* <button onClick={deleteAll}>DELETE ALL</button> */}
        </div>
    )
}


export default AdoptPet;