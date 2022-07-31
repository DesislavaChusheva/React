

const AddPet = ({ AddPetHandler }) => {
    return (
        <section id="add-page" className="auth-admin form">
            <form id="add">
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