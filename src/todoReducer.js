export const todoReducer = (todoState = [], action = {}) => {
  switch (action.type) {
    case 'add': {
      throw new Error('action add is not implemented');
    }

    case 'delete': {
      throw new Error('action delete is not implemented');
    }

    case 'toggle': {
      throw new Error('action toggle is not implemented');
    }

    default: {
      throw new Error(`Unknown action: ${action.type}`);
    }
  }
};
