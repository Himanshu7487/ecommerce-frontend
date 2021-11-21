let initState = { users: [], user: {}, loading: true, success: false, isLoggedIn:false }

export const UserReducer = (state = initState, action) => {
    console.log("IN User Reducer:" + JSON.stringify(action))
    switch (action.type) {
     case 'REGISTER_USER':
     case 'USER_LOGIN':
             return {
         ...state,
         loading: true,
         isLoggedIn:false,
      }
      case 'USER_LOGIN_SUCCESS':
       console.log("User Login SUCCESS", action.data)
       return {
         ...state,
         loading: false,
        //  id: action.data.user._id,
         isLoggedIn:true
       }
      case 'REGISTER_USER_SUCCESS':
        console.log("Create USER Success  in Reducer",action.data)
        return{
           state,
           isLoggedIn: true
          // users:action.data.user ? state.users.concat(action.data.user) : state.users,
          // users: action.data.user,
          // loading:false,
          // success: action.data
        }
       case 'REGISTER_USER_FAILURE':
       case 'USER_LOGIN_FAILURE':
        return {
        ...state,
        loading: false,
        success: false,
        isLoggedIn:false
      }
         default:
      return state
  }
}