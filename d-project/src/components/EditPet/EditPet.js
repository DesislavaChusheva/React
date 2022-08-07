import { useState, useEffect } from 'react';
import * as petService from '../../services/PetService'

const EditPet = () => {
    const [pet, setPet] = useState([]);

    let petId = window.location.pathname.split("/").reverse()[0];

    useEffect(() => {
        petService.getPetById(petId).then(pet => setPet(pet))
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const petData = {
            name: formData.get('name'),
            breed: formData.get('breed'),
            age: formData.get('age'),
            weight: formData.get('weight'),
            image: formData.get('image')
        }
        console.log(petData);
        petService.editPet(petId, petData)
    }



    return (
        <section id="add-page" className="auth-admin form">
            <form id="add" onSubmit={onSubmit}>
                <label htmlform="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={pet.name}
                />
                <label htmlform="breed">Breed:</label>
                <input
                    type="text"
                    id="breed"
                    name="breed"
                    defaultValue={pet.breed}
                />
                <label htmlform="age">Age:</label>
                <input
                    type="text"
                    id="age"
                    name="age"
                    defaultValue={pet.age}
                />
                <label htmlform="weight">Weight:</label>
                <input
                    type="text"
                    id="weight"
                    name="weight"
                    defaultValue={pet.weight}
                />
                <label htmlform="image">image:</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    defaultValue={pet.image}
                />
                <input
                    className="btn submit"
                    type="submit"
                    value="Edit pet"
                />
            </form>
        </section>
    );
};

export default EditPet;