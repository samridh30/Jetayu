import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import Login from '../components/Auth/Login';
import ViewTrips from '../components/TripBooking/ViewTrips';
import Booktrip from '../components/TripBooking/BookTrip';
import EndTrip from '../components/TripBooking/EndTrip';
import Register from '../components/Auth/Register';
import InsertDriver from '../components/Driver/InsertDriver';
import ViewDriver from '../components/Driver/ViewDriver';
import ViewAllDrivers from '../components/Driver/ViewAllDrivers';
import ViewBestDrivers from '../components/Driver/ViewBestDrivers';
import UpdateDriver from '../components/Driver/UpdateDriver';
import ViewCustomer from '../components/Customer/ViewCustomer';
import UpdateCustomer from "../components/Customer/UpdateCustomer";
import ViewAllCustomers from '../components/Customer/ViewAllCustomers';

import InsertCab from '../components/Cab/InsertCab';
import UpdateCab from '../components/Cab/UpdateCab';
import ViewAllCabs from '../components/Cab/ViewAllCabs';
import ViewCabsofType from '../components/Cab/ViewCabsofType';
import CountCabsofType from '../components/Cab/CountCabsOfType';

// import ViewCabsofType from '../components/Cab/ViewCabsofType';




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

                            <Route path="/Customer/update"><UpdateCustomer /></Route>
                            <Route path="/Customer/view"><ViewCustomer /></Route>
                            <Route path="/Customer/viewAll"><ViewAllCustomers /></Route>
                            <Route path="/cab/viewByType"><ViewCabsofType /></Route>

                            <Route path="/driver"><ViewDriver /></Route>
                            <Route path="/driver1"><InsertDriver /></Route>
                            <Route path="/driver2"><ViewAllDrivers /></Route>
                            <Route path="/driver3"><ViewBestDrivers /></Route>
                            <Route path="/driver4"><UpdateDriver /></Route>
                            <Route exact path="/login"><Login /></Route>
                            <Route path="/book" ><Booktrip /></Route>

                            <Route path="/insertCab"><InsertCab /></Route>
                            <Route path="/updateCab"><UpdateCab /></Route>
                            <Route path="/viewCabs"><ViewAllCabs /></Route>
                            <Route path="/viewCabsOfType"><ViewCabsofType /></Route>
                            <Route path="/countCabsOfType"><CountCabsofType /></Route>

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