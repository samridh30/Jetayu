import { useEffect, useState } from "react";
import Logout from "../Auth/Logout";
import Booktrip from "../TripBooking/BookTrip";
import EndTrip from '../TripBooking/EndTrip'
import { useDispatch, useSelector } from "react-redux";


const Home = () => {

  // const [book, setBook] = useState();
  // const book = useSelector((state) => state.Trip.TripList);
  const CurrentTripListStore = useSelector((state) => state.Trip.TripList);
  const [tmp, setTmp] = useState(CurrentTripListStore)

  useEffect(() => {
    setTmp(CurrentTripListStore);

  }, [CurrentTripListStore])

  return (
    <div className="p-3">


      <h1 className="mt-3 display-3 font-weight-lighter">JATAYU</h1>
      <img className="" height="20%" width="20%" src={require('./HomePageImg.png')} alt="image" />
      <h3 className="font-weight-lighter uppercase">Travel to your Destinsation now</h3>
      {/* <br /> */}
      <div className="mt-2">
        {
          (tmp.status) ?
            <EndTrip /> :
            <Booktrip />
        }
      </div>
    </div>
  );
};

export default Home;
