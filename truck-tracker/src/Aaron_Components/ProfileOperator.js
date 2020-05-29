import React, { useEffect, useState } from 'react';
import axiosWithAuth from './axiosWithAuth';
import {connect} from 'react-redux';
import {actionLogin} from './Action';
import Add_truck from './Add_truck';

const ProfileOperator = (props) => {
    console.log("profile", props)
    const [trucks, setTrucks] = useState([]);
        useEffect(() =>{
            axiosWithAuth()
                .get(`https://foodtruck-trackr.herokuapp.com/operators/${props.id}/trucks`)
                .then(res => setTrucks(res.data))
                .catch(err => console.log(err))

        },[setTrucks])
        console.log(trucks)
    return(
        <div>
            <Add_truck />
            {
                trucks.map(item => {
                    return(
                    <div>
                    <div>{item.truckName}</div>
                    <div>{item.imageOfTruck}</div>
                    <div>
                    <button>Delete</button>
                    <button>Update</button>
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