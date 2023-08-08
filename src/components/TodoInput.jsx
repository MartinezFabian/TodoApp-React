import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoInput.module.css';

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
    <form onSubmit={onSubmitForm} className={styles.form}>
      <input
        onChange={onChangeInput}
        value={input}
        type="text"
        className={styles.form__input}
        placeholder="write a task..."
      />
      <button type="submit" className={styles.form__btn}>
        Add
      </button>
    </form>
  );
};

TodoInput.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};
