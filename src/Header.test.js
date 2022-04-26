import {render, screen} from '@testing-library/react';
import Header from './Header';

test('img with header testid in the document', () => {
  render(<Header />);
  expect(screen.getByTestId('logo')).toBeInTheDocument();
})

test('header has App-header class', ()=> {
  render(<Header />);
  expect(screen.getByTestId('header')).toHaveClass('App-header');
})