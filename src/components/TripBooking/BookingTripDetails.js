import { useEffect } from "react";
import { useSelector } from "react-redux";
const BookingTripDetails = () => {
  const CurrentTripListStore = useSelector((state) => state.Trip.TripList);

  return (
    
    <div id="bookingdetails">
      {CurrentTripListStore.status?
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
      :alert("No Live Trip to Show Booking Details")}
    </div>
    
  );
};

export default BookingTripDetails;
