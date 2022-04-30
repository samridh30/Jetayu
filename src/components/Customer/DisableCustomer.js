import {deleteCustomerService} from '../../services/CustomerService'
import { useHistory } from 'react-router-dom';
const DisableCustomer=()=>{
    const history = useHistory();
    const DisableCustomerAccount = (e) => {
        deleteCustomerService()
            .then((response) => {
                console.log(response.data)
                localStorage.removeItem('loggedInUser');
                history.push("/")
                window.location.reload(true);

            })
            .catch(() => {
                alert("Error Occured");
            });
    };



    return(
        <input
                type='submit'
                className="btn btn-success mt-3"
                value='Disable Account'
                onClick={DisableCustomerAccount}
            />
    )
}

export default DisableCustomer;