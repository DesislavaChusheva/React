import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as petService from '../../../services/PetService'
import { AuthContext } from '../../../contexts/AuthContext';
import AdoptionStatus from '../../../enums/AdoptionStatus'
import * as adoptionService from '../../../services/AdoptionService'
import { useContext } from 'react';


const AdoptionsDeniedItem = ({adoptionRequest}) => {

    const[pet, setPet] = useState([])

    useEffect(() => {
        petService.getPetById(adoptionRequest.petId).then(pet => setPet(pet))
    }, [])

    return (
        <li>
            <div className="image-wrap">
                <img src={pet.image} />
            </div>
            <p>Adoption request by</p>
            <p>{adoptionRequest.fostererEmail}</p>
            <p>was rejected for</p>
            <h3>{pet.name}</h3>
        </li>
    );
};

export default AdoptionsDeniedItem;