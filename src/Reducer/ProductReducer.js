let initState = {products:[], product:[], loading:true, success:false}
export const ProductReducer = (state = initState, action)=>{
    console.log("In Product Reducer: " + JSON.stringify(action));
    console.log("log is " + JSON.stringify(action));
    switch (action.type) {
        case 'FETCH_product':
        case 'DELETE_PRODUCT':    
        case 'CREATE_PRODUCT': 
        case 'EDIT_PRODUCT': 
        case 'FETCH_PRODUCT':     
            return{
                ...state,
                loading: true,
            }
        case 'FETCH_product_SUCCESS': 
            return{
            ...state,
            product: action.product,
            loading: false,
        }   
        case 'FETCH_PRODUCTS_SUCCESS': 
        console.log("Action data "+ JSON.stringify(action));
            return{
            ...state,
            product: action.data.product,
            loading: false,
        }
        case 'CREATE_PRODUCT_SUCCESS': 
        console.log("crete product success action in reducer");
            return{
            ...state,
            product: action.data.product ? state.product.concat(action.data.product) :state.product,
            loading: false,
            success: action.data.success
        }
        case 'EDIT_PRODUCT_SUCCESS': 
            return{
            ...state,
            product: { ...state.product, ...action.data.product},
            loading: false,
        }
        case 'DELETE_PRODUCT_SUCCESS': 
            return{
            ...state,
            product: state.product.filter(product => product._id !== action.data.id),
            loading: false
        }
        case 'ADD_PRODUCT_FAILURE':
        case 'DELETE_PRODUCT_FAILURE':    
        case 'EDIT_PRODUCT_FAILURE': 
        case 'FETCH_PRODUCT_FAILURE': 
        case 'FETCH_product_FAILURE':
        case 'CREATE_PRODUCT_FAILURE': 
            return {
                ...state,
                loading: false,
                success: false
            }
        default:
            return state
    }
}