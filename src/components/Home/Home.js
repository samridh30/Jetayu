import { useEffect, useState } from "react";
import Logout from "../Auth/Logout";
import Booktrip from "../TripBooking/BookTrip";
import EndTrip from "../TripBooking/EndTrip";
import { useDispatch, useSelector } from "react-redux";
import { viewTripService } from "../../services/TripService";
import { setAllTripsList, setTripList } from "../../redux/TripSlice";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"

const Home = () => {
  // const [book, setBook] = useState();
  // const book = useSelector((state) => state.Trip.TripList);
  const CurrentTripListStore = useSelector((state) => state.Trip.TripList);
  const allTripsListStore = useSelector((state) => state.Trip.AllTripsList);

  const [tmp, setTmp] = useState(CurrentTripListStore);
  const dispatch = useDispatch();
  const history = useHistory();

  const variants = {
    hidden: { opacity: 0, z: 1000 },
    visible: { opacity: 1, z: 0 },
  }

  useEffect(() => {
    // console.log(CurrentTripListStore)
    if (JSON.parse(localStorage.getItem("loggedInUser"))) {
      const role = JSON.parse(localStorage.getItem("loggedInUser")).role;
      if (role === "CUSTOMER") {
        viewTripService()
          .then((response) => {
            setTmp(CurrentTripListStore);
            dispatch(setTripList(response.data[0]));
          })
          .catch((error) => {
            alert(error);
          });
        setTmp(CurrentTripListStore);
        // history.push("/")
        // window.location.reload(true)
        // console.log(CurrentTripListStore)
      }
      else {

        // history.push("/dashboard")

      }
    }
    // console.log(tmp);
  }, []);
  return (
    <div className="p-3">
      <h1 className="mt-3 display-3 font-weight-lighter">JATAYU</h1>
      <motion.div initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 1 }}
        exit={{
          opacity: 0,
          transition: {
            delay: 0.5
          }
        }}>
        <img
          className=""
          height="20%"
          width="20%"
          src={require("./HomePageImg.png")}
          alt="image"
        />
        <h3 className="font-weight-lighter uppercase">
          Travel to your Destinsation now
        </h3>
      </motion.div>
      {/* <br /> */}
      <motion.div initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 1 }} >

        <div className="mt-2">{tmp.status ? <EndTrip /> : <Booktrip />}</div>
      </motion.div>
    </div>
  );
};

export default Home;
