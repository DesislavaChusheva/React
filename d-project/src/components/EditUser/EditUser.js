import { Link } from 'react-router-dom';

const EditUser = ({user}) => {
    return (
        <section id="edit-user-page" className="auth form">
            <form id="edit-user-page">
                <div className="container">
                    <h1>Edit your profile</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                    />
                    <label htmlFor="register-pass">New Password:</label>
                    <input type="password" name="password" id="edit-user-pass"/>
                    <label htmlFor="confirm-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="edit-user-confirm-pass"/>
                    <input className="btn submit" type="submit" value="Edit profile"/>
                </div>
            </form>
        </section>
    );
};

export default EditUser;