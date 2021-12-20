import { render, screen } from '@testing-library/react';
import App from './App';

it('renders a title', () => {
  render(<App />);
  const title = screen.getByRole('heading', { name: 'My App'});
  expect(title).toBeInTheDocument();
});
