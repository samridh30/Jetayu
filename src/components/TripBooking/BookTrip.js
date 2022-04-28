import { bookCabService } from "../../services/TripService";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { setTripList } from "../../redux/TripSlice";
import { useDispatch, useSelector } from "react-redux";
import "./BookTrip.css";

const Booktrip = () => {
  const CurrentTripListStore = useSelector((state) => state.Trip.TripList);

  const [booktrip, setBookTrip] = useState({
    fromLocation: "",
    toLocation: "",
    cabType: "",
  });

  const [error, setError] = useState(false);
  const [user, setUser] = useState();

  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('loggedInUser')) {
      setUser(JSON.parse(localStorage.getItem('loggedInUser')).role);
      console.log(user)
    }
  })

  const handleaddTripData = (e) => {
    console.log(e.target.value);
    setBookTrip({
      ...booktrip,
      [e.target.name]: e.target.value,
    });
  };

  const errorBooking = () => {
    return (
      <div className="position-absolute w-100 alert alert-success alert-dismissible">
        {/* <a href="#" className="close" data-dismiss="alert" onClick={() => setError(false)} aria-label="close">&times;</a> */}
        <h5>
          <strong>Info!</strong> Please Enter Valid Details
          <br />
          <input
            type="submit"
            className="btn btn-danger form-control w-25 px-1"
            value="OK"
            onClick={() => setError(false)}
          />
        </h5>
      </div>
    )
  }

  const addTrip = (e) => {
    if (user === 'CUSTOMER') {
      console.log(booktrip.cabType);
      e.preventDefault();
      let tripDetails = { ...booktrip };

      bookCabService(tripDetails)
        .then((response) => {
          dispatch(setTripList(response.data));
          // alert("Cab Booked Succesfully");
          // history.push("/");
          window.location.reload(true)
        })
        .catch(() => {
          // alert("Invalid Inputs");
          setError(true);
          setBookTrip({
            fromLocation: "",
            toLocation: "",
            cabType: "",
          });
        })
    }
    else {
      history.push('/login')
    }
  };
  return (

    <div className="container">
      <div id="block" className="row mx-auto">
        <div id="BookTripBlock" className="card col-md-10 mx-auto shadow-lg" style={{ borderRadius: "10" }}>
          <div className="card-body">
            <form>
              {(!error) ?
                <div className="form-inline">
                  <div className="col col-lg-3">
                    {/* <label className='card-title'>Pickup</label> */}
                    <input
                      type="text"
                      placeholder="Pickup Location..."
                      name="fromLocation"
                      className="form-control col-md-auto px-2 w-100"
                      value={booktrip.fromLocation}
                      onChange={handleaddTripData}
                    />
                  </div>
                  <div className=" col col-lg-3">
                    {/* <label className='card-title'>Enter Drop Location</label> */}
                    <input
                      type="text"
                      placeholder="Drop Location..."
                      name="toLocation"
                      className="form-control col-md-auto px-2 w-100 "
                      value={booktrip.toLocation}
                      onChange={handleaddTripData}
                    />
                  </div>
                  <div className="col-lg-3">
                    <div>
                      {/* <label className='card-title'>Select Cab Type</label> */}
                      <select
                        className="form-select col-md-auto px-2 w-100 "
                        value={booktrip.cabType}
                        onChange={handleaddTripData}
                        name="cabType"
                        placeholder="CabType"
                      >
                        <option value="" selected >Choose Cab Type...</option>
                        <option value="Mini">Mini</option>
                        <option value="Auto">Auto</option>
                        <option value="Luxury">Luxury</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <input
                      type="submit"
                      className="btn btn-warning form-control w-100 px-2"
                      data-toggle="collapse"
                      data-target="#data"
                      value="Book Cab"
                      onClick={addTrip}
                    />
                  </div>
                </div>
                : errorBooking()}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booktrip;
