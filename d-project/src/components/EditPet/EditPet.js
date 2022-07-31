

const EditPet = ({ EditPetHandler, pet }) => {
    return (
        <section id="add-page" className="auth-admin form">
            <form id="add">
                <label htmlform="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={pet.name}
                />
                <label htmlform="breed">Breed:</label>
                <input
                    type="text"
                    id="breed"
                    name="breed"
                    value={pet.breed}
                />
                <label htmlform="age">Age:</label>
                <input
                    type="text"
                    id="age"
                    name="age"
                    value={pet.age}
                />
                <label htmlform="weight">Weight:</label>
                <input
                    type="text"
                    id="weight"
                    name="weight"
                    value={pet.weight}
                />
                <label htmlform="image">image:</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    value={pet.image}
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