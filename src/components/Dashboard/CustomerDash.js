import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAllTripsList } from "../../redux/TripSlice";
import { Link } from "react-router-dom";
import Logout from "../Auth/Logout";
import '../../styles/sideNav.css'
import {
        viewTripService,
        endTripService,
        viewTripByIdService,
} from "../../services/TripService";
import ViewTrips from "../TripBooking/ViewTrips";
import TripPagination from "../TripBooking/TripPagination";

const CustomerDash = (props) => {

        const history = useHistory();
        const dispatch = useDispatch();

        const [show, setshow] = useState({
                getTrip: false,
                update: false,
                bookingdetails: false,
                endTrip: false,
        });

        const [CusId, setCusId] = useState("");


        useEffect(() => {
                if (!JSON.parse(localStorage.getItem("loggedInUser"))) {
                        history.push("/")

                }
        }, [])

        const submitGetAllTripById = (evt) => {
                setshow({
                        getTrip: true,
                        update: false,
                        endTrip: false,
                        bookingdetails: false,
                });
                evt.preventDefault();
                console.log(CusId);
                viewTripByIdService(CusId)
                        .then((response) => {
                                console.log(response.data);
                                dispatch(setAllTripsList(response.data));
                        })
                        .catch((error) => {
                                alert(error);
                        });
        };
        return (
                <div>
                        <div class="wrapper">
                                <nav id="sidebar">
                                        <div class="sidebar-header">
                                                <h3>Bootstrap Sidebar</h3>
                                        </div>

                                        <ul class="list-unstyled components">
                                                <p>Dummy Heading</p>
                                                <li class="active">
                                                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                                                        <ul class="collapse list-unstyled" id="homeSubmenu">
                                                                <li>
                                                                        <a href="#">Home 1</a>
                                                                </li>
                                                                <li>
                                                                        <a href="#">Home 2</a>
                                                                </li>
                                                                <li>
                                                                        <a href="#">Home 3</a>
                                                                </li>
                                                        </ul>
                                                </li>
                                                <li>
                                                        <a onClick={submitGetAllTripById}>Get</a>
                                                </li>
                                                <li>
                                                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                                                        <ul class="collapse list-unstyled" id="pageSubmenu">
                                                                <li>
                                                                        <a href="#">Page 1</a>
                                                                </li>
                                                                <li>
                                                                        <a href="#">Page 2</a>
                                                                </li>
                                                                <li>
                                                                        <a href="#">Page 3</a>
                                                                </li>
                                                        </ul>
                                                </li>
                                                <li>
                                                        <a href="#">Portfolio</a>
                                                </li>
                                                <li>
                                                        <a href="#">Contact</a>
                                                </li>
                                        </ul>

                                        <ul class="list-unstyled CTAs">
                                                <li>
                                                        <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a>
                                                </li>
                                                <li>
                                                        <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a>
                                                </li>
                                        </ul>
                                </nav>

                                <div id="content">
                                        {show.getTrip && (
                                                <div className="col-lg-6">
                                                        <TripPagination />
                                                </div>
                                        )}
                                </div>
                        </div>
                </div >
        )
}

export default CustomerDash;