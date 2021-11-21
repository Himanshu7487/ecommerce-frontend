export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";//post
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";  //fetch
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";

export const registerUser = ({ username,email,password }) => {
    console.log("User action for sing up")
    return {
        type: REGISTER_USER,
        payload:{
            username,
            email,
            password
        }
    };
}
export const registerUserSuccess = data =>({type:REGISTER_USER_SUCCESS,data});
export const registerUserFailure = ()=>({type:REGISTER_USER_FAILURE});

export const userLogin = ({ username,email,password }) => {
    return {
        type: USER_LOGIN,
        payload:{
            username,
            email,
            password
        }
    };
}
export const userLoginSuccess = data =>({type:USER_LOGIN_SUCCESS,data});
export const userLoginFailure = ()=>({type:USER_LOGIN_FAILURE});