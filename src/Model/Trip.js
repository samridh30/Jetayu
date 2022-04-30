import Driver from "./Driver";
import Customer from "./Customer";
class Trip {
  tripBookingId;
  customer = new Customer();
  driver = new Driver();
  FromLocation;
  ToLocation;
  fromDateTime;
  toDateTime;
  status;
  distanceInKm;
  Bill;
}

export default Trip;
