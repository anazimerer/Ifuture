import { act, cleanup } from '@testing-library/react';

import testHook from '../testHook';
import useForm from '../useForm';

let form, onChange, resetForm;

beforeEach(() => {
  testHook(() => {
    [form, onChange, resetForm] = useForm({ name: '', age: '' });
  });
});

afterEach(() => {
  cleanup();
});

describe('useForm', () => {
  it('should initiate passed values', () => {
    expect(form.name).toBe('');
    expect(form.age).toBe('');
  });

  it('should have an onChange function', () => {
    expect(onChange).toBeInstanceOf(Function);
  });

  it('should have a resetForm function', () => {
    expect(resetForm).toBeInstanceOf(Function);
  });

  it('should update value with onChange', () => {
    act(() => {
      onChange({ target: { name: 'name', value: 'John' } });
    });

    act(() => {
      onChange({ target: { name: 'age', value: '18' } });
    });

    expect(form.name).toBe('John');
    expect(form.age).toBe('18');
  });

  it('should clear values with resetForm', () => {
    act(() => {
      onChange({ target: { name: 'name', value: 'John' } });
    });

    resetForm();

    expect(form.name).toBe('');
  });
});
