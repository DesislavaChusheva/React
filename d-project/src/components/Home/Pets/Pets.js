import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import PetItem from './PetItem/PetItem';
import * as petService from '../../../services/PetService';

const Pets = () => {

    const[pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAllPets().then(pets => setPets(pets));
    }, [])
    
    return (
        <section id="pets-page">
            <h1>PETs to LOVE</h1>
            {pets.length > 0
                ? pets.map(p => <PetItem key={p._id} pet={p}/>)
                : <h2 className="no-pets">All pets are saved!</h2>}
        </section>
    );
};

export default Pets;