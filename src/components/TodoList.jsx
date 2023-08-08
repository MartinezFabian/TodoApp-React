import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, onDeleteTodoById, onEditTodo }) => {
  return (
    <main>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodoById={onDeleteTodoById}
            onEditTodo={onEditTodo}
          ></TodoItem>
        );
      })}
    </main>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDeleteTodoById: PropTypes.func.isRequired,
  onEditTodo: PropTypes.func.isRequired,
};
