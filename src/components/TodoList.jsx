import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos }) => {
  return (
    <main>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo}></TodoItem>;
      })}
    </main>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};
