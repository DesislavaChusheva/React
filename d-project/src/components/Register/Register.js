import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { withAuth } from "../../contexts/AuthContext";
import * as authService from "../../services/AuthService"

const Register = ({auth}) => {

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');

    
        if(password !== confirmPassword) return;

        authService.register(email, password)
                   .then(authData => {
                    auth.userLogin(authData);
                    navigate('/pets');
                   });
    }
    return (
        <section id="register-page" className="auth form">
            <form id="register-page" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your-email@***.***"
                    />
                    <label htmlFor="register-pass">Password:</label>
                    <input type="password" name="password" id="register-pass"/>
                    <label htmlFor="confirm-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-pass"/>
                    <input className="btn submit" type="submit" value="Register"/>
                    <p className="field">
                        <span>
                            If you already have a profile <Link to="/login">Login</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
};
const RegisterWithAuth = withAuth(Register);

export default RegisterWithAuth;