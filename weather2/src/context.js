import React, { useContext, useEffect, useReducer } from "react";

import {
  SET_loading,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";
import reducer from "./reducer";

const API_ENDPOINT = "api.openweathermap.org/data/2.5/weather?q=glendale&appid=5942a5fdf0e3c2e7f1ae17fbb57f9442";

const initialState = {
  loading: true,
  hits: [],
  query: "react",
  page: 0,
  nbPages: 0,
};

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async (url) => {
    dispatch({ type: SET_loading });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeStory = (id) => {
    dispatch({ type: REMOVE_STORY, payload: id });
  };
  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };
  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value });
  };
  useEffect(() => {
    fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removeStory, handleSearch, handlePage }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};
