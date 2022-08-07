import { useState, useEffect } from 'react';
import AdoptionStatus from '../../enums/AdoptionStatus'
import * as adoptionService from '../../services/AdoptionService'
import AdoptionsDeniedItem from './AdoptionsDeniedItem/AdoptionsDeniedItem'

const AdoptionsDenied = () => {

    const [addoptionRequests, setAddoptionRequests] = useState([]);

    useEffect(() => {
        adoptionService.getAllAdoptionRequests().then(addoptionRequests => setAddoptionRequests(addoptionRequests));
    }, [])

    let rejectedAdoptions = []


    addoptionRequests.forEach(r => {
        if (r.status === AdoptionStatus.Denied) {
            rejectedAdoptions.push(r)
        }
    });


    return (
        <section id="pets-page">
            <h1>DENIED ADOPTIONS</h1>
            {rejectedAdoptions.length > 0
                ? rejectedAdoptions.map(p => <AdoptionsDeniedItem key={p._id} adoptionRequest={p} />)
                : <h2 className="no-pets">There are no pending adoptions!</h2>}
        </section>
    );
}

export default AdoptionsDenied