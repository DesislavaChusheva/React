import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as petService from '../../services/PetService'
import * as donationService from '../../services/DonationsService'
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

const PetDetails = ({ }) => {

    const [pet, setPet] = useState([]);

    let petId = window.location.pathname.split("/").reverse()[0];

    useEffect(() => {
        petService.getPetById(petId).then(pet => setPet(pet))
    }, [])

    const { user } = useContext(AuthContext);

    let userId = user._id;

    console.log(pet);

    const donate = () => {
        let doantion = {
            petId: pet._id,
            petName: pet.name,
            donor: user.email
        }
        donationService.createDonation(doantion)
        alert(`Thank you for donating 5$ for ${pet.name}!`)
    }

    return (
        <div id="pet-details">
            <div className="image-wrap pet-details-img">
                <img id="pet-details-img" src={pet.image} />
            </div>
            <h3>{pet.name}</h3>
            <p><strong>BREED:</strong> {pet.breed}</p>
            <p><strong>AGE:</strong> {pet.age}</p>
            <p><strong>WEIGHT:</strong> {pet.weight}</p>

            {userId == pet._ownerId
                ? <div><Link className="btn" style={{ textDecoration: 'none', color: "white" }} to={`/edit-pet/${pet._id}`}>EDIT</Link>
                    <Link className="btn" style={{ textDecoration: 'none', color: "white" }} to={`/delete-pet/${pet._id}`}>DELETE</Link></div>
                : <div ><Link className="btn" style={{ textDecoration: 'none', color: "white" }} to={`/adopt-pet/${pet._id}`}>ADOPT</Link>
                    <button className="btn" onClick={donate}>DONATE 5$</button></div>}
        </div>
    );
};

export default PetDetails;