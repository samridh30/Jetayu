import { useHistory } from "react-router-dom";
import { logoutService } from "../../Services/AuthService";
import { useDispatch, useSelector } from "react-redux";
import Trip from "../../Model/Trip";
import { setTripList } from "../../Redux/TripSlice";

const Logout = (props) => {
  // const temp = useSelector((state) => state.appUser.loggedInUser);

  const history = useHistory();
  const dispatch = useDispatch();

  const method = () => {
    // console.log(JSON.parse(localStorage.getItem("loggedInUser")))
    logoutService()
      .then((response) => {
        alert(response.data);
        localStorage.removeItem("loggedInUser");
        dispatch(setTripList());
        window.location.reload(true);
      })
      .then(props.logUser());
    // props.logUser();
  };
  return (
    <div className="">
      <input
        className="bg-danger btn-outline-none btn btn-primary"
        type="submit"
        value="Logout"
        onClick={method}
      />
    </div>
  );
};
export default Logout;
