import PropTypes from 'prop-types';
import { useState } from 'react';

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
    <article>
      <input type="checkbox" />

      {editMode ? (
        <input type="text" value={editInput} onChange={onChangeEditInput} />
      ) : (
        <p>{todo.text}</p>
      )}

      {editMode ? (
        <button onClick={onSaveEdit}>Save</button>
      ) : (
        <button onClick={onToggleEditMode}>Edit</button>
      )}

      {editMode ? (
        <button onClick={onToggleEditMode}>Cancel</button>
      ) : (
        <button onClick={() => onDeleteTodoById(todo.id)}>Delete</button>
      )}
    </article>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onDeleteTodoById: PropTypes.func.isRequired,
  onEditTodo: PropTypes.func.isRequired,
};
