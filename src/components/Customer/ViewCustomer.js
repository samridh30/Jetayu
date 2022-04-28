import { useEffect, useState } from "react";

const ViewCustomer=()=>{
    const [Updatecustomerstate, setUpdatecustomerstate] = useState(JSON.parse(localStorage.getItem("loggedInUser")));

    useEffect(()=>{
        setUpdatecustomerstate(JSON.parse(localStorage.getItem("loggedInUser")));

    },[localStorage.getItem('loggedInUser')])

    return(
        <div className='card  mx-auto   p-auto col-md-7 '>
            <div className="card-body  text-left roundered col-md-auto ">
            <h4 className="card-header">
              <center>Profile Details </center>
              <h3 className="text-primary">
                UserName: 
                <small class="text-muted">{Updatecustomerstate.userName}</small>
            </h3>
            <h3 className="text-primary">
                Address: 
                <small class="text-muted">{Updatecustomerstate.address}</small>
            </h3>
            <h3 className="text-primary">
                MobileNumber: 
                <small class="text-muted">{Updatecustomerstate.mobileNumber}</small>
            </h3>
            <h3 className="text-primary">
                Email: 
                <small class="text-muted">{Updatecustomerstate.email}</small>
            </h3>
            </h4>

            </div>
        </div>
    )

}
export default ViewCustomer;