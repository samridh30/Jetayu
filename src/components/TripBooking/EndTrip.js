import {bookCabService, updateTripService,viewTripService,endTripService} from '../../services/TripService'
import { useDispatch, useSelector } from "react-redux";

const EndTrip = () =>{
    const TripListStore = useSelector((state) => state.Trip.TripList);


    const endCab= (e) =>{
        e.preventDefault();
        endTripService().then((response)=>{
            // console.log(booktrip.fromLocation+"  ended");
            console.log(response);
            console.log(response.data.customer.userName);
            alert(response.data.customer.userName+" Your Trip Ended ");

        })
        .catch(()=>{
            alert("cab could not be ended")
        })
    }
    return(
        <div className="container">
            <div className="row">
                <div class="position-relative">
                    <div class="position-absolute top-0 end-0 mt-2 mr-2">
                        <input
                        type="submit"
                        className='btn btn-success '
                        value="End Trip"
                        onClick={endCab}

                        />
                    </div>

                </div>



                <div class=" card col-md-10 text-left mt-5 rounded">
                        <h4 class="card-header text-center">Booking Details</h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">FromLocation :{TripListStore.fromLocation}</li>
                            <li class="list-group-item">ToLocation :{TripListStore.toLocation}</li>
                            <li class="list-group-item">Bill: {TripListStore.bill}</li>
                            <li class="list-group-item">BookedTime :{TripListStore.fromDateTime}</li>
                        </ul>
                </div>

            


            </div>

        </div>


    )
}

export default EndTrip;