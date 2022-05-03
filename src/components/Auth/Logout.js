import { useHistory } from "react-router-dom";
import { logoutService } from "../../Services/AuthService";
import { useDispatch, useSelector } from "react-redux";
import { setTripList } from "../../Redux/TripSlice";
import '../../Styles/sideNav.css'

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

    // <ul className="list-unstyled CTAs">
    //   <li className="w-100">
    //     <a
    //       className="download bg-danger text-light"
    //       onClick={method}
    //     >
    //       Logout
    //     </a>
    //   </li>
    // </ul>
    <input
      className="bg-danger btn btn-primary px-4 pb-2"
      style={{ border: 'none' }}
      type="submit"
      value="Logout"
      onClick={method}
    />
  );
};
export default Logout;
