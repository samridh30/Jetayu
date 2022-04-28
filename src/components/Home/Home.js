import { useEffect, useState } from "react";
import Logout from "../Auth/Logout";
import Booktrip from "../TripBooking/BookTrip";
import EndTrip from '../TripBooking/EndTrip'
import { useDispatch, useSelector } from "react-redux";


const Home = () => {

  // const [book, setBook] = useState();
  // const book = useSelector((state) => state.Trip.TripList);
  const [tmp, setTmp] = useState()


  useEffect(() => {
    // console.log(book)
    // setTmp(book.status)
    console.log(JSON.parse(localStorage.getItem('Trip')).status)
    setTmp(JSON.parse(localStorage.getItem('Trip')).status)
  }, [])




  return (
    <div>

      THIS IS HOME{
        (tmp) ?
          <EndTrip /> :
          <Booktrip />
      }
    </div>
  );
};

export default Home;
