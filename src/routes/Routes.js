import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import ViewTrips from '../components/ViewTrips';

import Booktrip from '../components/BookTrip';
import EndTrip from '../components/EndTrip';
import Home from '../components/Home';
import Login from '../components/Auth/Login'
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
                            <Route exact path="/login"><Login /></Route>
                            <Route path="/book" ><Booktrip /></Route>
                            <Route path="/view" ><ViewTrips /></Route>
                            <Route path="/endTrip"><EndTrip /></Route>
                        </Switch>
                    </div>
                    {/* <Footer/> */}
                </div>
            </Router>
        </div>
    )
}

export default Routes;