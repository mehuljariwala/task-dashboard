import {
  FETCH_TASK_LIST_START,
  FETCH_TASK_LIST_SUCCESS,
  FETCH_TASK_LIST_FAIL,
} from "./actionTypes";
import data from "../../data/data";

const fetchTasks = () => {
  return new Promise((resolve) => {
    resolve(data);
  });
};

export const loadTasks = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TASK_LIST_START });
    return fetchTasks().then((response) => {
      if (response) {
        dispatch({
          type: FETCH_TASK_LIST_SUCCESS,
          response,
        });
      } else {
        dispatch({
          type: FETCH_TASK_LIST_FAIL,
          response,
        });
      }
    });
  };
};
