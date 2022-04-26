import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Logout from "../Auth/Logout";

const CustomerDash = (props) => {

        const history = useHistory();

        useEffect(() => {
                if (!JSON.parse(localStorage.getItem("loggedInUser"))) {
                        history.push("/home")

                }
        }, [])
        return (
                <div>
                        <div>
                                <Link onClick={props.fun} to="/home">LOGO</Link>
                                <h1 className={`text-light font-weight-light text-muted`}>Sajal</h1>
                                <h5 className={`text-light font-weight-lighter text-muted`}>Customer</h5>
                        </div>
                        <div>
                                <div className={`my-5`}>
                                        <h5 className={`text-light font-weight-normal mt-5 text-decoration-none`}>Active Trips</h5>
                                        <hr className={`text-light`} />
                                        <h5 className={`text-light font-weight-normal mt-5 text-decoration-none`}>TripHistory</h5>
                                        <hr className={`text-light`} />
                                        <h5 className={`text-light font-weight-normal mt-5 text-decoration-none`}>My Account</h5>
                                        <hr className={`text-light`} />
                                </div>
                                <div style={{ marginTop: '110%' }}>
                                        <Logout logUser={props.logUser} />
                                </div>
                        </div>
                </div >
        )
}

export default CustomerDash;