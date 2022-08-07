import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as petService from '../../services/PetService'
import { AuthContext } from '../../contexts/AuthContext';
import AdoptionStatus from '../../enums/AdoptionStatus'
import * as adoptionService from '../../services/AdoptionService'
import AdoptionsAprovedItem from './AdoptionsAprovedItem/AdoptionsAprovedItem'
import { useContext } from 'react';

const AdoptionsAproved = () => {

    const [addoptionRequests, setAddoptionRequests] = useState([]);

    useEffect(() => {
        adoptionService.getAllAdoptionRequests().then(addoptionRequests => setAddoptionRequests(addoptionRequests));
    }, [])

    let aprovedRequests = []


    addoptionRequests.forEach(r => {
        if (r.status === AdoptionStatus.Adopted) {
            aprovedRequests.push(r)
        }
    });


    return (
        <section id="pets-page">
            <h1>PENDING ADOPTIONS</h1>
            {aprovedRequests.length > 0
                ? aprovedRequests.map(p => <AdoptionsAprovedItem key={p._id} adoptionRequest={p} />)
                : <h2 className="no-pets">There are no pending adoptions!</h2>}
        </section>
    );
}

export default AdoptionsAproved