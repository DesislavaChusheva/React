import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as petService from '../../services/PetService'


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
    petService.createPet(petData)
}


const AddPet = ({ AddPetHandler }) => {
    return (
        <section id="add-page" className="auth-admin form">
            <form id="add" onSubmit={onSubmit}>
                <label htmlform="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                />
                <label htmlform="breed">Breed:</label>
                <input
                    type="text"
                    id="breed"
                    name="breed"
                />
                <label htmlform="age">Age:</label>
                <input
                    type="text"
                    id="age"
                    name="age"
                />
                <label htmlform="weight">Weight:</label>
                <input
                    type="text"
                    id="weight"
                    name="weight"
                />
                <label htmlform="image">image:</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                />
                <input
                    className="btn submit"
                    type="submit"
                    value="Add pet"
                />
            </form>
        </section>
    );
};

export default AddPet;