import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section id="login-page" className="auth form">
            <form id="login">
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your-email@***.***"
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-pass" name="password"/>
                    <input type="submit" className="btn submit" defaultValue="Login"/>
                    <p className="field">
                        <span>
                            Or <Link to="/register">Register</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
};

export default Login;