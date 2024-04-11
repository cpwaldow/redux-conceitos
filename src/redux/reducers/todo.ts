import { AnyAction } from 'redux';

const initialState = [
  {
    id: 1,
    todo: 'Aprender Flux',
    completed: false,
  },
  {
    id: 2,
    todo: 'Aprender Redux',
    completed: false,
  },
];

const todoReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todoReducer;
