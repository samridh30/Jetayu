import { render, screen } from '@testing-library/react';
import ViewCustomer from './components/Home/Home';

// test('Test1', () => {
//   render();
//   // const linkElement = screen.getByText(/learn react/i);
//   expect(true).toBeInTheDocument(true);
// });

test("test2",()=>{
  render(<ViewCustomer/>)
  const child= screen.getByLabelText("Travel to your Destinsation now");
  expect(child).toBeInTheDocument();
})
