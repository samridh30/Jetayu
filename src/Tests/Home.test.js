import { render as rtlRender, screen } from '@testing-library/react';
import Home from '../components/Home/Home';
import { Provider } from 'react-redux';
import TripPagination from '../components/TripBooking/TripPagination'
import store from '../redux/store'


const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>

)

test('Home', () => {
  render(<Home />)
  const linkElement = screen.getByText("JATAYU");
  expect(linkElement).toBeInTheDocument();
});
