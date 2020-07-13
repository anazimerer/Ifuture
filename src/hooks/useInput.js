import { useState } from "react";

const useInput = (initialValue) => {
  const [input, setInput] = useState(initialValue);

  const onChange = (event) => {
    setInput(event.target.value);
  };

  const resetForm = () => {
    setForm(initialValue);
  };

  return [input, onChange, resetForm];
};

export default useInput;
