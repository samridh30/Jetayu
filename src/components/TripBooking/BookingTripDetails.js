import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const BookingTripDetails = (props) => {
  const CurrentTripListStore = useSelector((state) => state.Trip.TripList);
  const [store, setStore] = useState();
  const [rate, setRate] = useState([]);

  useEffect(() => {
    for (var i = 0; i < CurrentTripListStore.driver.rating; i++) {
      rate.push("*");
    }
    setStore(CurrentTripListStore)
  }, [rate])


  return (
    <div id="bookingdetails" className="w-100">
      {CurrentTripListStore.status ? (
        <div className="card mt-3 ml-3 mb-10 bg-light col-lg-7 m-auto">
          <div class="card-body text-left roundered">
            <div>
              <h4 className="text-center">Booking Details<input type="submit" value="X" style={{ float: 'right', fontSize: '15px' }} className="py-1 btn btn-danger text-light" onClick={props.close} /></h4>
              <p className=" text-warning">Pick Up- <strong className="text-success">{CurrentTripListStore.fromLocation}</strong></p>
              <p className=" text-warning">Destination- <strong className="text-success">{CurrentTripListStore.toLocation}</strong></p>
              <p className=" text-warning">Bill- <strong className="text-success">{CurrentTripListStore.bill}</strong></p>
              <p className=" text-warning">DriverName- <strong className="text-success">{CurrentTripListStore.driver.driverName}</strong></p>
              <p className=" text-warning">Rating- <strong className="text-success">
                {rate.map((item, i) => {
                  return (

                    <span key={i}>&#11088;</span>
                  )
                })}
              </strong></p>
              <p className=" text-warning">Vehicle- <strong className="text-success">{CurrentTripListStore.driver.cab.carType}</strong></p>
              {/* <p>FromLocation- {CurrentTripListStore.fromLocation}</p>
              <p>ToLocation- {CurrentTripListStore.toLocation}</p>
              <p>Bill- {CurrentTripListStore.bill}</p>
              <p>DriverName- {CurrentTripListStore.driver.driverName}</p>
              <p>DriverRating- {CurrentTripListStore.driver.rating}</p>
              <p>CabType- {CurrentTripListStore.driver.cab.carType}</p> */}
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
