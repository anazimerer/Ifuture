import React from 'react';
import { render } from '@testing-library/react';
import LoginPage from './index';

describe('LoginPage', () => {
  it('renders', () => {
    const utils = render(<LoginPage />);

    const title = utils.getByText('Entrar', { selector: 'h1' });
    const email = utils.getByText('E-mail', { selector: 'label' });
    const password = utils.getByText('Senha', { selector: 'label' });

    expect(title);
    expect(email);
    expect(password);
  });
});
