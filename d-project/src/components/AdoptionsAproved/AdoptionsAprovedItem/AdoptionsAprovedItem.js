import { useState, useEffect } from 'react';
import * as petService from '../../../services/PetService'

const AdoptionsAprovedItem = ({ adoptionRequest }) => {

    const [pet, setPet] = useState([])

    useEffect(() => {
        petService.getPetById(adoptionRequest.petId).then(pet => setPet(pet))
    }, [])

    return (
        <li>
            <div id="adoptions-aproved">
                <div className="image-wrap">
                    <img id="adoptions-aproved-img" src={pet.image} />
                </div>
                <h3>{pet.name}</h3>
                <p>was adopted by</p>
                <p><strong>{adoptionRequest.fostererEmail}</strong></p>
            </div>
        </li>
    );
};

export default AdoptionsAprovedItem;