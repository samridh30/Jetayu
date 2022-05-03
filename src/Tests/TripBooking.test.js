import { render as rtlRender, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import TripPagination from '../components/TripBooking/TripPagination'
import store from '../redux/store'
import Booktrip from '../components/TripBooking/BookTrip';
import UpdateTrip from '../components/TripBooking/UpdateTrip';
import BookingTripDetails from '../components/TripBooking/BookingTripDetails';


const render = (component) => rtlRender(
        <Provider store={store}>
                {component}
        </Provider>

)

test('Book Trip', () => {
        render(<Booktrip />)
        const linkElement = screen.getByPlaceholderText("Pickup Location...");
        expect(linkElement).toBeInTheDocument();
});

test('Trip Pagination', () => {
        render(<TripPagination />)
        const linkElement = screen.getByText("No Trips To Show.");
        expect(linkElement).toBeInTheDocument();
});

test('Update Trip', () => {
        render(<UpdateTrip />)
        const linkElement = screen.getByText("No Trip To update");
        expect(linkElement).toBeInTheDocument();
});

test('Update Trip', () => {
        render(<UpdateTrip />)
        const linkElement = screen.getByTestId("Update-trip");
        expect(linkElement).toBeInTheDocument();
});

test('Update Trip', () => {
        render(<UpdateTrip />)
        const linkElement = screen.getByTestId("Update-trip-a");
        expect(linkElement).toBeInTheDocument();
});
test('Booking Details', () => {
        render(<BookingTripDetails />)
        const linkElement = screen.getByText("No Live Trip To Show Details.");
        expect(linkElement).toBeInTheDocument();
});

