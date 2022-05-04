import { deleteCustomerService } from "../../Services/CustomerService";
import { useHistory } from "react-router-dom";

/* Component To Disable Customer Account */
const DisableCustomer = () => {
  const history = useHistory();
  const DisableCustomerAccount = (e) => {

    var proceed = window.confirm(
      "Your Account will be permenantly deleted. Are you sure you want to proceed?"
    );
    if (proceed) {
      /* Calling Backend Service Controller By Axios */
      deleteCustomerService(JSON.parse(localStorage.getItem('loggedInUser')).customerId)
        .then((response) => {
          console.log(response.data);
          localStorage.removeItem("loggedInUser");
          history.push("/");
          window.location.reload(true);
        })
        .catch(() => {
          alert("Error Occured");
        });
    } else {
    }
  };

  return (
    <input
      type="submit"
      className="btn btn-danger mt-3 w-100"
      value="Disable/Delete Account"
      onClick={DisableCustomerAccount}
    />
  );
};

export default DisableCustomer;
