import { useEffect, useReducer } from 'react';
import { todoReducer } from '../todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) ?? [];
};

export const useTodo = () => {
  const [todoState, dispatch] = useReducer(todoReducer, [], init);

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

  return {
    todoState: todoState,
    onAddTodo: onAddTodo,
    onDeleteTodo: onDeleteTodo,
    onEditTodo: onEditTodo,
    onToggleDone: onToggleDone,
    todosCount: todoState.length,
    pendingTodosCount: todoState.filter((todo) => todo.done === false).length,
  };
};
