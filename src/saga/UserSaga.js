import { call, put, takeLatest } from 'redux-saga/effects';
import { registerUserFailure, registerUserSuccess, REGISTER_USER, userLoginFailure, userLoginSuccess, USER_LOGIN } from '../Action/UserAction';
import api from './UserApi'

function* getUser(action) {
    console.log("Login User SAga",action);
    try {
        const{username,password}=action.payload;
        console.log("Console from api in usersaga",username,password)
        const data = yield call(api.loginuser,{username,password});
        console.log("Data in user saga is ",data)
        yield put(userLoginSuccess(data));

    } catch (error) {
        console.log("Products Fetch Error",error)
        yield put(userLoginFailure());
        // console.error(error) // eslint-disable-line

    }
}

function* signUpUser(action){
    console.log("Sign Up  User in saga  is "+ JSON.stringify(action))
    try{
        const{username,email,password}=action.payload;
        console.log("Console from api",username,email,password)
        let{data} = yield call(api.signup,{username,email,password});
        console.log("add user saga"+JSON.stringify(data))
        yield put(registerUserSuccess(data));
    }catch(err)
    {
        console.log("Error is "+JSON.stringify(err.response.data));
        // return err
        yield put(registerUserFailure());
    }
}
export default function* UserSaga() {

    yield takeLatest(REGISTER_USER, signUpUser);
    yield takeLatest(USER_LOGIN, getUser);
    
}