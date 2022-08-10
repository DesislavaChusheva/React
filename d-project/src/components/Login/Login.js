import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ParseReact from 'parse/react-native';


import { AuthContext } from '../../contexts/AuthContext';
import * as authService from "../../services/AuthService"

const Login = () => {

    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();


    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password
        } = Object.fromEntries(new FormData(e.target));

        authService.login(email, password)
            .then(authData => {
                console.log(authData);
                userLogin(authData);
                if (Object.keys(authData).length > 2) {
                    navigate('/pets');
                } else {
                    navigate('/403');
                }
            })
            .catch(() => {
                navigate('/403');
            });

    }

    return (
        <div id="section-form">
            <section id="login-page" className="auth form">
                <form id="login" onSubmit={onSubmit}>
                    <div className="container">
                        <div className="brand-logo" />
                        <h1>Login</h1>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="your-email@***.***"
                        />
                        <label htmlFor="login-pass">Password: </label>
                        <input type="password" id="login-pass" name="password" />
                        <input type="submit" className="btn submit" value="Login" />
                        <p className="field">
                            <span>
                                Or <Link to="/register">Register</Link>
                            </span>
                        </p>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Login;