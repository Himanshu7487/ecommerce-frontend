import {call, put, takeLatest} from 'redux-saga/effects'
import { FETCH_PRODUCTS, fetchProductsSuccess, fetchProductsFailure,
         FETCH_PRODUCT, fetchProductSuccess, fetchProductFailure,
         CREATE_PRODUCT, createProductSuccess, createProductFailure,
         EDIT_PRODUCT, editProductSuccess, editProductFailure,
         DELETE_PRODUCT, deleteProductSuccess, deleteProductFailure
} from '../Action/ProductAction';
import api from './ProductApi'
function* getProducts(){
    try {
        const data = yield call(api.products);
        console.log(data,"data in saga");
        yield put(fetchProductsSuccess(data));
    } catch (error) {
        console.log("Products Fetch Error");
        yield put(fetchProductsFailure());
        console.error(error);
    }
}

function* getProduct(action){
    console.log("In Get Product");
    const {id} = action;
    try {
        const {data} = yield call(api.getProduct, id);
        yield put(fetchProductSuccess(data));
    } catch (err) {
        console.log("Products Fetch Error");
        yield put(fetchProductFailure())
    }
}

function* createProduct(action){
    console.log("Action create Product is"+ JSON.stringify(action));
    try {
        const imgname = yield call(api.addImage, action.imagefile)
        const {productname, price} = action;
        let {data}= yield call(api.addproduct, {productname, price, imagefile: imgname.data});
        console.log("add Product saga" + JSON.stringify(data));
        yield put(createProductSuccess(data));
    } catch (err) {
        console.log("Error is" + JSON.stringify(err.response.data));
        yield put(createProductFailure());
    }
}

function* editProduct(action){
    try {
        console.log("in saga update product"+ JSON.stringify(action));
        const {productname, price} = action.payload;
        const id = action.payload.id
        console.log("edit product saga" + "ID" + id + "productname" +productname + "price"+ price);
        const data = yield call(api.editproduct, id,productname,price);
        console.log("Response in updateproduct"+ JSON.stringify(data));
        yield put(editProductSuccess(data));
    } catch (err) {
        console.log(err);
        yield put(editProductFailure());
    }
}
function* deleteProduct(action){
    try {
        console.log("Remove product saga" + JSON.stringify(action));
        const {id} = action;
        const data = yield call(api.deleteproduct, id);
        console.log("response is" + JSON.stringify(data));
        yield put(deleteProductSuccess(data));
    } catch (err) {
        yield put(deleteProductFailure())
        console.log(err);
    }
}

export default function* ProductSaga(){
    yield takeLatest(FETCH_PRODUCTS, getProducts);
    yield takeLatest(FETCH_PRODUCT, getProduct);
    yield takeLatest(CREATE_PRODUCT, createProduct);
    yield takeLatest(EDIT_PRODUCT, editProduct);
    yield takeLatest(DELETE_PRODUCT, deleteProduct);
}
