import {
  viewTripService,
  viewTripByIdService,
  viewAllTripDataService,
} from "../../Services/TripService";
import { setAllTripsList } from "../../Redux/TripSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { setTripList } from "../../Redux/TripSlice";
import UpdateTrip from "./UpdateTrip";
import BookingTripDetails from "./BookingTripDetails";
import TripPagination from "./TripPagination";

import "../../Styles/sideNav.css";
import '../../Styles/Trip.css';

import { useHistory } from "react-router-dom";
import { logoutService } from "../../Services/AuthService";

import ViewCustomer from "../Customer/ViewCustomer";
import UpdateCustomer from "../Customer/UpdateCustomer";
import ViewAllCustomers from "../Customer/ViewAllCustomers";

import ViewAllDrivers from "../Driver/ViewAllDrivers";
import InsertDriver from "../Driver/InsertDriver";
import ViewDriver from "../Driver/ViewDriver";

import InsertCab from "../Cab/InsertCab";
import ViewAllCabs from "../Cab/ViewAllCabs";
import ViewCabsofType from "../Cab/ViewCabsofType";
import UpdateCab from "../Cab/UpdateCab";
import ViewBestDrivers from "../Driver/ViewBestDrivers";

const ViewTrips = (props) => {
  const history = useHistory();
  const CurrentTripListStore = useSelector((state) => state.Trip.TripList);

  const [show, setshow] = useState({
    getTrip: false,
    update: false,
    bookingdetails: false,
    endTrip: false,
    viewCust: true,
    updateCust: false,
    allTrips: false,
    addDriver: false,
    viewDriver: false,
    updateDriver: false,
    addCab: false,
    viewCab: false,
    viewType: false,
    ViewAllCust: false,
    bestDriver: false,
  });

  const [user, setUser] = useState({});
  const [role, setRole] = useState("");
  const [CusId, setCusId] = useState("");
  const [driverId, setDriverId] = useState();
  const [tripTemp, setTripTemp] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (CurrentTripListStore !== undefined) {
      setTripTemp(CurrentTripListStore.status)
    }
    if (JSON.parse(localStorage.getItem("loggedInUser")).role !== null) {
      console.log(JSON.parse(localStorage.getItem("loggedInUser")));
      setRole(JSON.parse(localStorage.getItem("loggedInUser")).role);
      setUser(JSON.parse(localStorage.getItem("loggedInUser")));
      console.log(user, role);
    } else {
      history.push("/");
      window.location.reload(true)
    }
  }, []);

  const handletripTypeByIdData = (e) => {
    console.log(e.target.value);
    setCusId(e.target.value);
  };

  const submitGetTripById = (evt) => {
    setshow({
      getTrip: true,
      update: false,
      endTrip: false,
      bookingdetails: false,
      viewCust: false,
      updateCust: false,
    });
    evt.preventDefault();
    viewTripService()
      .then((response) => {
        dispatch(setAllTripsList(response.data));
      })
      .catch((error) => {
        alert(error);
      });
  };

  const submitGetAllTripById = (evt) => {
    setshow({
      getTrip: true,
      update: false,
      endTrip: false,
      bookingdetails: false,
      viewCust: false,
      updateCust: false,
    });
    evt.preventDefault();
    console.log(CusId);
    if (CusId) {
      viewTripByIdService(CusId)
        .then((response) => {
          console.log(response.data);
          dispatch(setAllTripsList(response.data));
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert("Enter Customer ID to get Trips");
    }
  };

  /* End Cab Funciton */

  const endCab = (e) => {
    setshow({
      getTrip: false,
      update: false,
      endTrip: true,
      bookingdetails: false,
      viewCust: false,
      updateCust: false,
    });
    history.push("/driver5");
    window.location.reload(true)
  };

  const updateDriver = (drive) => {
    // console.log("Driver ID: ", drive)
    setDriverId(drive);
    setshow({
      updateDriver: true,
    });
  };

  const updateCab = (drive) => {
    // console.log("Driver ID: ", drive)
    setDriverId(drive);
    setshow({
      updateCab: true,
    });
  };

  const updateTrip = (s) => {
    setshow({
      getTrip: false,
      update: true,
      endTrip: false,
      bookingdetails: false,
      viewCust: false,
      updateCust: false,
    });
  };

  const bookingdetails = () => {
    setshow({
      getTrip: false,
      update: false,
      endTrip: false,
      bookingdetails: true,
      viewCust: false,
      updateCust: false,
    });
  };

  const submitGetAllTrip = (evt) => {
    setshow({
      getTrip: true,
      update: false,
      endTrip: false,
      bookingdetails: false,
    });
    evt.preventDefault();
    viewAllTripDataService()
      .then((response) => {
        console.log(response.data);
        dispatch(setAllTripsList(response.data));
      })
      .catch((error) => {
        alert(error);
      });
  };
  const logoutMethod = () => {
    // console.log(JSON.parse(localStorage.getItem("loggedInUser")))
    logoutService()
      .then((response) => {
        alert(response.data);
        localStorage.removeItem("loggedInUser");
        dispatch(setTripList());
        history.push("/");
        window.location.reload(true);
      })
      .then(props.logUser());
  };

  return (
    <div style={{ minHeight: "99vh", maxHeight: "99vh", overflowY: 'hidden' }}>
      <div className="wrapper">
        {role === "CUSTOMER" ? (
          <nav id="sidebar" className="">
            <div className="scrollit">

              <div onClick={() => {
                history.push("/");
                window.location.reload(true)
              }}>
                <img height={50} width={50} src={require("../Home/HomePageImg.png")} />
                <h3>JETAYU</h3>

              </div>
              <hr />
              <ul
                className="list-unstyled components"
                style={{ marginTop: "-25px" }}
              >
                <div style={{ marginTop: "-10px" }}>
                  <p
                    style={{ fontSize: "30px", fontWeight: "lighter" }}
                    className="text-warning text-truncate"
                  >
                    {JSON.parse(localStorage.getItem('loggedInUser')).userName}
                  </p>
                  <p
                    style={{ fontSize: "15px", marginTop: "-40px" }}
                    className="font-weight-lighter"
                  >
                    {/* {user.role} */}
                  </p>
                </div>
                {/* <hr /> */}
                {/* <br /> */}

                <li style={{ marginTop: "-10px" }}>
                  <a
                    // type="submit"
                    // className="form-control mb-3 mt-3 btn btn-primary href=gettrips "
                    data-toggle="collapse"
                    data-target="#gettrips"
                    value="Get Trips"
                    onClick={submitGetTripById}
                  >
                    Trips History
                  </a>
                </li>
                <center>
                  <hr className="w-75" />
                </center>
                <li>
                  <a
                    href="#pageSubmenu"
                    data-toggle="collapse"
                    aria-expanded="false"
                    className="dropdown-toggle text-light"
                    style={{ textDecoration: 'none' }}

                  >
                    Current Trip
                  </a>
                  {tripTemp ? (
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                      <li>
                        <a
                          // type="submit"
                          // className="form-control mb-3 mt-3 btn btn-primary"
                          value="Booking details"
                          onClick={bookingdetails}
                        >
                          View
                        </a>
                      </li>
                      <li>
                        <a
                          // type="submit"
                          // className="form-control mb-3 mt-3 btn btn-primary"
                          value="Booking details"
                          onClick={updateTrip}
                        >
                          Update
                        </a>
                      </li>

                      <li className="p-3 text-light">
                        <a
                          className="bg-danger text-light CTAs"
                          // type="submit"
                          // className="form-control mb-3 mt-3 btn btn-primary href=gettrips "
                          data-toggle="collapse"
                          data-target="#gettrips"
                          value="End Trip"
                          onClick={endCab}
                        >
                          End
                        </a>
                      </li>
                    </ul>
                  ) : (
                    <li></li>
                  )}
                </li>
                <center>
                  <hr className="w-75" />
                </center>
                <li>
                  <a
                    // type="submit"
                    // className="form-control mb-3 mt-3 btn btn-primary"
                    value="Booking details"
                    onClick={() =>
                      setshow({
                        getTrip: false,
                        update: false,
                        endTrip: false,
                        bookingdetails: false,
                        viewCust: false,
                        updateCust: true,
                      })
                    }
                  >
                    Profile
                  </a>
                </li>

              </ul>
              <ul className="list-unstyled CTAs" style={{ marginTop: "-30px" }}>
                <li className="w-100">
                  <a
                    className="download bg-danger text-light"
                    onClick={logoutMethod}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        ) : (

          <nav id="sidebar">
            <div className="scrollit">
              <div className="sidebar-header">
                <div onClick={() => {
                  history.push("/");
                  window.location.reload(true)
                }}>
                  <img height={50} width={50} src={require("../Home/HomePageImg.png")} />
                  <h3>JETAYU</h3>

                </div>
              </div>
              <hr />

              <ul
                className="list-unstyled components"
                style={{ marginTop: "-25px" }}
              >
                <div style={{ marginTop: "-10px" }}>
                  <p
                    style={{ fontSize: "30px", fontWeight: "lighter" }}
                    className="text-warning text-truncate "
                  >
                    {/* {user.userName} */}
                    {JSON.parse(localStorage.getItem('loggedInUser')).userName}

                  </p>
                  <p
                    style={{ fontSize: "15px", marginTop: "-40px" }}
                    className="font-weight-lighter"
                  >
                    {/* {user.role} */}
                  </p>
                </div>
                {/* <hr /> */}
                {/* <br /> */}

                <li style={{ marginTop: "-10px" }}>
                  <a
                    // type="submit"
                    // className="form-control mb-3 mt-3 btn btn-primary href=gettrips "
                    data-toggle="collapse"
                    data-target="#gettrips"
                    value="Get Trips"
                    onClick={() => {
                      setshow({
                        ViewAllCust: true,
                      });
                    }}
                  >
                    All Customers
                  </a>
                </li>
                <center>
                  <hr className="w-75" />
                </center>
                <li>
                  <a
                    href="#pageSubmenu"
                    data-toggle="collapse"
                    aria-expanded="false"
                    className="dropdown-toggle text-light"
                    style={{ textDecoration: 'none' }}

                  >
                    Trips
                  </a>
                  <ul className="collapse list-unstyled" id="pageSubmenu">
                    <li>
                      <input
                        type="text"
                        className="form-control mb-3 mt-3 w-75  href=gettrips col-md-6 m-auto "
                        value={CusId}
                        placeholder="Customer Id"
                        onChange={handletripTypeByIdData}
                      />
                      <a
                        // type="submit"
                        // placeholder="Get Trips"
                        // className="btn-success col-md-3 px-2 py-1 w-100 m-auto mb-1"
                        value="Get Trips"
                        onClick={submitGetAllTripById}
                      >
                        Get Trips
                      </a>
                    </li>
                    <li>
                      <a
                        // type="submit"
                        // className="form-control mb-3 mt-3 btn btn-primary"
                        value="Get All Trips"
                        onClick={submitGetAllTrip}
                      >
                        All Trips
                      </a>
                    </li>
                    {/* <li className="p-3 text-light">
                    <a
                      className="bg-danger text-light CTAs"
                      // type="submit"
                      // className="form-control mb-3 mt-3 btn btn-primary href=gettrips "
                      data-toggle="collapse"
                      data-target="#gettrips"
                      value="End Trip"
                      onClick={endCab}
                    >
                      End
                    </a>
                  </li> */}
                  </ul>
                </li>
                <center>
                  <hr className="w-75" />
                </center>

                <li className="active">
                  <a
                    href="#homeSubmenu"
                    data-toggle="collapse"
                    aria-expanded="true"
                    className="dropdown-toggle"
                    style={{ textDecoration: 'none' }}
                  >
                    Driver
                  </a>
                  <ul className="collapse list-unstyled" id="homeSubmenu">
                    <li>
                      <a
                        // type="submit"
                        // className="form-control mb-3 mt-3 btn btn-primary"
                        value="Booking details"
                        onClick={() => {
                          setshow({
                            getTrip: false,
                            update: false,
                            endTrip: false,
                            bookingdetails: false,
                            viewCust: false,
                            updateCust: false,
                            allTrips: false,
                            addDriver: true,
                          });
                        }}
                      >
                        Add Driver
                      </a>
                    </li>
                    <li>
                      <a
                        // type="submit"
                        // className="form-control mb-3 mt-3 btn btn-primary"
                        value="Booking details"
                        onClick={() =>
                          setshow({
                            // getTrip: false,
                            // update: false,
                            // endTrip: false,
                            // bookingdetails: false,
                            // viewCust: false,
                            // updateCust: false,
                            // allTrips: false,
                            // addDriver: false,
                            viewDriver: true,
                          })
                        }
                      >
                        View All Driver
                      </a>
                    </li>
                    <li>
                      <a
                        // type="submit"
                        // className="form-control mb-3 mt-3 btn btn-primary"
                        value="Best Drivers"
                        onClick={() =>
                          setshow({
                            // getTrip: false,
                            // update: false,
                            // endTrip: false,
                            // bookingdetails: false,
                            // viewCust: false,
                            // updateCust: false,
                            // allTrips: false,
                            // addDriver: false,
                            bestDriver: true,
                          })
                        }
                      >
                        View Best Driver
                      </a>
                    </li>
                  </ul>
                </li>

                <center>
                  <hr className="w-75" />
                </center>

                <li className="active">
                  <a
                    href="#Submenu"
                    data-toggle="collapse"
                    aria-expanded="true"
                    className="dropdown-toggle"
                    style={{ textDecoration: 'none' }}

                  >
                    Cab
                  </a>
                  <ul className="collapse list-unstyled" id="Submenu">
                    <li>
                      <a
                        // type="submit"
                        // className="form-control mb-3 mt-3 btn btn-primary"
                        value="Booking details"
                        onClick={() => {
                          setshow({
                            // getTrip: false,
                            // update: false,
                            // endTrip: false,
                            // bookingdetails: false,
                            // viewCust: false,
                            // updateCust: false,
                            // allTrips: false,
                            addCab: true,
                          });
                        }}
                      >
                        Add Cab
                      </a>
                    </li>
                    <li>
                      <a
                        // type="submit"
                        // className="form-control mb-3 mt-3 btn btn-primary"
                        value="Booking details"
                        onClick={() =>
                          setshow({
                            // getTrip: false,
                            // update: false,
                            // endTrip: false,
                            // bookingdetails: false,
                            // viewCust: false,
                            // updateCust: false,
                            // allTrips: false,
                            // addDriver: false,
                            viewCab: true,
                          })
                        }
                      >
                        View All Cab
                      </a>
                    </li>
                    <li>
                      <a
                        // type="submit"
                        // className="form-control mb-3 mt-3 btn btn-primary"
                        value="Booking details"
                        onClick={() =>
                          setshow({
                            // getTrip: false,
                            // update: false,
                            // endTrip: false,
                            // bookingdetails: false,
                            // viewCust: false,
                            // updateCust: false,
                            // allTrips: false,
                            // addDriver: false,
                            viewType: true,
                          })
                        }
                      >
                        View By Type
                      </a>
                    </li>
                  </ul>
                </li>

                <center>
                  <hr className="w-75" />
                </center>

                <li>
                  <a
                    // type="submit"
                    // className="form-control mb-3 mt-3 btn btn-primary"
                    value="Booking details"
                    onClick={() =>
                      setshow({
                        getTrip: false,
                        update: false,
                        endTrip: false,
                        bookingdetails: false,
                        viewCust: false,
                        updateCust: true,
                      })
                    }
                  >
                    Profile
                  </a>
                </li>
              </ul>
              <ul className="list-unstyled CTAs" style={{ marginTop: "-30px" }}>
                <li className="w-100">
                  <a
                    className="download bg-danger text-light"
                    onClick={logoutMethod}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        )}
        {show.ViewAllCust && <ViewAllCustomers />}
        {show.getTrip && <TripPagination />}
        {show.update && <UpdateTrip />}
        {show.bookingdetails && <BookingTripDetails />}
        {show.viewCust && <ViewCustomer />}
        {show.updateCust && <UpdateCustomer />}

        {show.allTrips && <ViewAllCustomers />}
        {show.addDriver && <InsertDriver />}
        {show.viewDriver && <ViewAllDrivers test={user} dash={updateDriver} />}
        {show.updateDriver && (
          <ViewDriver
            id={driverId}
            back={() =>
              setshow({
                // getTrip: false,
                // update: false,
                // endTrip: false,
                // bookingdetails: false,
                // viewCust: false,
                // updateCust: false,
                // allTrips: false,
                // addDriver: false,
                viewDriver: true,
              })
            }
          />
        )}
        {show.bestDriver && <ViewBestDrivers />}

        {show.addCab && <InsertCab />}
        {show.viewCab && <ViewAllCabs dash={updateCab} />}
        {show.viewType && <ViewCabsofType dash={updateCab} />}
        {show.updateCab && (
          <UpdateCab
            id={driverId}
            back={() =>
              setshow({
                // getTrip: false,
                // update: false,
                // endTrip: false,
                // bookingdetails: false,
                // viewCust: false,
                // updateCust: false,
                // allTrips: false,
                // addDriver: false,
                viewCab: true,
              })
            }
          />
        )}

        {/* {show.getTrip && (
        <div className="col-lg-6">
          <TripPagination />
        </div>
      )}
      {show.update && (
        <div className="col-lg-6">
          <UpdateTrip />
        </div>
      )}
      {show.bookingdetails && (
        <div className="col-lg-6">
          <BookingTripDetails />
        </div>
      )} */}
      </div>
    </div>
  );
};
export default ViewTrips;