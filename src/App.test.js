import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom'; // Add this import
import App from './App';

describe('React CI/CD Demo App', () => {
  beforeEach(() => render(<App />));

  test('renders main heading and subtitle', () => {
    expect(screen.getByText(/React CI\/CD Demo/i)).toBeInTheDocument();
    expect(screen.getByText(/DevOps Hands-on Workshop/i)).toBeInTheDocument();
  });

  test('renders workshop info mentioning Docker containerization', () => {
    const dockerMentions = screen.getAllByText(/Docker containerization/i);
    expect(dockerMentions.length).toBeGreaterThan(0);
  });

  test('renders schedule table headers', () => {
    const table = screen.getByRole('table');
    const headers = within(table).getAllByRole('columnheader');
    expect(headers.map(h => h.textContent)).toEqual(['Time', 'Topic']);
  });

  test('renders Linux Basics schedule item', () => {
    const linuxItems = screen.getAllByText(/Linux Basics/i);
    expect(linuxItems.length).toBeGreaterThan(0);
  });

  test('increments counter on multiple clicks', () => {
    const button = screen.getByText(/Click Me/i);
    const count = screen.getByTestId('count');
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(count.textContent).toBe('You clicked 3 times');
  });

  test('renders footer contact info', () => {
    expect(screen.getByText(/tejasjc@gmail.com/i)).toBeInTheDocument();
  });
});
