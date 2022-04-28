import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import Login from '../components/Auth/Login';
import ViewTrips from '../components/TripBooking/ViewTrips';
import Booktrip from '../components/TripBooking/BookTrip';
import EndTrip from '../components/TripBooking/EndTrip';
import Register from '../components/Auth/Register';
import Dashboard from '../components/Dashboard/DashBoard';

import InsertDriver from '../components/Driver/InsertDriver';
import ViewDriver from '../components/Driver/ViewDriver';
import ViewAllDrivers from '../components/Driver/ViewAllDrivers';
import ViewBestDrivers from '../components/Driver/ViewBestDrivers';
import UpdateDriver from '../components/Driver/UpdateDriver';

import UpdateCustomer from "../components/Customer/UpdateCustomer"



const Routes = () => {
    return (
        <div>
            <Router>
                <div>
                    <Header />
                    <div>
                        <Switch>

                            <Route path="/register"><Register /></Route>
                            
                            <Route exact path="/"><Home /></Route>

                            {/* <Route path="/register"><Register/></Route> */}

                            {/* <Route path="/Customer/update"><UpdateCustomer /></Route> */}

                            <Route path="/driver"><ViewDriver /></Route>
                            <Route path="/driver1"><InsertDriver /></Route>
                            <Route path="/driver2"><ViewAllDrivers /></Route>
                            <Route path="/driver3"><ViewBestDrivers /></Route>
                            <Route path="/driver4"><UpdateDriver /></Route>
                            <Route exact path="/login"><Login /></Route>
                            <Route path="/book" ><Booktrip /></Route>
                            {/* <Route path="/view" ><ViewTrips /></Route> */}
                            {/* <Route path="/endTrip"><EndTrip /></Route> */}
                            {/* <Route path="/dashboard"><Dashboard /></Route> */}

                        </Switch >
                    </div >
                    <Footer />
                </div >
            </Router >
        </div >
    )
}
export default Routes;