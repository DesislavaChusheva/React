import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const { user } = useAuthContext();
    return (
        <header>
            <h1>
                <Link className="home" to="/">
                    PET#help
                </Link>
            </h1>
            <nav>

                {!user.email
                    ? <div id="guest">
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </div>
                    : []}

                {user.email == "petsAdmin@abv.bg"
                    ? <div id="admin">
                        <Link to="/pets">Pets</Link>
                        <Link to="/add-Pet">Add pet</Link>
                        <Link to="/adoptions-pending">Pending adoptions</Link>
                        <Link to="/adoptions-admin">Adoptions</Link>
                        <Link to="/adoptions-denied">Denied Adoptions</Link>
                        <Link to="/donations-admin">Donations</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                    : []}
                {user.email && user.email != "petsAdmin@abv.bg"
                    ? <div id="user">
                        <Link to="/pets">Pets</Link>
                        <Link to="/adoptions/:userId">Adoptions</Link>
                        <Link to="/edit-profile/:userId">Edit profile</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                    : []}
            </nav>
        </header>
    );
};

export default Header;