import { createStore, applyMiddleware } from "redux";
import { currencyInfoReducer } from "./reducers/currencyInfo";
import thunk from "redux-thunk";

export const store = createStore(currencyInfoReducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));
