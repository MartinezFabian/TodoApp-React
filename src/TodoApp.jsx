import { useReducer } from 'react';
import { TodoInput } from './components/TodoInput';
import { todoReducer } from './todoReducer';
import { TodoList } from './components/TodoList';

const initialState = [
  {
    id: Date.now(),
    text: 'Estudiar React',
    done: false,
  },
];

export const TodoApp = () => {
  const [todoState, dispatch] = useReducer(todoReducer, initialState);

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

  return (
    <>
      <header>
        <h1>Todo List</h1>

        <TodoInput onNewTodo={(newTodo) => onAddTodo(newTodo)}></TodoInput>
      </header>

      <TodoList
        todos={todoState}
        onDeleteTodoById={(idToDelete) => onDeleteTodo(idToDelete)}
        onEditTodo={(editedTodo) => onEditTodo(editedTodo)}
      ></TodoList>
    </>
  );
};
