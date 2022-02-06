import {
  FETCH_TASK_LIST_START,
  FETCH_TASK_LIST_SUCCESS,
  FETCH_TASK_LIST_FAIL,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  loading: false,
  list: [],
  errors: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TASK_LIST_START:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TASK_LIST_SUCCESS:
      return {
        ...state,
        list: action.response,
        loading: false,
      };

    case FETCH_TASK_LIST_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
