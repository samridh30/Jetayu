import { Link } from "react-router-dom";
const Header = ()=>{

    return (
        <header className="header sticky-top">
            <nav className="navbar navbar-fixed-top navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                        <Link className="navbar-brand" to="/">
                        <img src="https://cdn5.vectorstock.com/i/1000x1000/68/44/car-logo-with-circle-hand-colorful-logo-vector-22266844.jpg"
                            height="60px" width="60px" alt="Cab Logo" />
                        </Link>
                        <h6 className="text-primary">JETAYU</h6>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
<<<<<<< HEAD:src/components/Header.js
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
=======
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                        <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            
>>>>>>> 2edaeaf1474f0b24d8f18753ae19b4233eda6d6e:src/components/TripBooking/Header.js
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/book">Ride</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/endTrip">EndRide</Link>
                            </li> */}
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/view">MyTrips</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );

}
export default Header;