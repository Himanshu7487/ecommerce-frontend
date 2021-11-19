import { createStore, applyMiddleware, combineReducers } from "redux";
import { ProductReducer } from "../Reducer/ProductReducer";
import createSagaMiddleware from "@redux-saga/core";
import ProductSaga from "../saga/ProductSaga";
import { composeWithDevTools } from "redux-devtools-extension";



// const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    ProductReducer,
    
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(ProductSaga);
export default store;