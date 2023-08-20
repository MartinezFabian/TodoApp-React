/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { TodoApp } from '../src/TodoApp';
import { useTodo } from '../src/hooks/useTodo';

jest.mock('../src/hooks/useTodo');

describe('tests in <TodoApp></TodoApp>', () => {
  useTodo.mockReturnValue({
    todoState: [
      {
        id: 1,
        text: 'demo todo 1',
        done: false,
      },
      {
        id: 2,
        text: 'demo todo 2',
        done: true,
      },
    ],
    onAddTodo: jest.fn(),
    onDeleteTodo: jest.fn(),
    onEditTodo: jest.fn(),
    onToggleDone: jest.fn(),
    todosCount: 2,
    pendingTodosCount: 1,
  });

  test('must display the component correctly', () => {
    render(<TodoApp></TodoApp>);

    expect(screen.getByRole('textbox')).toBeTruthy();
    expect(screen.getByText('demo todo 1')).toBeTruthy();
    expect(screen.getByText('demo todo 2')).toBeTruthy();
  });
});
