import {
  viewTripService,
  endTripService,
  viewTripByIdService,
  viewAllTripDataService,
} from "../../services/TripService";
import { setAllTripsList } from "../../redux/TripSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { setTripList } from "../../redux/TripSlice";
import UpdateTrip from "./UpdateTrip";
import BookingTripDetails from "./BookingTripDetails";
import TripPagination from "./TripPagination";
import Trip from "../../Model/Trip";
import { Link } from "react-router-dom";
import "../../styles/sideNav.css";
import { useHistory } from "react-router-dom";
import { logoutService } from "../../services/AuthService";

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

  // const [showAdmin, setShowAdmin] = useState({
  //   allTrips: false,
  //   addDriver: false
  // })

  const [user, setUser] = useState();
  const [role, setRole] = useState();
  const [CusId, setCusId] = useState("");
  const [driverId, setDriverId] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(CurrentTripListStore.status);
    if (JSON.parse(localStorage.getItem("loggedInUser")).role !== null) {
      console.log(JSON.parse(localStorage.getItem("loggedInUser")));
      setRole(JSON.parse(localStorage.getItem("loggedInUser")).role);
      setUser(JSON.parse(localStorage.getItem("loggedInUser")));
      console.log(user, role);
    } else {
      history.push("/");
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

    // e.preventDefault();
    // endTripService()
    //   .then((response) => {
    //     // dispatch(setTripList(new Trip()));
    //     // alert(response.data.customer.userName + " Your Trip Ended ");
    //   })
    //   .catch(() => {
    //     <div className="alert alert-success alert-dismissible">
    //       <a href="#" className="close" data-dismiss="alert" aria-label="close">
    //         &times;
    //       </a>
    //       <strong>Info!</strong> No Trips To end.
    //     </div>;
    //     alert("No trips to end");
    //   });
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
    <div style={{ zIndex: "2" }}>
      <div className="wrapper">
        {role === "CUSTOMER" ? (
          <nav id="sidebar" className="">
            <div className="sidebar-header">
              <h3 onClick={() => props.fun}>JATAYU</h3>
            </div>
            <hr />

            <ul
              className="list-unstyled components"
              style={{ marginTop: "-25px" }}
            >
              <div style={{ marginTop: "-10px" }}>
                <p
                  style={{ fontSize: "30px", fontWeight: "lighter" }}
                  className="text-light "
                >
                  {user.userName}
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
                  class="dropdown-toggle"
                >
                  Current Trip
                </a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
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
                  {CurrentTripListStore.status ? (
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
                  ) : (
                    <li></li>
                  )}
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
              {/* <li class="active">
                <a
                  href="#homeSubmenu"
                  data-toggle="collapse"
                  aria-expanded="true"
                  class="dropdown-toggle"
                >
                  Profile
                </a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
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
                          viewCust: true,
                          updateCust: false,
                        })
                      }
                    >
                      View
                    </a>
                  </li>
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
                      Update
                    </a>
                  </li>
                </ul>
              </li> */}
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
          </nav>
        ) : (
          // <div>
          // <input
          //   type="text"
          //   className="form-control mb-3 mt-3  href=gettrips col-md-6 m-auto "
          //   value={CusId}
          //   placeholder="Customer Id"
          //   onChange={handletripTypeByIdData}
          // />
          // <input
          //   type="submit"
          //   placeholder="Get Trips"
          //   className="btn-success col-md-3 px-2 py-1 w-100 m-auto mb-1"
          //   value="Get Trips"
          //   onClick={submitGetAllTripById}
          // />
          //   <input
          //     type="submit"
          //     className="form-control mb-3 mt-3 btn btn-primary  col-md-4 "
          //     href="#AllTrips"
          //     data-toggle="collapse"
          //     data-target="#AllTrips"
          //     value="Trips"
          //     onClick={submitGetAllTrip}
          //   />

          // </div>
          <nav id="sidebar" className="">
            <div className="sidebar-header">
              <h3 onClick={() => history.push("/")}>JATAYU</h3>
            </div>
            <hr />

            <ul
              className="list-unstyled components"
              style={{ marginTop: "-25px" }}
            >
              <div style={{ marginTop: "-10px" }}>
                <p
                  style={{ fontSize: "30px", fontWeight: "lighter" }}
                  className="text-light "
                >
                  {/* {user.userName} */}
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
                  class="dropdown-toggle"
                >
                  Trips
                </a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
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

              <li class="active">
                <a
                  href="#homeSubmenu"
                  data-toggle="collapse"
                  aria-expanded="true"
                  class="dropdown-toggle"
                >
                  Driver
                </a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
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
                </ul>
              </li>

              <center>
                <hr className="w-75" />
              </center>

              <li class="active">
                <a
                  href="#Submenu"
                  data-toggle="collapse"
                  aria-expanded="true"
                  class="dropdown-toggle"
                >
                  Cab
                </a>
                <ul class="collapse list-unstyled" id="Submenu">
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
        {}

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
