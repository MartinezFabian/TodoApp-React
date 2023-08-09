import { useEffect, useReducer } from 'react';
import { TodoInput } from './components/TodoInput';
import { todoReducer } from './todoReducer';
import { TodoList } from './components/TodoList';
import styles from './TodoApp.module.css';

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) ?? [];
};

export const TodoApp = () => {
  const [todoState, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoState));
  }, [todoState]);

  const onAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      newTodo: newTodo,
    });
  };

  const onDeleteTodo = (idToDelete) => {
    dispatch({
      type: 'delete',
      idToDelete: idToDelete,
    });
  };

  const onEditTodo = (editedTodo) => {
    dispatch({
      type: 'edit',
      editedTodo: editedTodo,
    });
  };

  const onToggleDone = (id) => {
    dispatch({
      type: 'toggleDone',
      id: id,
    });
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.header__title}>Todo List</h1>

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
