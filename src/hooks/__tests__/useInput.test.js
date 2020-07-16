import { act, cleanup } from '@testing-library/react';

import testHook from '../testHook';
import useInput from '../useInput';

let input, onChange, resetForm;

beforeEach(() => {
  testHook(() => {
    [input, onChange, resetForm] = useInput('135');
  });
});

afterEach(() => {
  cleanup();
});

describe('useInput', () => {
  it('should initiate passed values', () => {
    expect(input).toBe('135');
  });

  it('should have an onChange function', () => {
    expect(onChange).toBeInstanceOf(Function);
  });

  it('should have a resetForm function', () => {
    expect(resetForm).toBeInstanceOf(Function);
  });

  it('should update value with onChange', () => {
    act(() => {
      onChange({ target: { value: '123abc' } });
    });

    expect(input).toBe('123abc');
  });

  it('should clear values with resetForm', () => {
    act(() => {
      onChange({ target: { value: '123abc' } });
    });

    resetForm();

    expect(input).toBe('135');
  });
});
