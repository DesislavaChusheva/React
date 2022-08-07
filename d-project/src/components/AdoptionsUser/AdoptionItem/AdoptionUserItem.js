import { useState, useEffect } from 'react';
import * as petService from '../../../services/PetService'
import AdoptionStatus from '../../../enums/AdoptionStatus'



const AdoptionUserItem = ({adoptionRequest}) => {

    const[pet, setPet] = useState([]);
    console.log(adoptionRequest.petIds);

    useEffect(() => {
        petService.getPetById(adoptionRequest.petId).then(pet => setPet(pet))
    }, [])

    console.log(adoptionRequest);
    console.log(adoptionRequest.status);

    return (
        <li>
            <div className="image-wrap">
                <img src={pet.image} />
            </div>
            <h3>{pet.name}</h3>
            <p>{pet.breed}</p>
            <p>{pet.age}</p>
            <p>{pet.weight}</p>
            <p>{AdoptionStatus[adoptionRequest.status]}</p>
        </li>
    );
};

export default AdoptionUserItem;