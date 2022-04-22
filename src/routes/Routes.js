<<<<<<< HEAD

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../components/Auth/Login';

const Routes = () => {

        return (
                <div>
                        <Router>
                                <div>
                                        <Header />
                                        <div>
                                                <Switch>
                                                        <Route exact path="/"><Home /></Route>
                                                        <Route exact path="/login"><Login /></Route>
                                                </Switch>
                                        </div>
                                        <Footer />
                                </div>
                        </Router>
                </div>
        );
}


=======
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import ViewTrips from '../components/ViewTrips';

import Booktrip from '../components/BookTrip';
import EndTrip from '../components/EndTrip';
import Footer from '../components/Footer';


const Routes = () =>{
    return(
        <div>
            <Router>
                <div>
                    <Header/>
                    <div>
                        <Switch>
                            <Route path="/book" ><Booktrip/></Route>
                        
                            <Route path="/view" ><ViewTrips/></Route>
                            
                            <Route path="/endTrip"><EndTrip/></Route>
                        </Switch>
                    </div>
                    {/* <Footer/> */}
                </div>
            </Router>
        </div>
    )
}

>>>>>>> 404c5b827719a7d31891669301afafdc7a870129
export default Routes;