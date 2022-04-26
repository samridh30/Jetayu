import {
  bookCabService,
  updateTripService,
  viewTripService,
  endTripService,
} from "../../services/TripService";

import { setAllTripsList } from "../../redux/TripSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { setTripList } from "../../redux/TripSlice";
import loaddash, { update } from "lodash";
import UpdateTrip from "./UpdateTrip";
import BookingTripDetails from "./BookingTripDetails";
import TripPagination from "./TripPagination";

const ViewTrips = () => {
  const CurrentTripListStore = useSelector((state) => state.Trip.TripList);

  const [show, setshow] = useState({
    getTrip: false,
    update: false,
    bookingdetails: false,
    endTrip: false,
  });

  const dispatch = useDispatch();

  const [currenttripupdate, setcurrenttripupdate] =
    useState(CurrentTripListStore);

  useEffect(() => {
    localStorage.setItem(
      "CurrentTripList",
      JSON.stringify(CurrentTripListStore)
    );
  }, [CurrentTripListStore]);

  // fetching trips history for a customer
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
        console.log("Page");
        console.log(response.data.slice(0));
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

    setcurrenttripupdate({
      status: false,
    });
    endTripService()
      .then((response) => {
        console.log("current trip data");
        console.log(currenttripupdate);
        dispatch(setTripList(currenttripupdate));
        console.log(CurrentTripListStore);
        alert(response.data.customer.userName + " Your Trip Ended ");
      })
      .catch(() => {
        alert("No Trips to End");
      });
  };

  const updateTrip = (s) => {
    setshow({
      getTrip: false,
      update: true,
      endTrip: false,
      bookingdetails: false,
    });
    update();
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
        <div className="bg-white shadow shadow-regular mb-3 mt-3 ml-0 px-3 py-3 pb-3 pt-3  col-lg-2">
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

        {show.getTrip && (
          <div className="col-lg-10 mt-3">
            <TripPagination />
          </div>
        )}
        {show.update && (
          <div className="col-lg-6">
            <UpdateTrip fun={update} />
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
