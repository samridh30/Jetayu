import { useEffect } from "react";
import { useSelector } from "react-redux";
const BookingTripDetails = () => {
  const CurrentTripListStore = useSelector((state) => state.Trip.TripList);

  return (
    <div id="bookingdetails" className="w-100">
      {CurrentTripListStore.status ? (
        <div className="card mt-3">
          <div class="card-body text-left roundered">
            <div>
              <h4 className="card-header text-center">Booking Details</h4>
              <p>FromLocation- {CurrentTripListStore.fromLocation}</p>
              <p>ToLocation- {CurrentTripListStore.toLocation}</p>
              <p>Bill- {CurrentTripListStore.bill}</p>
              <p>DriverName- {CurrentTripListStore.driver.driverName}</p>
              <p>DriverRating- {CurrentTripListStore.driver.rating}</p>
              <p>CabType- {CurrentTripListStore.driver.cab.carType}</p>
            </div>
          </div>
        </div>
      ) : (
        <div class="alert alert-success alert-dismissible">
          <a href="#" class="close" data-dismiss="alert" aria-label="close">
            &times;
          </a>
          <strong>Info!</strong> No Live Trip To Show Details.
        </div>
      )}
    </div>
  );
};

export default BookingTripDetails;
