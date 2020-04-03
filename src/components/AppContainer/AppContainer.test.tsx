import { AppContainer } from './AppContainer';
import React from 'react';
import { render } from '@testing-library/react';

test('renders learn react link', () => {
  const { getByText } = render(<AppContainer />);
  const linkElement: HTMLElement = getByText(/learn react/ui);

  expect(linkElement).toBeInTheDocument();
});
