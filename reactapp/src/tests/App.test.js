import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';
import { LoanProvider } from '../context/LoanContext';
import { BrowserRouter as Router } from 'react-router-dom';

const customRender = (ui) => render(<LoanProvider><Router>{ui}</Router></LoanProvider>);

test('renders_loan_list_page_and_checks_for_initial_text', () => {
  customRender(<App />);
  expect(screen.getByRole('heading', { name: /loan list/i })).toBeInTheDocument();
});

test('adds_a_new_loan_and_checks_if_it_appears_in_the_list', async () => {
  customRender(<App />);
  fireEvent.click(screen.getByRole('link', { name: /add loan/i }));
  fireEvent.change(screen.getByPlaceholderText(/loan name/i), { target: { value: 'Home Loan' } });
  fireEvent.change(screen.getByPlaceholderText(/loan amount/i), { target: { value: '50000' } });
  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Pending' } });
  fireEvent.click(screen.getByRole('button', { name: /add loan/i }));
  expect(screen.getByText(/Add New Loan/)).toBeInTheDocument();
});

test('displays_correct_details_for_a_loan_when_clicked', async () => {
  customRender(<App />);
  fireEvent.click(screen.getByRole('link', { name: /add loan/i }));
  expect(screen.getByText(/Add New Loan/)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/loan name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/loan amount/i)).toBeInTheDocument();
  expect(screen.getByRole('combobox')).toBeInTheDocument();
});

test('checks_if_loan_list_page_renders_correctly', () => {
  customRender(<App />);
  expect(screen.getByRole('link', { name: /loan list/i })).toBeInTheDocument();
});

test('checks_if_add_loan_button_works_and_navigates_to_the_form', () => {
  customRender(<App />);
  fireEvent.click(screen.getByRole('link', { name: /add loan/i }));
  expect(screen.getByText(/Add New Loan/)).toBeInTheDocument();
});

test('checks_if_add_loan_form_submission_works', async () => {
  customRender(<App />);
  fireEvent.click(screen.getByRole('link', { name: /add loan/i }));
  fireEvent.change(screen.getByPlaceholderText(/loan name/i), { target: { value: 'Business Loan' } });
  fireEvent.change(screen.getByPlaceholderText(/loan amount/i), { target: { value: '150000' } });
  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Pending' } });
  fireEvent.click(screen.getByRole('button', { name: /add loan/i }));
  expect(screen.getByText(/Add New Loan/)).toBeInTheDocument();
});

test('checks_navigation_between_pages', () => {
  customRender(<App />);
  expect(screen.getByRole('link', { name: /loan list/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /add loan/i })).toBeInTheDocument();
});

test('checks_form_fields_are_present', () => {
  customRender(<App />);
  fireEvent.click(screen.getByRole('link', { name: /add loan/i }));
  expect(screen.getByPlaceholderText(/loan name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/loan amount/i)).toBeInTheDocument();
  expect(screen.getByRole('combobox')).toBeInTheDocument();
});

test('checks_empty_loan_list_initially', () => {
  customRender(<App />);
  const navItems = screen.queryAllByRole('listitem');
  expect(navItems).toHaveLength(2);
});

test('checks_form_validation_with_empty_fields', () => {
  customRender(<App />);
  fireEvent.click(screen.getByRole('link', { name: /add loan/i }));
  fireEvent.click(screen.getByRole('button', { name: /add loan/i }));
  expect(screen.getByText(/Add New Loan/)).toBeInTheDocument();
});
