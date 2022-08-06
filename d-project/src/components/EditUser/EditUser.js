import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ParseReact from 'parse/react-native';

import * as userService from '../../services/UserService'

//var Parse = require('parse').Parse;
//var ParseReact = require('parse-react');


const EditUser = ({EditUserHandler}) => {
    const[user, setUser] = useState([]);

    // let userId = window.location.pathname.split("/").reverse()[0];
    // console.log(userId);

    const currentUser = ParseReact.User.current();
    let userId = currentUser._id
    console.log(userId);

    useEffect(() => {
        userService.getUserById(userId).then(user => setUser(user))
    }, [])

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