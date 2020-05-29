import React, { useEffect, useState } from 'react';
import axiosWithAuth from './axiosWithAuth';
import {connect} from 'react-redux';
import {actionLogin} from './Action';
import Add_truck from './Add_truck';

const ProfileOperator = (props) => {
    const [trucks, setTrucks] = useState([]);
        useEffect(() =>{
            axiosWithAuth()
                .get(`https://foodtruck-trackr.herokuapp.com/operators/${props.id}/trucks`)
                .then(res => console.log("this", res.data))
                .catch(err => console.log(err))

        },[setTrucks])
    return(
        <div>
            <Add_truck />
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