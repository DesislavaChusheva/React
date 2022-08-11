import { useState, useEffect } from 'react';
import AdoptionStatus from '../../enums/AdoptionStatus'
import * as adoptionService from '../../services/AdoptionService'
import AdoptionsPendingItem from './AdoptionsPendingItem/AdoptionsPendingItem'

const AdoptionsPendind = () => {

    const [addoptionRequests, setAddoptionRequests] = useState([]);

    useEffect(() => {
        adoptionService.getAllAdoptionRequests().then(addoptionRequests => setAddoptionRequests(addoptionRequests));
    }, [])

    let pendingRequests = []


    addoptionRequests.forEach(r => {
        if (r.status === AdoptionStatus.Pending) {
            pendingRequests.push(r)
        }
    });


    return (
        <section id="pets-page">
            <h1>PENDING ADOPTIONS</h1>
            <ul id="pending-adoptions-ul">
                {pendingRequests.length > 0
                    ? pendingRequests.map(p => <AdoptionsPendingItem key={p._id} adoptionRequest={p} />)
                    : <h2 className="no-pets">There are no pending adoptions!</h2>}
            </ul>
        </section>
    );
}

export default AdoptionsPendind