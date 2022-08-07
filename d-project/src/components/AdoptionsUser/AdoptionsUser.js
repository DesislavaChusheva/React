import { useState, useEffect } from 'react';
import * as adoptionService from '../../services/AdoptionService'
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import AdoptionUserItem from './AdoptionItem/AdoptionUserItem'


const AdoptionsUser = () => {
    const { user } = useContext(AuthContext);
    let userId = user._id;

    const[addoptionRequests, setAddoptionRequests] = useState([]);

    useEffect(() => {
        adoptionService.getAllAdoptionRequests().then(addoptionRequests => setAddoptionRequests(addoptionRequests));
    }, [])
    
    const userAdoptionRequests = []

    addoptionRequests.forEach(r => {
        if (r._ownerId === userId) {
            userAdoptionRequests.push(r)
        }    
    });


    return (
        <section id="addoptions-user-page">
            <h1>ADOPTIONS</h1>
            {userAdoptionRequests.length > 0
                ? userAdoptionRequests.map(a => <AdoptionUserItem key={a._id} adoptionRequest={a}/>)
                : <h2 className="no-addoption-user-requests">There are no requests from you!</h2>}
        </section>
    );
}

export default AdoptionsUser