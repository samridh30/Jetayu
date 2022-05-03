import { render as rtlRender, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store'
import ViewCustomer from '../components/Customer/ViewCustomer';



const render1 = (component) => rtlRender(
        <Provider store={store}>
                {component}
        </Provider>

)

test('View Customer', () => {
    render1(< ViewCustomer />)
    const linkElement = screen.getByTestId("ViewCust");
    expect(linkElement).toBeInTheDocument();
});

test('View Customer', () => {
    rtlRender(< ViewCustomer />)
    // const linkElement = screen.getByRole("Profile Details");
    except(screen.getByRole('button', {
        name: 'Disable/Delete Account' /i
      })).toBeInTheDocument()
    // expect(linkElement).toBeInTheDocument();
});