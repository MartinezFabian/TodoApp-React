import PropTypes from 'prop-types';

export const TodoItem = ({ todo, onDeleteTodoById }) => {
  return (
    <article>
      <input type="checkbox" />
      <p>{todo.text}</p>
      <button onClick={() => onDeleteTodoById(todo.id)}>Delete</button>
    </article>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onDeleteTodoById: PropTypes.func.isRequired,
};
