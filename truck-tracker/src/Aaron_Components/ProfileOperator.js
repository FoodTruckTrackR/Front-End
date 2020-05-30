import React, { useEffect, useState } from 'react';
import axiosWithAuth from './axiosWithAuth';
import {connect} from 'react-redux';
import {actionLogin} from './Action';
import Add_truck from './Add_truck';
import CustomerSurvey from './CustomerSurvey'

const ProfileOperator = (props) => {
    console.log("profile", props)
    const [trucks, setTrucks] = useState([]);
        useEffect(() =>{
            axiosWithAuth()
                .get(`https://foodtruck-trackr.herokuapp.com/operators/${props.id}/trucks`)
                .then(res => setTrucks(res.data))
                .catch(err => console.log(err))

        },[props.id])

        const onDelete = (item) => {
            axiosWithAuth()
                .delete(`https://foodtruck-tracker.herokuapp.com/operators/${props.id}/trucks/${item.id}`)
                .then(res => setTrucks(res.data))
                .catch(err => console.log(err))
        }
        const onUpdate = (item) => {
            const containingDiv = document.querySelector('.update');
            containingDiv.textContent = '';
            const truckName = document.createElement('input');
            truckName.type = 'text';
            truckName.id = item.id;
            truckName.placeholder = 'Enter Truck Name';
            const imageOfTruck = document.createElement('input');
            imageOfTruck.type='text';
            imageOfTruck.placeholder = 'Enter Image URL'; 
            const cuisineType = document.createElement('input');
            cuisineType.type='text';
            cuisineType.placeholder = 'Enter Cuisine Type';
            const buttonForSubmit = document.createElement('button');
            buttonForSubmit.textContent = 'Update';
            containingDiv.appendChild(truckName);
            containingDiv.appendChild(imageOfTruck);
            containingDiv.appendChild(cuisineType);
            containingDiv.appendChild(buttonForSubmit);

            const newTruck ={
                truckName: truckName.value,
                imageOfTruck: imageOfTruck.value,
                cuisineType: cuisineType.value
            }

            const onEdit = () =>{
                axiosWithAuth()
                .put(`https://foodtruck-tracker.herokuapp.com/operators/${props.id}/trucks/${truckName.id}`, newTruck)
                .then(res => console.log(res))
                .catch(err => console.log(err))
            }

            buttonForSubmit.addEventListener('click', onEdit)
        }
    return(
        <div>
            <Add_truck />
            {
                trucks.map(item => {
                    return(
                    <div className="update">
                    <div>{item.truckName}</div>
                    <div>{item.imageOfTruck}</div>
                    <div>
                    <button onClick={onDelete(item)}>Delete</button>
                    <button onClick={onUpdate}>Update</button>
                    <CustomerSurvey item={item} />
                    </div>
                    </div>
                )
                })
            }
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        error: state.error,
        id: state.id,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, {actionLogin})(ProfileOperator);