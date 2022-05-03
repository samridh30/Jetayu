import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Add New Loan Application', () => {
  render(<LoanApp />);
  const linkElement = screen.getByText("Add New Loan Application");
  expect(linkElement).toBeInTheDocument();
});
