import { useState, useEffect } from 'react';
import AdoptionStatus from '../../enums/AdoptionStatus'
import * as adoptionService from '../../services/AdoptionService'
import AdoptionsAprovedItem from './AdoptionsAprovedItem/AdoptionsAprovedItem'

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
            <h1>APROVED ADOPTIONS</h1>
            <ul id="adoptions-aproved-ul">
                {aprovedRequests.length > 0
                    ? aprovedRequests.map(p => <AdoptionsAprovedItem key={p._id} adoptionRequest={p} />)
                    : <h2 className="no-pets">There are no pending adoptions!</h2>}
            </ul>
        </section>
    );
}

export default AdoptionsAproved