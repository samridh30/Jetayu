import { useSelector } from "react-redux";
import "../../Styles/Trip.css";

const Pagination = (props) => {
  const allTripsListStore = useSelector((state) => state.Trip.AllTripsList);
  return (
    <div className="container">
      <center className="scrollit p-1">
        {allTripsListStore.length >= 1 ? (
          <div class="bg-white">
            <p className="text-dark text-center font-weight-bold lead">
              List of All Trips
            </p>
            <table className="table border border-dark">
              <thead className="thead-dark">
                <tr>
                  <th>tripBooking Id</th>
                  <th>Customer Id</th>
                  <th>From Location</th>
                  <th>To Location</th>
                  <th>Bill</th>
                  <th>driver Name</th>
                  <th>driver rating</th>
                  <th>Cab Type</th>
                  <th>DateTime</th>
                </tr>
              </thead>

              <tbody>
                {allTripsListStore.map((e, index) => (
                  <tr key={index}>
                    <td>{e.tripBookingId}</td>
                    <td>{e.customer.customerId}</td>
                    <td>{e.fromLocation}</td>
                    <td>{e.toLocation}</td>
                    <td>{e.bill}</td>
                    <td>{e.driver.driverName}</td>
                    <td>{e.driver.rating}</td>
                    <td>{e.driver.cab.carType}</td>
                    <td>{e.fromDateTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* Show Popup Message If No PastHistory Trips */
          <div class="alert alert-success alert-dismissible">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">
              &times;
            </a>
            <strong>Info!</strong> No Trips To Show.
          </div>
        )}
      </center>
    </div>
  );
};
export default Pagination;
