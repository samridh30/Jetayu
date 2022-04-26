import { useHistory } from "react-router-dom"
import { logoutService } from "../../services/AuthService"

const Logout = (props) => {

        // const temp = useSelector((state) => state.appUser.loggedInUser);

        const history = useHistory()

        const method = () => {
                // console.log(JSON.parse(localStorage.getItem("loggedInUser")))
                logoutService().then((response) => {
                        alert(response.data)
                })
                localStorage.removeItem('loggedInUser')
                props.logUser();
        }
        return (
                <div className="">
                        <input className="bg-danger px-5 btn-outline-none btn btn-primary" type="submit" value="Logout" onClick={method} />
                </div>
        )
}
export default Logout;