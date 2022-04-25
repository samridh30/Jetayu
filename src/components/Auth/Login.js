import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { loginService } from '../../services/AuthService';
// import AuthUser from '../../models/AuthUser';

const Login = () => {


        const [appUser, setAppUser] = useState({
                email: '',
                password: ''
        });

        const [credentials, setCredentials] = useState('');
        const history = useHistory();

        useEffect(() => {
                console.log(localStorage.getItem('loggedInUser'))
                if (localStorage.getItem('loggedInUser')) {
                        history.push("/")
                }
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
                                localStorage.setItem('loggedInUser', response.data);
                                console.log(localStorage.getItem('loggedInUser'));
                                alert('Success');
                                history.push('/home');
                                // window.location.assign('/home');
                                window.location.reload();
                        }).catch((error) => {
                                localStorage.removeItem('loggedInUser');
                                // localStorage.clear();
                                console.log(error.response);
                                setCredentials("Enter proper credentials.");
                        });
                event.preventDefault();
        }
        return (
                <div className="container" >
                        <div className="col-4 mt-3 pb-3 shadow bg-white" >
                                <h1 className="display-4 text-primary">Login</h1>
                                <form className="form form-group form-dark " onSubmit={submitAppUser}>
                                        <div>
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
                                                        className="form-control btn btn-success mb-3"
                                                        value="Login"
                                                        onClick={submitAppUser}
                                                />
                                        </div>
                                </form>
                                <p className="text-danger">{credentials}</p>
                                {/* <Link to="/register" className="btn btn-primary col-12">Not yet registered? Register</Link> */}
                        </div>
                </div >
        )
}
export default Login;