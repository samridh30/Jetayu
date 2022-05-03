import { updateTripService } from "../../services/TripService";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTripList } from "../../redux/TripSlice";

/* Update Current Trip Booking Details */
const UpdateTrip = () => {
  const CurrentTripListStore = useSelector((state) => state.Trip.TripList);

  /* State To Store Update Tripbooking Details */
  const [currenttripupdate, setcurrenttripupdate] =
    useState(CurrentTripListStore);

  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    /* Handling UserInput Data */
    setcurrenttripupdate({
      ...currenttripupdate,
      [e.target.name]: e.target.value,
    });

    console.log(currenttripupdate.fromLocation);
    console.log(currenttripupdate.toLocation);
  };

  const update = (e) => {
    e.preventDefault();
    /* Validation on FromLocation and To Location */
    if (
      currenttripupdate.fromLocation !== "" &&
      currenttripupdate.toLocation !== ""
    ) {
      if (currenttripupdate.fromLocation !== currenttripupdate.toLocation) {
        /*{Calling Axios Service method To send Updated Data to Backend} */
        updateTripService(currenttripupdate)
          .then((response) => {
            dispatch(setTripList(response.data));

            alert("Updated");
          })
          .catch(() => {
            alert("Not Updated");
          });
      } else {
        alert("Destination cannot be same as Pickup point");
      }
    } else {
      alert("Empty Fields Not Allowed");
    }
  };

  return (
    <div className="w-100">
      {/* {Checks The Trip is Booked or Not to show Update TripBooking Div} */}
      {CurrentTripListStore.status ? (
        <div className="card mt-3 ml-3 mb-10 bg-light col-lg-7 m-auto ">
          <div className="card-body text-left roundered">
            <div>
              <h4 className="card-header">
                <center>Update trip </center>
              </h4>
              <label>FromLocation</label>
              <input
                type="text"
                name="fromLocation"
                className="form-control"
                onChange={handleUpdate}
                value={currenttripupdate.fromLocation}
                disabled
              />
              <label>To Location</label>
              <input
                type="text"
                name="toLocation"
                className="form-control"
                onChange={handleUpdate}
                value={currenttripupdate.toLocation}
              />
              {/* {Validatate To Location and From Location} */}
              {currenttripupdate.fromLocation ===
                currenttripupdate.toLocation && (
                <div className="text-danger">
                  From Location and To Location Should Not be Same
                </div>
              )}
              {currenttripupdate.toLocation === "" && (
                <div className="text-danger">
                  {" "}
                  To Location Should Not Be Empty
                </div>
              )}

              {CurrentTripListStore.status && (
                <input
                  type="submit"
                  className="btn btn-success form-control mt-3"
                  value="Update"
                  onClick={update}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        /*{If No Current Trip The Below PopUp Message Will Be Shown} */
        <div
          data-testid="Update-trip"
          class="alert alert-success alert-dismissible"
        >
          <a
            data-testid="Update-trip-a"
            href="#"
            class="close"
            data-dismiss="alert"
            aria-label="close"
          >
            &times;
          </a>
          <strong>Info!</strong> No Trip To update
        </div>
      )}
    </div>
  );
};

export default UpdateTrip;
