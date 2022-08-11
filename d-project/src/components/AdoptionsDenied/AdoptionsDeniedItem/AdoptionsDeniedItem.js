import { useState, useEffect } from 'react';
import * as petService from '../../../services/PetService'


const AdoptionsDeniedItem = ({ adoptionRequest }) => {

    const [pet, setPet] = useState([])

    useEffect(() => {
        petService.getPetById(adoptionRequest.petId).then(pet => setPet(pet))
    }, [])

    return (
        <li>
            <div id="adoptions-denied">
                <div className="image-wrap">
                    <img id="adoptions-denied-img" src={pet.image} />
                </div>
                <p>Adoption request by</p>
                <p><strong>{adoptionRequest.fostererEmail}</strong></p>
                <p>was rejected for</p>
                <h3>{pet.name}</h3>
            </div>
        </li>
    );
};

export default AdoptionsDeniedItem;