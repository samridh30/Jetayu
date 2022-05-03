import { render as rtlRender, screen } from '@testing-library/react';
import Home from '../components/Home/Home';
import { Provider } from 'react-redux';
import TripPagination from '../components/TripBooking/TripPagination'
import store from '../redux/store'
import Booktrip from '../components/TripBooking/BookTrip';


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