import axios from 'axios';
import { GET_TRUCK_INFO, GET_TRUCK_ERROR} from './Reducer';

export const actionLogin = (user, props) => dispatch =>{
axios
.post("https://foodtruck-trackr.herokuapp.com/operators/login", user)
.then(
  res =>{
  localStorage.setItem("token", res.data.token)
  localStorage.setItem("trucks", res.data.trucks)
  dispatch({type:GET_TRUCK_INFO, payload: res.data.id})
  })
.catch(error =>{
  console.log(error)
  dispatch({type:GET_TRUCK_ERROR, payload: error})
})
}