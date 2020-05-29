import React, { useState } from 'react';

const FavTruckComp = () => {

    const [truckList, setTruckList] = useState([{
        truckName: '',
        imageOfTruck: '',
        cuisineType: '',
        customerRatings: [],
        customerRatingAverage: '',
        menu: []
    }])

    return(
        <div>
            {truckList.map(truck => {
                return <div>
                    <h5>{truck.truckName}</h5>
                    <img src={truck.imageOfTruck} alt='truck image'/>
                    <h5>{truck.cuisineType}</h5>
                    <h5>{truck.customerRatingAverage}</h5>
                </div>
            })}
            {truckList.menu.forEach(element => {
                <p>{element}</p>
            })}
        </div>
    )
}

export default FavTruckComp;
