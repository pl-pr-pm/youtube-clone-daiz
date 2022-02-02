import React, { createContext, useReducer } from "react";

const initialState = {
  popular: [],
  selected: {},
  slectedTitle: "",
  selectedDesctiption: "",
  related: [],
  term: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_POPULAR":
      return { ...state, popular: action.payload.popular };
    case "SET_SELECTED":
      // stateを展開する必要がある。これは、reducerは更新ではなく、新規作成を行うため、展開しないと、既存のpopularが消えてしまうため
      return {
        ...state,
        selected: action.payload.selected,
        slectedTitle: action.payload.selected.snippet.title,
        selectedDesctiption: action.payload.selected.snippet.description,
      };
    case "SET_RELATED":
      return { ...state, related: action.payload.related };
    case "SET_TERM":
      return { ...state, term: action.payload.term };
    default:
      return state;
  }
};

export const Store = createContext({
  globalState: initialState,
  setGlobalState: () => null,
});

export const StoreProvider = ({ children }) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ globalState, setGlobalState }}>
      {children}
    </Store.Provider>
  );
};
