import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';
import styles from './TodoList.module.css';

export const TodoList = ({ todos, onDeleteTodoById, onEditTodo, onToggleDone }) => {
  return (
    <main className={styles['items-flex']}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodoById={onDeleteTodoById}
            onEditTodo={onEditTodo}
            onToggleDone={onToggleDone}
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
  onToggleDone: PropTypes.func.isRequired,
};
