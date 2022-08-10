import { Link } from 'react-router-dom';

const PetItem = ({ pet }) => {
    return (
        <li>
            <div id="pet-card">
                <div className="image-wrap">
                    <img className="pet-card" src={pet.image} />
                </div>
                <h3>{pet.name}</h3>
                <p>{pet.breed}</p>
                <div className="for-link">
                    <Link style={{ textDecoration: 'none', color: "white" }} to={`/pet-details/${pet._id}`}>Details</Link>
                </div>
            </div>
        </li>
    );
};

export default PetItem;