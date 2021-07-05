import axios from "axios";
import { GET_MOVIES_SUCCESS, GET_MOVIES_FAILED } from "./actiontypes";

export const getMovies = () => async (dispatch) => {
  try {
    const result = await axios.get("/api/movie/all");
    console.log(result);
    dispatch({ type: GET_MOVIES_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_MOVIES_FAILED, payload: error });
    console.log(error);
  }
};
export const deleteMovie = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/movie/${id}`);
    dispatch(getMovies());
  } catch (error) {
    dispatch({ type: GET_MOVIES_FAILED, payload: error });
    console.log(error);
  }
};
export const editMovie = (id, newMovie) => async (dispatch) => {
  try {
    await axios.put(`/api/movie/${id}`, newMovie);
    dispatch(getMovies());
  } catch (error) {
    dispatch({ type: GET_MOVIES_FAILED, payload: error });
    console.log(error);
  }
};
export const addMovie = (newMovie) => async (dispatch) => {
  try {
    await axios.post("/api/movie/", newMovie);
    dispatch(getMovies());
  } catch (error) {
    dispatch({ type: GET_MOVIES_FAILED, payload: error });
    console.log(error);
  }
};
