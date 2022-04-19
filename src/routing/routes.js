
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Routes = () => {

        return (
                <div>
                        <Router>
                                <div>
                                        <Header />
                                        <div>
                                                <Switch>
                                                        <Route exact path="/"><Home /></Route>
                                                </Switch>
                                        </div>
                                        <Footer />
                                </div>
                        </Router>
                </div>
        );
}


export default Routes;