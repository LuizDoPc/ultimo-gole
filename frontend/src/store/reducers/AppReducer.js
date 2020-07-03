import { GET_DASH, GET_DASH_SUCCESS, GET_DASH_FAILURE } from 'store/actions';

const INITIAL_STATE = {
  isLoading: false,
  dashData: {},
  error: undefined,
};

const AppReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_DASH:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      };
    case GET_DASH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dashData: action.payload,
      };
    case GET_DASH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
