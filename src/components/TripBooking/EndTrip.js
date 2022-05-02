import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/BookTrip.css";
import BookingTripDetails from "./BookingTripDetails";

const EndTrip = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const CurrentTripListStore = useSelector((state) => state.Trip.TripList);
  const [details, setDetails] = useState(false)
  const [currenttripupdate, setcurrenttripupdate] =
    useState(CurrentTripListStore);

  const endCab = (e) => {
    e.preventDefault();
    setcurrenttripupdate.status = false;
    console.log(currenttripupdate.status);
    // history.push("/driver5")

  };

  return (
    <div className="">
      {(details) ?
        <div className="row" style={{ marginTop: "-350px" }}>
          <BookingTripDetails close={() => setDetails(false)} />
        </div> :
        < div id="block" className="row mx-auto" >

          <div
            id="BookTripBlock"
            className="card col-md-10 mx-auto shadow-lg"
            style={{ borderRadius: "10" }}
          >

            <h4 className="=card-title font-weight-lighter p-2">
              Booking Info
              <button
                style={{ border: 0 }}
                className="float-right shadow-none"
                href="#CabDetails"
                data-toggle="collapse"
              >
                <img
                  className="float-right col-md-12"
                  src={require(`./hamburger.png`)}
                  height="30"
                  width="30"
                  onClick={() => setDetails(true)}
                />
              </button>
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
                      value={`₹ ${CurrentTripListStore.bill}`}
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
        </div >
      }
      {/* <div
        style={{ position: "", float: "center" }}
        className=" collapse w-100"
        id="CabDetails"
      >
        <p className=" text-warning">DriverName- <strong className="text-success">{CurrentTripListStore.driver.driverName}</strong></p>
        <p className=" text-warning">CabType- <strong className="text-success">{CurrentTripListStore.driver.cab.carType}</strong> </p>
        <p className="text-warning">Rate Driver- <strong className="text-success">{CurrentTripListStore.driver.rating}</strong></p>

      </div> */}


    </div >
  );
};

export default EndTrip;
