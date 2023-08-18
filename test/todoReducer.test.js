import { todoReducer } from '../src/todoReducer';

/* eslint-disable no-undef */
describe('tests in todoReducer.js', () => {
  const initialState = [
    {
      id: 1,
      text: 'demo todo',
      done: false,
    },
  ];

  test('must return to the initial state', () => {
    const newState = todoReducer(initialState, {});

    expect(newState).toBe(initialState);
  });

  test('must add a todo', () => {
    const newTodo = {
      id: 2,
      text: 'nuevo todo',
      done: false,
    };

    const action = {
      type: 'add',
      newTodo: newTodo,
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(2);
    expect(newState).toContain(newTodo);
  });

  test('must delete todo', () => {
    const action = {
      type: 'delete',
      idToDelete: 1,
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
  });

  test('must edit todo', () => {
    const editedTodo = {
      id: 1,
      text: 'demo todo edited',
      done: false,
    };

    const action = {
      type: 'edit',
      editedTodo: editedTodo,
    };

    const newState = todoReducer(initialState, action);

    expect(newState).toContain(editedTodo);
  });

  test('must toggle done', () => {
    const action = {
      type: 'toggleDone',
      id: 1,
    };

    const newState = todoReducer(initialState, action);

    expect(newState[0].done).toBe(true);
  });
});
