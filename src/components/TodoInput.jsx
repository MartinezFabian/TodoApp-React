import { useState } from 'react';
import PropTypes from 'prop-types';

export const TodoInput = ({ onNewTodo }) => {
  const [input, setInput] = useState('');

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (input.length < 1) return;

    const newTodo = {
      id: Date.now(),
      text: input,
      done: false,
    };

    onNewTodo(newTodo);

    setInput('');
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input onChange={onChangeInput} value={input} type="text" />
      <button type="submit">Add</button>
    </form>
  );
};

TodoInput.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};
