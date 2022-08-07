import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as petService from '../../../services/PetService'
import { AuthContext } from '../../../contexts/AuthContext';
import AdoptionStatus from '../../../enums/AdoptionStatus'
import * as adoptionService from '../../../services/AdoptionService'
import { useContext } from 'react';


const AdoptionsPendingItem = ({adoptionRequest}) => {

    const[pet, setPet] = useState([])

    useEffect(() => {
        petService.getPetById(adoptionRequest.petId).then(pet => setPet(pet))
    }, [])

    console.log(pet);

    const[requests, setRequests] = useState([])

    useEffect(() => {
        adoptionService.getAllAdoptionRequests().then(requests => setRequests(requests))
    }, [])

    const { user } = useContext(AuthContext)

    const Aprove = () => {
        const statusAdopt = {
            status: AdoptionStatus.Adopted
        }
        adoptionService.editAdoptionRequest(adoptionRequest._id, statusAdopt)

        requests.forEach(r => {
            if (r.petId === adoptionRequest.petId && r._ownerId != adoptionRequest._ownerId) {
                r.status = AdoptionStatus.Denied
                const statusDenied = {
                    status: AdoptionStatus.Denied
                }
                adoptionService.editAdoptionRequest(r._id, statusDenied)
            }
        })
    }

    const Reject = () => {
        const statusDenied = {
            status: AdoptionStatus.Denied
        }
        adoptionService.editAdoptionRequest(adoptionRequest._id, statusDenied)
    }

    return (
        <li>
            <div className="image-wrap">
                <img src={pet.image} />
            </div>
            <h3>{pet.name}</h3>
            <p>{user.name}</p>
            <button id="aprove-btn" onClick={Aprove}>AROVE</button>
            <button id="reject-btn" onClick={Reject}>REJECT</button>
        </li>
    );
};

export default AdoptionsPendingItem;