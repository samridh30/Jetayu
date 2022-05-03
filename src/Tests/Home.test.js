import { render as rtlRender, screen } from '@testing-library/react';
import Home from '../components/Home/Home';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import { Provider } from 'react-redux';
import store from '../redux/store'


const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>

)

test('Home', () => {
  render(<Home />)
  const linkElement = screen.getByText("Travel to your Destinsation now");
  expect(linkElement).toBeInTheDocument();
});

// test('Home2', () => {
//   render(<Home />)
//   const linkElement = screen.getByText("JATAYU");
//   expect(linkElement).toBeInTheDocument();
// });

// test('Header', () => {
//   render(<Header />)
//   const linkElement = screen.getByText("Login");
//   expect(linkElement).toBeInTheDocument();
// });

// test('Header2', () => {
//   render(<Header />)
//   const linkElement = screen.getByText("JETAYU");
//   expect(linkElement).toBeInTheDocument();
// });

// test('Footer', () => {
//   render(<Footer />)
//   const linkElement = screen.getByText("&#169; Jatayu, 2022");
//   expect(linkElement).toBeInTheDocument();
// });
