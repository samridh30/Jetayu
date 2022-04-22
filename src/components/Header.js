import { Link } from "react-router-dom";
const Header = ()=>{

    return (
        <header class="header sticky-top">
            <nav class="navbar navbar-fixed-top navbar-expand-sm navbar-dark bg-dark">
                <div class="container">
                        <Link className="navbar-brand" to="/">
                        <img src="https://cdn5.vectorstock.com/i/1000x1000/68/44/car-logo-with-circle-hand-colorful-logo-vector-22266844.jpg"
                            height="60px" width="60px" alt="Cab Logo" />
                        </Link>
                        <h6 className="text-primary">JETAYU</h6>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/book">Ride</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Updatetrip</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/endTrip">EndRide</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/view">My Trips</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );

}
export default Header;