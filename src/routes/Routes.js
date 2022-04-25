import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/TripBooking/Home';
import Header from '../components/TripBooking/Header';
import Footer from '../components/TripBooking/Footer';
import Login from '../components/Auth/Login';
import ViewTrips from '../components/TripBooking/ViewTrips';
import Booktrip from '../components/TripBooking/BookTrip';

import Register from '../components/Auth/Register';


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



                            <Route exact path="/login"><Login /></Route>
                            <Route path="/book" ><Booktrip /></Route>
                            <Route path="/view" ><ViewTrips /></Route>
                            <Route path="/endTrip"><EndTrip /></Route>

                        </Switch >
                    </div >
                    {/* <Footer/> */}
                </div >
            </Router >
        </div >
    )
}
export default Routes;