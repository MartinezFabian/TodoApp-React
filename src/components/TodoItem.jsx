import PropTypes from 'prop-types';

export const TodoItem = ({ todo }) => {
  return (
    <article>
      <input type="checkbox" />
      <p>{todo.text}</p>
      <button>Delete</button>
    </article>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};
