import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/components/TodoItem';

/* eslint-disable no-undef */
describe('tests in <TodoItem></TodoItem>', () => {
  const todoTest = {
    id: 1,
    text: 'demo todo',
    done: false,
  };

  const onToggleDoneMock = jest.fn();
  const onDeleteTodoByIdMock = jest.fn();
  const onEditTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('checkbox must call onToggleDone with the id of the ToDo', () => {
    render(
      <TodoItem
        todo={todoTest}
        onDeleteTodoById={onDeleteTodoByIdMock}
        onEditTodo={onEditTodoMock}
        onToggleDone={onToggleDoneMock}
      ></TodoItem>
    );

    const checkboxElement = screen.getByRole('checkbox');

    fireEvent.click(checkboxElement);

    expect(onToggleDoneMock).toHaveBeenCalledWith(todoTest.id);
  });

  test('btnDelete must call onDeleteTodoById with the id of the ToDo', () => {
    render(
      <TodoItem
        todo={todoTest}
        onDeleteTodoById={onDeleteTodoByIdMock}
        onEditTodo={onEditTodoMock}
        onToggleDone={onToggleDoneMock}
      ></TodoItem>
    );

    const btnDelete = screen.getByLabelText('btn-delete');

    fireEvent.click(btnDelete);

    expect(onDeleteTodoByIdMock).toHaveBeenCalledWith(todoTest.id);
  });

  test('Save button must call onEditTodo with editedTodo', () => {
    render(
      <TodoItem
        todo={todoTest}
        onDeleteTodoById={onDeleteTodoByIdMock}
        onEditTodo={onEditTodoMock}
        onToggleDone={onToggleDoneMock}
      ></TodoItem>
    );

    // Cambiar al modo de edición
    const editButton = screen.getByText('Edit');
    fireEvent.click(editButton);

    // Modificar el texto en el campo de edición
    const editInput = screen.getByRole('textbox');
    fireEvent.change(editInput, { target: { value: 'Edited task' } });

    // Guardar la edición
    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);

    const editedTodo = {
      ...todoTest,
      text: 'Edited task',
    };

    expect(onEditTodoMock).toHaveBeenCalledWith(editedTodo);
  });
});
