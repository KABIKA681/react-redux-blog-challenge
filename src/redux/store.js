import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducers from "./reducers"
import apiMiddleware from "../middleware/apiMiddleware";
import initialState from "./initialState";

const middleware = [apiMiddleware]

const store = createStore(combineReducers(reducers), initialState, composeWithDevTools(applyMiddleware(...middleware)) )

export default store