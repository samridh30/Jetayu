import { viewTripService, endTripService,viewTripByIdService } from "../../services/TripService";

import { setAllTripsList } from "../../redux/TripSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { setTripList } from "../../redux/TripSlice";
import UpdateTrip from "./UpdateTrip";
import BookingTripDetails from "./BookingTripDetails";
import TripPagination from "./TripPagination";
import Trip from "../../Model/Trip";

const ViewTrips = () => {
  const role = JSON.parse(localStorage.getItem('loggedInUser')).role
  const [show, setshow] = useState({
    getTrip: false,
    update: false,
    bookingdetails: false,
    endTrip: false,
  });

  const[CusId,setCusId]= useState('');

  const dispatch = useDispatch();

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
    });
    evt.preventDefault();
    console.log(CusId)
    viewTripByIdService(CusId)
      .then((response) => {
        console.log(response.data);
        dispatch(setAllTripsList(response.data));
      })
      .catch((error) => {
        alert(error);
      });
  };

  const endCab = (e) => {
    setshow({
      getTrip: false,
      update: false,
      endTrip: true,
      bookingdetails: false,
    });
    e.preventDefault();
    endTripService()
      .then((response) => {
        dispatch(setTripList(new Trip()));
        alert(response.data.customer.userName + " Your Trip Ended ");
      })
      .catch(() => {

        <div class="alert alert-success alert-dismissible">
          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
          <strong>Info!</strong> No Trips To end.
        </div>
        alert("No trips to end")
      });
  };

  const updateTrip = (s) => {
    setshow({
      getTrip: false,
      update: true,
      endTrip: false,
      bookingdetails: false,
    });
  };

  const bookingdetails = () => {
    setshow({
      getTrip: false,
      update: false,
      endTrip: false,
      bookingdetails: true,
    });
  };

  return (
    <div className="container">
      <div className="row">
        {(role === 'CUSTOMER')?
        <div className="bg-white h-50 shadow shadow-regular mb-3 mt-3 ml-0 px-3 py-3 pb-3 pt-3 col-lg-2">
          <div className="form form-group ">
            <input
              type="submit"
              className="form-control mb-3 mt-3 btn btn-primary"
              value="Booking details"
              onClick={bookingdetails}
            />
            <input
              type="submit"
              className="form-control mb-3 mt-3 btn btn-primary"
              value="update Trip"
              onClick={updateTrip}
            />
            <input
              type="submit"
              className="form-control mb-3 mt-3 btn btn-primary href=gettrips "
              data-toggle="collapse"
              data-target="#gettrips"
              value="Get Trips"
              onClick={submitGetTripById}
            />

            <input
              type="submit"
              className="form-control mb-3 mt-3 btn btn-primary href=gettrips "
              data-toggle="collapse"
              data-target="#gettrips"
              value="End Trip"
              onClick={endCab}
            />
          </div>
        </div>
        : <div>
          <input
              type="text"
              className="form-control mb-3 mt-3  href=gettrips col-md-6 m-auto "
              value={CusId}
              placeholder='Customer Id'
              onChange={handletripTypeByIdData}
            />

        <input
          type="submit"
          placeholder="Get Trips"
          className="btn-success col-md-3 px-2 w-100 m-auto mb-3"
          value="Get Trips"
          onClick={submitGetAllTripById}
        />
          </div>
        }

        {show.getTrip && (
          <div className="col-lg-10 mt-3">
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
        )}
      </div>
    </div>
  );
};
export default ViewTrips;