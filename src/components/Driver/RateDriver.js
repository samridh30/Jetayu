import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Driver from '../../Model/Driver'
import { Rating } from 'react-simple-star-rating'
import { curryRight } from 'lodash';
import { driverRating } from '../../Services/DriverService';
import { endTripService } from "../../Services/TripService";
import { setTripList } from "../../Redux/TripSlice";
import { useHistory } from 'react-router-dom';


const RateDriver = (props) => {
    const currentDriverListStore = useSelector(
        (state) => state.Trip.TripList
    );
    // const [rating, setRating] = useState(0)

    const temp = currentDriverListStore.driver.rating
    const [rateDriver, setRateDriver] = useState({
        driverId: currentDriverListStore.driver.driverId,
        rating: ""
    });

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        // console.log(currentDriverListStore.driver.driverId)
        
    }, []);


    const handleRateDriver = (e) => {
        setRateDriver({
            driverId: currentDriverListStore.driver.driverId,
            rating: e / 20
        })
        console.log(rateDriver)
    }

    const submitRateDriver = (evt) => {
        evt.preventDefault();
        console.log(rateDriver)
        driverRating(rateDriver)
            .then((response) => {
                console.log(response.data)

            });
        endTripService()
            .then((response) => {
                console.log(response);
                console.log(response.data.customer.userName);
                dispatch(setTripList({}));
                alert(response.data.customer.userName + " Your Trip Ended ");
                window.location.reload(true);
            })
            .catch(() => {
                alert("No Trips to End");
            });
        history.push("/")


    }

    return (
        <div style={{ marginTop: '200px' }}>

            <center>
                <div className="card mt-3 ml-3 mb-10 bg-light col-lg-7" >
                    <div class="card-body text-left roundered">
                        <div className=''>
                            <div className='App'>
                                <h4>Rate Driver</h4>
                                <Rating
                                    name="rating"
                                    initialValue={temp}
                                    // onChange={rateDriver.driver.rating}
                                    onClick={handleRateDriver}
                                    // ratingValue={}
                                    size={50}
                                    label
                                    transition
                                    fillColor='yellow'
                                    emptyColor='gray'
                                    className='foo' // Will remove the inline style if applied
                                />
                                {/* Use rating value */}
                                <input type="submit" onClick={submitRateDriver} />
                            </div>


                        </div>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default RateDriver
