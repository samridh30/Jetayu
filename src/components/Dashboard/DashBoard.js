import { useState } from "react";
import ViewTrips from "../TripBooking/ViewTrips";
import CustomerDash from "./CustomerDash";

const Dashboard = (props) => {

        const [method, setMethod] = useState();

        return (
                <div className="flex-row d-flex">
                        <div className="bg-dark" style={{ height: '95vh', width: '15vw', zIndex: 10 }}>
                                <CustomerDash fun={props.fun} />
                        </div>
                        <div className="" style={{ width: '85vw' }}>
                                <ViewTrips />
                        </div>

                </div >
        )
}

export default Dashboard;