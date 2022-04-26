import { useEffect } from "react";
import { useSelector } from "react-redux";
const BookingTripDetails=()=>{
    const CurrentTripListStore = useSelector((state) => state.Trip.TripList);
    useEffect(()=>{
        localStorage.setItem('TripList', JSON.stringify(CurrentTripListStore) );
        console.log('CurrentTripListStore')
        
       


    },[CurrentTripListStore])

    // const LocalCurrentTripListStore= JSON.parse(localStorage.getItem('TripList'));
    // console.log(LocalCurrentTripListStore.driver.driverName);

    return(
        <div id="bookingdetails">
                
                <div className="card mt-3">
                    <div class="card-body text-left roundered">
                        {CurrentTripListStore &&
                        <div>
                        <h4 className="card-header text-center">Booking Details</h4>
                            {/* <p>TripBookingId- {TripListStore.tripBookingId}</p> */}
                            <p>FromLocation- {CurrentTripListStore.fromLocation}</p>
                            <p>ToLocation- {CurrentTripListStore.toLocation}</p>
                            <p>Bill- {CurrentTripListStore.bill}</p>
                            <p>DriverName- {CurrentTripListStore.driver.driverName}</p>
                            <p>DriverRating- {CurrentTripListStore.driver.rating}</p>
                            <p>CabType- {CurrentTripListStore.driver.cab.carType}</p>



                        </div>
                                }

                    </div>
                </div>
                
            </div>

    )
}

export default BookingTripDetails;