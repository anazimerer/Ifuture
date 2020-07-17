import React from 'react';
import { render } from '@testing-library/react';

// Na documentação REACT os Hooks só podem ser chamados por
// componentes funcionais ou outros Hooks, por isso esse callback
// é necessário

function TestHook({ callback }) {
  callback();
  return null;
}

const testHook = (callback) => {
  render(<TestHook callback={callback} />);
};

export default testHook;
