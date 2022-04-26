import React from 'react';
import { insertCab } from '../../models/CabService';
import "./BookTrip.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const insertCab =() => {
  const [cabToBeAdded, setCabToBeAdded] = useState({
    cabId: '',
    cabType: ''

  })
}

const dispatch = useDispatch();
const history = useHistory();
const addCabService = (e) => {
    console.log(e.target.value);
    setCabToBeAdded({
        ...cabToBeAdded, [e.target.name]: e.target.value
    })

}

const InsertCab = () => {
    
       const handleAddCab = (cab) => {
        console.log(cab.target.name);
        console.log(cab.target.value);
        setCabToBeAdded({
            ...cabToBeAdded,
            [cab.target.name]: cab.target.value
        });
        const submitAddCab = (evt) => {
          evt.preventDefault();
          let cabTemp = { ...cabToBeAdded };
          addCabService(cabTemp)
              .then((response) => {
                  console.log(response.data);
                  alert(`Cab with cabId ${response.data.cabId} added successfully.`);
              })
              .catch(() => {
                  setCabToBeAdded(new cab());
                  cabTemp = '';
                  alert("Cab could not be added.");
              });
      
  
  
}
       return (
        <div>
        <div className="container">
            <div id="block" className="row">
                <div id="InsertCabBlock" className="card col-md-10 mt-5 mb-5 ">

                    <div className='card-body '>
                        <form>
                            <div className="form-inline bg-gray ">
                                <div class="col col-lg-3">
                                    {/* <label className='card-title'>Pickup</label> */}
                                    <input
                                        type="text"
                                        placeholder="Enter Cab Id"
                                        name="cabId"
                                        className="form-control col-md-auto"
                                        value={InsertCab.cabId}
                                        onChange={insertCab}
                                    />

                                </div>
                                <div class=" col col-lg-3">
                                    {/* <label className='card-title'>Enter Drop Location</label> */}
                                    <input
                                        type="text"
                                        placeholder="Enter Cab Type"
                                        name="cabType"
                                        className="form-control col-md-auto "
                                        value={InsertCab.cabType}
                                        onChange={insertCab}
                                    />
                                  
                                    </div>

                                </div>
                            </form>
                        </div>



                    </div>
                </div>

                </div>
        </div>
       )

export default InsertCab;
       
