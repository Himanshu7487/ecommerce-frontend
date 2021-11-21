import { createStore, applyMiddleware, combineReducers } from "redux";
import { ProductReducer } from "../Reducer/ProductReducer";
import { UserReducer } from "../Reducer/UserReducer";
import createSagaMiddleware from "@redux-saga/core";
import ProductSaga from "../saga/ProductSaga";
import { composeWithDevTools } from "redux-devtools-extension";
import UserSaga from "../saga/UserSaga";



// const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    ProductReducer,
    UserReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(ProductSaga);
sagaMiddleware.run(UserSaga)
export default store;



// import { createStore, applyMiddleware, compose, combineReducers } from "redux";
// import { ProductReducer } from './../Reducer/ProductReducer'
// import ProductSaga from './../saga/ProductSaga';
// import createSagaMiddleware from 'redux-saga';
// import { UserReducer } from "../Reducer/UserReducer";
// import { AdminReducer } from "../Reducer/AdminReducer";
// import UserSaga from "../saga/UserSaga";
// import AdminSaga from "../saga/AdminSaga";
// // import React from "react";

// const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

// const sagaMiddleware = createSagaMiddleware();
// const rootReducer = combineReducers({
//     ProductReducer,
//     UserReducer,
//     AdminReducer
// })
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
// sagaMiddleware.run(ProductSaga);
// sagaMiddleware.run(UserSaga);
// sagaMiddleware.run(AdminSaga);

// export default store;