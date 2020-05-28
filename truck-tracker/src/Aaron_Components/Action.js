import axios from 'axios';
import { GET_TRUCK_INFO, GET_TRUCK_ERROR} from './Reducer';

export const actionLogin = (e, user) => dispatch =>{
  e.preventDefault();
  console.log("is running");
axios
.post("https://foodtruck-trackr.herokuapp.com/operators/login", user)
.then(
  res =>{
  localStorage.setItem("token", res.data.token)
  dispatch({type:GET_TRUCK_INFO, payload: res.data.id})
  console.log(res.data)
  })
.catch(error =>{
  console.log(error)
  dispatch({type:GET_TRUCK_ERROR, payload: error})
})
}