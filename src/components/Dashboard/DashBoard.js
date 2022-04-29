import { useState } from "react";
import ViewTrips from "../TripBooking/ViewTrips";
import CustomerDash from "./CustomerDash";

const Dashboard = (props) => {

        const [method, setMethod] = useState();

        return (
                <div className="">
                        <CustomerDash fun={props.fun} />
                        {/* <ViewTrips /> */}
                        {/* <div className="bg-dark" style={{ height: '95vh', width: '15vw', zIndex: 10 }}>

                        </div> */}
                        {/* <div className="" style={{ width: '85vw' }}>
                                <ViewTrips />
                        </div> */}
                </div >
        )
}

export default Dashboard;