export const GET_TRUCK_INFO = "GET_TRUCK_INFO";
export const TRUCK_LOADING = "TRUCK_LOADING";
export const GET_TRUCK_ERROR = "GET_TRUCK_ERROR";

const initialValue = {
    id: "",
    isFetching: false,
    error: ""
}


export const Reducer = (state = initialValue, action) =>{
    switch(action.type){
        case GET_TRUCK_INFO:
            return{
                ...state, 
                id: [action.payload],
                isFetching: false
            }
        case TRUCK_LOADING:
            return{
                ...state,
                id: [action.payload],
                isFetching: true
            }
        case GET_TRUCK_ERROR:
            return{
                ...state,
                error: [action.payload],
                isFetching: false
            }
        default:
            return state
    }         
} 