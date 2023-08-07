import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, onDeleteTodoById }) => {
  return (
    <main>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} onDeleteTodoById={onDeleteTodoById}></TodoItem>;
      })}
    </main>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDeleteTodoById: PropTypes.func.isRequired,
};
