import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as petService from '../../services/PetService'
import { AuthContext } from '../../contexts/AuthContext';
import { AuthProvider } from '../../contexts/AuthContext';
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

    return (
        <li>
            <div className="image-wrap">
                <img src={pet.image} />
            </div>
            <h3>{pet.name}</h3>
            <p>{pet.breed}</p>
            <p>{pet.age}</p>
            <p>{pet.weight}</p>

            {userId == pet._ownerId
                ? <div><Link to={`/edit-pet/${pet._id}`}>Edit</Link>
                    <Link to="/pets">Delete</Link></div>
                : <div><Link to={`/adoptions/${userId}`}>ADOPT</Link>
                    <button className="btn">DONATE 5$</button></div>}
        </li>
    );
};

export default PetDetails;