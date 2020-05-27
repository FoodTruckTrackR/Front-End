const GET_TRUCK_INFO = "GET_TRUCK_INFO";
const TRUCK_LOADING = "TRUCK_LOADING";
const GET_TRUCK_ERROR = "GET_TRUCK_ERROR";

const initialValue = {
    operatorId: "",
    isFetching: false,
    error: ""
}


export const Reducer = (state = initialValue, action) =>{
    switch(action.type){
        case GET_TRUCK_INFO:
            return{
                ...state, 
                operatorId: action.payload,
                isFetching: false
            }
        case TRUCK_LOADING:
            return{
                ...state,
                operatorId: action.payload,
                isFetching: true
            }
        case GET_TRUCK_ERROR:
            return{
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state
    }         
} 