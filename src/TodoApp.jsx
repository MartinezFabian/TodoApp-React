import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import styles from './TodoApp.module.css';
import { useTodo } from './hooks/useTodo';

export const TodoApp = () => {
  const {
    todoState,
    onAddTodo,
    onDeleteTodo,
    onEditTodo,
    onToggleDone,
    todosCount,
    pendingTodosCount,
  } = useTodo();

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.header__title}>
          Tasks: {todosCount} - Pending: {pendingTodosCount}
        </h1>

        <TodoInput onNewTodo={(newTodo) => onAddTodo(newTodo)}></TodoInput>
      </header>

      <TodoList
        todos={todoState}
        onDeleteTodoById={(idToDelete) => onDeleteTodo(idToDelete)}
        onEditTodo={(editedTodo) => onEditTodo(editedTodo)}
        onToggleDone={(id) => onToggleDone(id)}
      ></TodoList>
    </div>
  );
};
