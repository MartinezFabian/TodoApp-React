import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './TodoItem.module.css';

export const TodoItem = ({ todo, onDeleteTodoById, onEditTodo }) => {
  const [editMode, setEditMode] = useState(false);
  const [editInput, setEditInput] = useState(todo.text);

  const onToggleEditMode = () => {
    setEditMode(!editMode);

    setEditInput(todo.text);
  };

  const onChangeEditInput = (e) => {
    setEditInput(e.target.value);
  };

  const onSaveEdit = () => {
    const editedTodo = {
      ...todo,
      text: editInput,
    };

    onEditTodo(editedTodo);

    setEditMode(false);
  };

  return (
    <article className={styles.item}>
      <input type="checkbox" className={styles.item__checkbox} />

      {editMode ? (
        <input
          type="text"
          value={editInput}
          onChange={onChangeEditInput}
          className={styles.item__input}
        />
      ) : (
        <p className={styles.item__text}>{todo.text}</p>
      )}

      <div className={styles.item__buttons}>
        {editMode ? (
          <button onClick={onSaveEdit} className={styles.item__btn}>
            Save
          </button>
        ) : (
          <button onClick={onToggleEditMode} className={styles.item__btn}>
            Edit
          </button>
        )}

        {editMode ? (
          <button
            onClick={onToggleEditMode}
            className={`${styles.item__btn} ${styles['item__btn--red']}`}
          >
            Cancel
          </button>
        ) : (
          <button
            onClick={() => onDeleteTodoById(todo.id)}
            className={`${styles.item__btn} ${styles['item__btn--red']}`}
          >
            Delete
          </button>
        )}
      </div>
    </article>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onDeleteTodoById: PropTypes.func.isRequired,
  onEditTodo: PropTypes.func.isRequired,
};
