import { render as rtlRender, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store'

import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import Logout from '../components/Auth/Logout'




const render = (component) => rtlRender(
        <Provider store={store}>
                {component}
        </Provider>

)

test('Login', () => {
        render(<Login />)
        const linkElement = screen.getByPlaceholderText("Enter Email");
        expect(linkElement).toBeInTheDocument();
});

// test('Login 2', () => {
//         rtlRender(<Login />)
//         const linkElement = screen.getByText("Login");
//         expect(linkElement).toBeInTheDocument();
// });