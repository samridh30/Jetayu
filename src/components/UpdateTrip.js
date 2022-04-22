const updateTrip = () =>{
    
    return(
        <div>
        <div className="container">
            <div className="row">
                <div id ="bookcabcard" className="card col-md-6 offset-md-3 offset-md-3 text-center mt-5">
                    <h3 className="text-center card-header mt-2">Enter Trip details</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label className='card-title'>Enter Pickup Location</label>
                                <input
                                    type="text"
                                    placeholder="Enter pickup Location"
                                    name="fromLocation"
                                    className="form-control"
                                    value={booktrip.fromLocation}
                                    onChange={addTrip}
                                />
                                <label className='card-title'>Enter Drop Location</label>
                                <input
                                    type="text"
                                    placeholder="Enter drop Location"
                                    name="toLocation"
                                    className="form-control"
                                    value={booktrip.toLocation}
                                    onChange={addTrip}
                                />
                                <input
                                    type="submit"
                                    className="btn btn-primary form-control mb-3 mt-3"
                                    value="Book Cab"
                                    onClick={addCab}
                                />
                                

                            </div>
                        </form>

                    </div>

                </div>

            </div>

        </div>
    </div>

    )

}