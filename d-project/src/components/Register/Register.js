import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <section id="register-page" className="auth form">
            <form id="register-page">
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
                            If you already have profile <Link to="/login">Login</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
};

export default Register;