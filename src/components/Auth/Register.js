import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
// import AppUser from '../models/AppUser';
import { registerService } from '../../services/AuthService';

const Register = () => {

    const history = useHistory();

    const [appUser, setAppUser] = useState({});
    const [credentials, setCredentials] = useState('');

    const handleAppUser = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setAppUser({
            ...appUser,
            [event.target.name]: event.target.value
        });
    };

    const submitAppUser = (event) => {

        registerService(appUser)
            .then((response) => {
                console.log(response.data);
                alert('You are registered successfully. Please login now.');
                history.push('/login'); // check this method to navigate 
            }).catch((error) => {
                console.log(error.response);
                setCredentials("Enter proper credentials.");
            });
        event.preventDefault();
    }
    return (
        <center>

            <div className="container">
                <div className="w-50 shadow bg-white" style={{ borderRadius: "10px" }} >
                    <form className="p-3 justify-content-center mt-5 form form-group form-dark" onSubmit={submitAppUser}>
                        <h1 className="display-4 text-primary">Register</h1>
                        <div className='p-3'>
                            <input
                                type="text"
                                name="userName"
                                id="userName"
                                className="form-control mb-3"
                                placeholder="Enter username"
                                value={appUser.userName}
                                onChange={handleAppUser}
                                required
                                autoFocus
                            />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="form-control mb-3"
                                placeholder="Enter Email"
                                value={appUser.email}
                                onChange={handleAppUser} />
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="form-control mb-3"
                                placeholder="Enter password"
                                value={appUser.password}
                                onChange={handleAppUser} />

                            <input
                                type='number'
                                name="phone"
                                id="phone"
                                className="form-control mb-3"
                                placeholder="Enter Phone number"
                                value={appUser.mobileNumber}
                                onChange={handleAppUser} />
                            <input
                                type='text'
                                name="Address"
                                id="address"
                                className="form-control mb-3"
                                placeholder="Enter Address"
                                value={appUser.address}
                                onChange={handleAppUser} />



                            <div className="form-group">
                                <select className="form-control mb-3" name="role" id="role" onChange={handleAppUser}>
                                    <option className='text-muted' value="Role">Select a role</option>
                                    <option value="ADMIN">Admin</option>
                                    <option value="CUSTOMER">Customer</option>
                                </select>
                            </div>
                            <input
                                type="submit"
                                id="submit"
                                name="submit"
                                className="w-75 form-control btn btn-success mb-3"
                                value="Register"
                                onClick={submitAppUser}
                            />
                        </div>
                    </form>
                    <p className="text-danger">{credentials}</p>
                    <p className='font-weight-lighter'>
                        Already a Member? <Link to="/login">Login</Link>
                    </p>
                </div>
                <div>
                    {/* https://material.io/components/dialogs/web#alert-dialog */}
                </div>
            </div >
        </center>

    )
}
export default Register;




