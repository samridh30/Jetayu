import { render as rtlRender, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store'
import InsertDriver from '../components/Driver/InsertDriver'
import RateDriver from '../components/Driver/RateDriver'
import UpdateDriver from '../components/Driver/UpdateDriver'
import ViewAllDrivers from '../components/Driver/ViewAllDrivers'
import ViewBestDrivers from '../components/Driver/ViewBestDrivers'
import ViewDriver from '../components/Driver/ViewDriver'



const render = (component) => rtlRender(
        <Provider store={store}>
                {component}
        </Provider>

)

test('Insert Driver 1', () => {
        render(<InsertDriver />)
        const linkElement = screen.getByText("Add New Driver");
        expect(linkElement).toBeInTheDocument();
});
test('Insert Driver 2', () => {
        render(<InsertDriver />)
        const linkElement = screen.getByPlaceholderText("Enter Driver Name");
        expect(linkElement).toBeInTheDocument();
});
test('Rate Driver ', () => {
        render(<RateDriver />)
        const linkElement = screen.getByText("Rate Driver");
        expect(linkElement).toBeInTheDocument();
});

// test('Update Driver 1', () => {
//         render(<UpdateDriver />)
//         const linkElement = screen.getByText("Update Driver");
//         expect(linkElement).toBeInTheDocument();
// });
// test('Update Driver 2', () => {
//         render(<UpdateDriver />)
//         const linkElement = screen.getByLabelText("Driver Name");
//         expect(linkElement).toBeInTheDocument();
// });
// test('View All Drivers 1', () => {
//         render(<ViewAllDrivers />)
//         const linkElement = screen.getByText("List of All Drivers");
//         expect(linkElement).toBeInTheDocument();
// });
// test('View All Drivers 2', () => {
//         render(<ViewAllDrivers />)
//         const linkElement = screen.getByPlaceholderText("Enter Driver Name");
//         expect(linkElement).toBeInTheDocument();
// });
test('View Best Drivers 1', () => {
        render(<ViewBestDrivers />)
        const linkElement = screen.getByText("Get Best Drivers");
        expect(linkElement).toBeInTheDocument();
});

test('View Driver ', () => {
        render(<ViewDriver />)
        const linkElement = screen.getByText("Update Driver");
        expect(linkElement).toBeInTheDocument();
});
// test('Insert Driver 2', () => {
//         render(<InsertDriver />)
//         const linkElement = screen.getByPlaceholderText("Enter Driver Name");
//         expect(linkElement).toBeInTheDocument();
// });

