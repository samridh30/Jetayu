import {updateTripService } from '../../services/TripService'
import {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import  { setTripList} from '../../redux/TripSlice'

const UpdateTrip=()=>{

    const CurrentTripListStore = useSelector((state) => state.Trip.TripList);

    const[currenttripupdate,setcurrenttripupdate]=useState(CurrentTripListStore);
    

    const dispatch = useDispatch();

    useEffect(()=>{

    },[CurrentTripListStore])

    const handleUpdate=(e)=>{
        e.preventDefault();
        // console.log(e.value)
        setcurrenttripupdate({
            ...currenttripupdate,[e.target.name]:e.target.value
        })
        console.log(currenttripupdate.fromLocation);
        console.log(currenttripupdate.toLocation);


    }

    const update=(e)=>{
        e.preventDefault();
        // setshow({getTrip:false, update:true });
        updateTripService(currenttripupdate).then((response)=>{
            dispatch( setTripList(response.data));
            localStorage.setItem('TripList', JSON.stringify(response.data));

            alert("Updated")


        })
        .catch(()=>{
            alert("Not Updated")

        })
       


    }
    return(
        <div>
            <div className='card mt-3 ml-3'>
                <div className='card-body text-left roundered'>
                    <div>
                        <h4 className='card-header'><center>Update trip </center></h4>
                        <label>FromLocation</label>
                        <input
                        type="text"
                        name="fromLocation"
                        className='form-control'
                        onChange={handleUpdate}
                        value={currenttripupdate.fromLocation}
                        />
                        <label>To Location</label>
                        <input
                        type="text"
                        name="toLocation"
                        className='form-control'
                        onChange={handleUpdate}
                        value={currenttripupdate.toLocation}
                        />
                        {currenttripupdate.status &&
                        <input
                        type="submit"
                        className='btn btn-success form-control mt-3'
                        value="Update"
                        onClick={update}

                        />
                    }

                    </div>
                </div>
                
            </div>

        </div>
    )

}

export default UpdateTrip;