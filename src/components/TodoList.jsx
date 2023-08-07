import PropTypes from 'prop-types';

export const TodoList = ({ todos }) => {
  return (
    <main>
      {todos.map((todo) => {
        return (
          <article key={todo.id}>
            <p>{todo.text}</p>
          </article>
        );
      })}
    </main>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};
