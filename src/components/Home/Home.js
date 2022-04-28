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

  useEffect(()=>{
    setTmp(CurrentTripListStore);

  },[CurrentTripListStore])


  




  return (
    <div>

      THIS IS HOME{
        (tmp.status) ?
          <EndTrip /> :
          <Booktrip />
      }
    </div>
  );
};

export default Home;
