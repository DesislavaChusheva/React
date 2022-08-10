import { useState, useEffect } from 'react';
import * as petService from '../../services/PetService'
import { useNavigate } from 'react-router-dom';


const DeletePet = () => {
    const [pet, setPet] = useState([]);

    let petId = window.location.pathname.split("/").reverse()[0];

    const navigate = useNavigate();

    useEffect(() => {
        petService.getPetById(petId).then(pet => setPet(pet))
    }, [])

    const deletePet = () => {
        console.log(petId);
        petService.deletePet(petId)
        navigate('/pets')
    }

    const cancel = () => {
        navigate(`/pet-details/${pet._id}`)
    }

    return (
        <section id="delete-pet">
            <h2>Do you want to delete {pet.name}`s profile?</h2>
            <button className="btn" onClick={deletePet}>DELETE</button>
            <button className="btn" onClick={cancel}>CANCEL</button>
        </section>
    )
}

export default DeletePet;