import { Person } from './Person';
import React from 'react';
import { render } from '@testing-library/react';

test('renders learn react link', () => {
  const { getByText } = render(<Person />);
  const linkElement: HTMLElement = getByText(/Hi, I am a person/ui);

  expect(linkElement).toBeInTheDocument();
});
