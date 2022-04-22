import driver from './driver'
import Customer from './Customer'
class Trip {

    tripBookingId;
    customer = new Customer;
    driver= new driver();
    FromLocation;
    ToLocation;
    fromDateTime;
    toDateTime;
    status;
    distanceInKm;
    Bill;
    
}

export default Trip;