import { Link } from 'react-router-dom';

const PetItem = ({pet}) => {
    return (
        <li>
            <div className="image-wrap">
                <img src={pet.image} />
            </div>
            <h3>{pet.name}</h3>
            <p>{pet.breed}</p>
            <Link to={`/pet-details/${pet._id}`}>Details</Link>
        </li>
    );
};

export default PetItem;