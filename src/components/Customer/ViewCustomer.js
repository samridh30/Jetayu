import { useEffect, useState } from "react";

const ViewCustomer = () => {
    const [Updatecustomerstate, setUpdatecustomerstate] = useState(JSON.parse(localStorage.getItem("loggedInUser")));

    useEffect(() => {
        setUpdatecustomerstate(JSON.parse(localStorage.getItem("loggedInUser")));

    }, [localStorage.getItem('loggedInUser')])

    return (
        <div className="w-100">

            <div className='mx-auto bg-light  p-auto '>
                <div className="text-left roundered col-md-auto ">
                    {/* <center> */}
                    <h4 className="card-header">
                        <center>Profile Details </center>
                    </h4>
                    <div>
                        <h3 className="text-primary">
                            UserName:
                            <small class="text-muted "> {Updatecustomerstate.userName}</small>
                        </h3>
                        <h3 className="text-primary">
                            Address:
                            <small class="text-muted"> {Updatecustomerstate.address}</small>
                        </h3>
                        <h3 className="text-primary">
                            MobileNumber:
                            <small class="text-muted"> {Updatecustomerstate.mobileNumber}</small>
                        </h3>
                        <h3 className="text-primary">
                            Email:
                            <small class="text-muted"> {Updatecustomerstate.email}</small>
                        </h3>
                    </div>


                    {/* </center> */}

                </div>
            </div>
        </div >
    )

}
export default ViewCustomer;