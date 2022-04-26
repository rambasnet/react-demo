import {render, screen} from '@testing-library/react';

import Title from './Title';

test('H1 in the document', ()=> {
  render(<Title />)
  const h1 = screen.getByText('Hello there React');
  expect(h1).toBeInTheDocument();
})

test('H1 in the document using re', ()=> {
  render(<Title />)
  const h1 = screen.getByText(/hello there react/i);
  expect(h1).toBeInTheDocument();
})

test('H1 with header1 class', () => {
  render(<Title />);
  expect(screen.getByTestId("h1")).toHaveClass("header1");
})
