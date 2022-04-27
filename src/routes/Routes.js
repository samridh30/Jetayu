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