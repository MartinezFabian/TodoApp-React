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

  return (
    <>
      <header>
        <h1>Todo List</h1>

        <TodoInput onNewTodo={(newTodo) => onAddTodo(newTodo)}></TodoInput>
      </header>

      <TodoList todos={todoState}></TodoList>
    </>
  );
};
