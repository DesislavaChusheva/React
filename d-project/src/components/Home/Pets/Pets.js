import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import PetItem from './PetItem/PetItem';
import * as petService from '../../../services/PetService';
import * as adoptionService from '../../../services/AdoptionService'
import AdoptionStatus from '../../../enums/AdoptionStatus'

const Pets = () => {

    const [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAllPets().then(pets => setPets(pets));
    }, [])

    const [addoptionRequests, setAddoptionRequests] = useState([]);

    useEffect(() => {
        adoptionService.getAllAdoptionRequests().then(addoptionRequests => setAddoptionRequests(addoptionRequests));
    }, [])

    let notAdoptedPets = []

    pets.forEach(p => {
        let requests = []
        addoptionRequests.forEach(r => {
            if (p._id === r.petId && r.status === AdoptionStatus.Adopted) {
                requests.push(r)
            }
        });
        if (requests.length === 0) {
            notAdoptedPets.push(p)
        }
    });

    return (
        <div id="pets-page">
            <h1>PETs to LOVE</h1>
            <ul>
                {notAdoptedPets.length > 0
                    ? notAdoptedPets.map(p => <PetItem key={p._id} pet={p} />)
                    : <h2 className="no-pets">All pets are saved!</h2>}
            </ul>
        </div>
    );
};

export default Pets;