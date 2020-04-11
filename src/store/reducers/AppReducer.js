import {REDUX_TEST} from 'store/actions';

const INITIAL_STATE = {
  test: false,
};

const AppReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REDUX_TEST:
      return {
        ...state,
        test: true,
      };
    default:
      return state;
  }
};

export default AppReducer;
