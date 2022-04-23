import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/TripBooking/Home';
import Header from '../components/TripBooking/Header';
import Footer from '../components/TripBooking/Footer';
import Login from '../components/Auth/Login';
import ViewTrips from '../components/TripBooking/ViewTrips';
import Booktrip from '../components/TripBooking/BookTrip';


const Routes = () =>{
    return(
        <div>
            <Router>
                <div>
                    <Header/>
                    <div>
                        <Switch>
                            <Route exact path="/"><Home /></Route>

                            <Route exact path="/login"><Login /></Route>

                            <Route path="/book" ><Booktrip/></Route>
                        
                            <Route path="/view" ><ViewTrips/></Route>
                            
                        </Switch>
                    </div>
                    {/* <Footer/> */}
                </div>
            </Router>
        </div>
    )
}
export default Routes;