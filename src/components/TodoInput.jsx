import { useState } from 'react';

export const TodoInput = () => {
  const [input, setInput] = useState('');

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    console.log(input);

    setInput('');
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input onChange={onChangeInput} value={input} type="text" />
      <button type="submit">Add</button>
    </form>
  );
};
