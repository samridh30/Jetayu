import { useEffect } from "react";
import { useSelector } from "react-redux";
const BookingTripDetails = () => {
  
  const LocalCurrentTripListStore = JSON.parse(
    localStorage.getItem("CurrentTripList")
  );


  return (
    <div id="bookingdetails">
      <div className="card mt-3">
        <div class="card-body text-left roundered">
          {LocalCurrentTripListStore && (
            <div>
              <h4 className="card-header text-center">Booking Details</h4>
              {/* <p>TripBookingId- {TripListStore.tripBookingId}</p> */}
              <p>FromLocation- {LocalCurrentTripListStore.fromLocation}</p>
              <p>ToLocation- {LocalCurrentTripListStore.toLocation}</p>
              <p>Bill- {LocalCurrentTripListStore.bill}</p>
              <p>DriverName- {LocalCurrentTripListStore.driver.driverName}</p>
              <p>DriverRating- {LocalCurrentTripListStore.driver.rating}</p>
              <p>CabType- {LocalCurrentTripListStore.driver.cab.carType}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingTripDetails;
