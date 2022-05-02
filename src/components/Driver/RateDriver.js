import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Driver from '../../Model/Driver'

const RateDriver = () => {
    const CurrentDriverListStore = useSelector(
        (state) => state.Trip.TripList
      );
    const [rateDriver,setRateDriver]= useState({
        driverId: CurrentDriverListStore.driver.driverId,
        rating:""
    });
    useEffect(()=>{
        console.log(CurrentDriverListStore.driver.driverId)
    },[]);
    const handleRateDriver = (e)=>{
        setRateDriver(
            {
                ...rateDriver,
                [e.target.name]: e.target.value
            }
        );
    };

    const submitRateDriver = (evt)=>{
        evt.preventDefault();
        rateDriver(rateDriver)
        .then((response)=>{
            console.log(response)
        })

    }







  return (
    <div>
        <div className='conatiner'>
            <h4>Rate Driver</h4>
            

        </div>
      
    </div>
  )
}

export default RateDriver
