import { useState, useEffect } from 'react';
import * as petService from '../../../services/PetService'
import AdoptionStatus from '../../../enums/AdoptionStatus'
import * as adoptionService from '../../../services/AdoptionService'
import { useNavigate, } from 'react-router-dom';

const AdoptionsPendingItem = ({ adoptionRequest }) => {
    const navigate = useNavigate();

    const [pet, setPet] = useState([])

    useEffect(() => {
        petService.getPetById(adoptionRequest.petId).then(pet => setPet(pet))
    }, [])

    console.log('This is pet: ' + pet);

    const [requests, setRequests] = useState([])

    useEffect(() => {
        adoptionService.getAllAdoptionRequests().then(requests => setRequests(requests))
    }, [])


    const Aprove = () => {
        const statusAdopt = {
            petId: adoptionRequest.petId,
            status: AdoptionStatus.Adopted,
            fostererEmail: adoptionRequest.fostererEmail
        }
        adoptionService.editAdoptionRequest(adoptionRequest._id, statusAdopt)

        requests.forEach(r => {
            if (r.petId === adoptionRequest.petId && r._ownerId != adoptionRequest._ownerId) {
                r.status = AdoptionStatus.Denied
                const statusDenied = {
                    petId: r.petId,
                    status: AdoptionStatus.Denied,
                    fostererEmail: r.fostererEmail
                }
                adoptionService.editAdoptionRequest(r._id, statusDenied)
            }
        })
        alert(`Adoption for ${pet.name} aproved!`)


    }

    const Reject = () => {
        const statusDenied = {
            petId: adoptionRequest.petId,
            status: AdoptionStatus.Denied,
            fostererEmail: adoptionRequest.fostererEmail
        }
        adoptionService.editAdoptionRequest(adoptionRequest._id, statusDenied)
        alert(`Adoption for ${pet.name} denied!`)


    }

    return (
        <li>
            <div id="adoptions-pending">
                <div className="image-wrap">
                    <img id="adoptions-pending-img" src={pet.image} />
                </div>
                <p><strong>{adoptionRequest.fostererEmail}</strong></p>
                <p>wants to adopt</p>
                <p><strong>{pet.name}</strong></p>
                <button className="btn p-a aprove" id="aprove-btn" onClick={Aprove}>AROVE</button>
                <button className="btn p-a reject" id="reject-btn" onClick={Reject}>REJECT</button>
            </div>
        </li>
    );
};

export default AdoptionsPendingItem;