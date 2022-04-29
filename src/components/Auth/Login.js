import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { loginService } from '../../services/AuthService';
import { useDispatch, useSelector } from "react-redux";
import { getAppUser } from '../../redux/AppUserSlice';
import { Link } from 'react-router-dom';

// import AuthUser from '../../models/AuthUser';

const Login = () => {



        // const temp = useSelector((state) => state.appUser.loggedInUser);

        const [appUser, setAppUser] = useState({
                email: '',
                password: ''
        });

        const [credentials, setCredentials] = useState('');
        const history = useHistory();

        useEffect(() => {
                // console.log(JSON.parse(localStorage.getItem('loggedInUser')).role)
                if (localStorage.getItem('loggedInUser') !== null) {
                        history.push("/")
                }
                // console.log(temp);
        }, [])

        const handleAppUser = (event) => {
                console.log(event.target.name);
                console.log(event.target.value);
                setAppUser({
                        ...appUser,
                        [event.target.name]: event.target.value
                });
        };

        const submitAppUser = (event) => {
                loginService(appUser)
                        .then((response) => {
                                console.log(response.data)
                                localStorage.setItem('loggedInUser', JSON.stringify(response.data));
                                alert('Success');
                                // history.push('/');
                                window.location.reload(true);
                        }).catch((error) => {
                                localStorage.removeItem('loggedInUser');
                                // localStorage.clear();
                                console.log(error.response);
                                setCredentials("Enter proper credentials.");
                        });
                event.preventDefault();
        }
        return (
                <center>
                        <div className="container justify-content-center" >
                                <div className="mt-5 w-50 shadow bg-white" style={{ borderRadius: "10px" }} >

                                        <form className="p-3 justify-content-center mt-5 form form-group form-dark " onSubmit={submitAppUser}>
                                                <h1 className="display-4 font-weight-lighter text-primary">Login</h1>
                                                <div className='p-3'>
                                                        <input
                                                                type="text"
                                                                name="email"
                                                                id="email"
                                                                className="form-control mb-3"
                                                                placeholder="Enter Email"
                                                                value={appUser.email}
                                                                onChange={handleAppUser}
                                                                autoFocus
                                                                required
                                                        />
                                                        <input
                                                                type="password"
                                                                name="password"
                                                                id="password"
                                                                className="form-control mb-3"
                                                                placeholder="Enter password"
                                                                value={appUser.password}
                                                                onChange={handleAppUser}
                                                                required
                                                        />
                                                        {/* <div class="form-group">
                                                        <select className="form-control mb-3" name="role" id="role" onChange={handleAppUser}>
                                                                <option value="Role">Select a role</option>
                                                                <option value="ADMIN">ADMIN</option>
                                                                <option value="EMPLOYEE">EMPLOYEE</option>
                                                                <option value="MANAGER">MANAGER</option>
                                                        </select>
                                                </div> */}
                                                        <input
                                                                type="submit"
                                                                id="submit"
                                                                name="submit"
                                                                className="form-control mt-3 w-75 btn btn-success mb-3"
                                                                value="Login"
                                                                onClick={submitAppUser}
                                                        />
                                                </div>

                                        </form>
                                        <p className="text-danger">{credentials}</p>
                                        {/* <Link to="/register" className="btn btn-primary col-12">Not yet registered? Register</Link> */}
                                        <p className='font-weight-lighter'>
                                                Not a Member? <Link to="/register">Register</Link>
                                        </p>
                                </div>
                        </div >
                </center >
        )
}
export default Login;