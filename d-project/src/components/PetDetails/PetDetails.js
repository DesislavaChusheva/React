import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as petService from '../../services/PetService'

const PetDetails = ({ userId }) => {
    
    const[pet, setPet] = useState([]);

    let petId = window.location.pathname.split("/").reverse()[0];

    useEffect(() => {
        petService.getPetById(petId).then(pet => setPet(pet))
    }, [])
    
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
                : <div><Link to="/adoptions/35c62d76-8152-4626-8712-eeb96381bea8">ADOPT</Link>
                  <button className="btn">DONATE 5$</button></div>}
        </li>
    );
};

export default PetDetails;