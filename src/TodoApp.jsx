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

  return (
    <>
      <h1>Todo List</h1>

      <TodoInput></TodoInput>

      <TodoList todos={todoState}></TodoList>
    </>
  );
};
