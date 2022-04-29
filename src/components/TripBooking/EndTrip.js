import { endTripService } from "../../services/TripService";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { setTripList } from "../../redux/TripSlice";
import { useDispatch, useSelector } from "react-redux";
import "./BookTrip.css";

const EndTrip = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const CurrentTripListStore = useSelector((state) => state.Trip.TripList);
  const [currenttripupdate, setcurrenttripupdate] =
    useState(CurrentTripListStore);

  const endCab = (e) => {
    e.preventDefault();
    setcurrenttripupdate.status = false;
    console.log(currenttripupdate.status);
    endTripService()
      .then((response) => {
        console.log(response);
        console.log(response.data.customer.userName);
        dispatch(setTripList({}));
        alert(response.data.customer.userName + " Your Trip Ended ");
        window.location.reload(true);
      })
      .catch(() => {
        alert("No Trips to End");
      });
  };

  return (
    <div className="container">
      <div id="block" className="row mx-auto">
        <div
          id="BookTripBlock"
          className="card col-md-10 mx-auto shadow-lg"
          style={{ borderRadius: "10" }}
        >
          <h4 className="=card-title font-weight-lighter p-2">
            Booking Info
            <img
              className="float-right"
              src={require(`./hamburger.png`)}
              height="30"
              width="30"
            />
          </h4>
          <div className="card-body">
            <form>
              <div className="form-inline bg-gray w-100 ">
                <div className="col col-lg-3">
                  <input
                    type="button"
                    disabled
                    placeholder="pickup Location"
                    name="fromLocation"
                    className="form-control col-md-auto px-2 w-100"
                    value={CurrentTripListStore.fromLocation}
                  />
                </div>
                {/* <div><p className="glyphicon glyphicon-arrow-right"></p></div> */}
                <img className="" src={require(`./arrow.png`)} />
                <div className=" col col-lg-3">
                  <input
                    type="button"
                    disabled
                    name="toLocation"
                    className="form-control col-md-auto px-2 w-100"
                    value={CurrentTripListStore.toLocation}
                  />
                </div>
                <div className="col-lg-2">
                  <input
                    type="button"
                    disabled
                    className="form-control col-md-auto px-2 w-100"
                    value={CurrentTripListStore.bill}
                  />
                </div>
                <div className="col-lg-3">
                  <input
                    type="submit"
                    className="btn btn-warning form-control col-md-auto px-2 w-100"
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
  );
};

export default EndTrip;
