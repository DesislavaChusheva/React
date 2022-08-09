import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const { user } = useAuthContext();
    return (
        <header>
            <div id="header-div">
                <h1>
                    <Link style={{ textDecoration: 'none', color: 'white'  }} className="home" to="/">
                        PET#help
                    </Link>
                </h1>
                <nav>

                    {!user.email
                        ? <ul id="guest">
                            <li><Link style={{ textDecoration: 'none', color: 'white' }} to="/register">Register</Link></li>
                            <li><Link style={{ textDecoration: 'none', color: 'white'  }} to="/login">Login</Link></li>
                        </ul>
                        : []}

                    {user.email == "petsAdmin@abv.bg"
                        ? <ul id="admin">
                            <li><Link style={{ textDecoration: 'none', color: 'white'  }} to="/pets">Pets</Link></li>
                            <li><Link style={{ textDecoration: 'none', color: 'white'  }} to="/add-Pet">Add pet</Link></li>
                            <li><Link style={{ textDecoration: 'none', color: 'white'  }} to="/adoptions-pending">Pending adoptions</Link></li>
                            <li><Link style={{ textDecoration: 'none', color: 'white'  }} to="/adoptions-aproved">Adoptions</Link></li>
                            <li><Link style={{ textDecoration: 'none', color: 'white'  }} to="/adoptions-denied">Denied Adoptions</Link></li>
                            <li><Link style={{ textDecoration: 'none', color: 'white'  }} to="/donations-admin">Donations</Link></li>
                            <li><Link style={{ textDecoration: 'none', color: 'white'  }} to="/logout">Logout</Link></li>
                        </ul>
                        : []}
                    {user.email && user.email != "petsAdmin@abv.bg"
                        ? <ul id="user">
                            <li><Link style={{ textDecoration: 'none', color: 'white'  }} to="/pets">Pets</Link></li>
                            <li><Link style={{ textDecoration: 'none', color: 'white'  }} to="/adoptions/:userId">Adoptions</Link></li>
                            <li><Link style={{ textDecoration: 'none', color: 'white'  }} to="/donations/:userId">Donations</Link></li>
                            <li><Link style={{ textDecoration: 'none', color: 'white'  }} to="/logout">Logout</Link></li>
                        </ul>
                        : []}
                </nav>
            </div>
            <img src="header-img.png"></img>
        </header>
    );
};

export default Header;