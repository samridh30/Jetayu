import { endTripService } from "../../services/TripService";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { setTripList } from "../../redux/TripSlice";
import { useDispatch, useSelector } from "react-redux";
import "./EndTrip.css";

const EndTrip = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const CurrentTripListStore = useSelector((state) => state.Trip.TripList);
  const [currenttripupdate, setcurrenttripupdate] =
    useState(CurrentTripListStore);

  const endCab = (e) => {
    e.preventDefault();
    console.log("Trip booked data");

    setcurrenttripupdate.status = false;

    console.log(currenttripupdate.status);
    endTripService()
      .then((response) => {
        console.log(response);
        console.log(response.data.customer.userName);
        dispatch(setTripList(setcurrenttripupdate));
        alert(response.data.customer.userName + " Your Trip Ended ");
      })
      .catch(() => {
        alert("No Trips to End");
      });
  };

  return (
    <div>
      <div className="container">
        <div id="block" className="row">
          <div id="EndTripBlock" className="card col-md-10 mt-5 mb-5 ">
            <label className="card-title">Booking Info</label>

            <div className="card-body ">
              <form>
                <div className="form-inline bg-gray ">
                  <div class="col col-lg-3">
                    <input
                      type="button"
                      placeholder="pickup Location"
                      name="fromLocation"
                      className="form-control button-box col-md-auto"
                      value={CurrentTripListStore.fromLocation}
                    />
                  </div>
                  <div class=" col col-lg-3">
                    <input
                      type="button"
                      name="toLocation"
                      className="form-control button-box col-md-auto "
                      value={CurrentTripListStore.toLocation}
                    />
                  </div>
                  <div className="col-lg-3">
                    <input
                      type="button"
                      className="form-control button-box col-md-auto"
                      value={CurrentTripListStore.bill}
                    />
                  </div>
                  <div className="col-lg-2">
                    <input
                      type="submit"
                      className="btn btn-warning form-control "
                      value="End Cab"
                      onClick={endCab}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndTrip;
