import { isNull } from "lodash";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Logout from "../Auth/Logout";
import ViewTrips from "../TripBooking/ViewTrips";
const Header = () => {
  const [user, setUser] = useState();
  const [role, setRole] = useState();

  const history = useHistory();

  useEffect(() => {
    // setUser();
    // history.push("/");
    // window.location.r
    // logUser()
    if (localStorage.getItem("loggedInUser")) {
      setUser(JSON.parse(localStorage.getItem("loggedInUser")).role);
      // if (user === "ADMIN") {
      //   Dash();
      //   // history.push("/dashboard")
      // }
      // else {
      //   setUser(JSON.parse(localStorage.getItem("loggedInUser")).role);

      // }
      console.log(user);
    }

  }, []);

  const Dash = () => {
    setRole(JSON.parse(localStorage.getItem("loggedInUser")).role);
  };

  const logUser = () => {
    setUser();
    setRole();
    history.push("/");
    // window.location.reload(true);
  };

  return (!role) ? (
    <header className="header sticky-top">
      <nav className="navbar navbar-fixed-top navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <img height={50} width={50} src={require("../Home/HomePageImg.png")} />
          <Link className="" to="/" style={{ textDecoration: 'none' }}>
            <h6 className="text-light" style={{ fontSize: '25px' }}>JETAYU</h6>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {!user ? (
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="pl-4">
                  <Link className="nav-link text-light" to="/dashboard" onClick={Dash}>
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item ml-4">
                  <Logout logUser={logUser} />
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  ) : (
    <div>

      {/* <ViewTrips fun={logUser} style={{ display: 'hidden' }} /> */}
    </div>
  );
  // <ViewTrips fun={logUser} />
};
export default Header;

{
  /* <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/book">Ride</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/view">MyTrips</Link>
                            </li>
                            <li className="nav-item">
                                <Logout />
                            </li> */
}
