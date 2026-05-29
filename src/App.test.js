import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CFO dashboard header', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /cfo command center/i });
  expect(heading).toBeInTheDocument();
});
