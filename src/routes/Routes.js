import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import Login from "../components/Auth/Login";
import ViewTrips from "../components/TripBooking/ViewTrips";
import Register from "../components/Auth/Register";
import Page404 from "../components/Home/Page404";
import RateDriver from "../components/Driver/RateDriver";
import ViewBestDrivers from "../components/Driver/ViewBestDrivers";

const Routes = () => {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <div>
            <Switch>
              <Route path="/register">
                <Register />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/driver5">
                <RateDriver />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/dashboard" ><ViewTrips /></Route>
              <Route path="/*"> <Page404 /> </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
};
export default Routes;
