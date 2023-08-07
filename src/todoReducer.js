export const todoReducer = (todoState = [], action = {}) => {
  switch (action.type) {
    case 'add': {
      return [action.newTodo, ...todoState];
    }

    case 'delete': {
      return todoState.filter((todo) => todo.id !== action.idToDelete);
    }

    case 'toggle': {
      throw new Error('action toggle is not implemented');
    }

    default: {
      throw new Error(`Unknown action: ${action.type}`);
    }
  }
};
