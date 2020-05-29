import React, { useState } from 'react';

const TrucksComp = () => {
    
    const [truckState, setTruckState] = useState([{
        truckName: '',
        imageOfTruck: '',
        cuisineType: '',
        customerRatings: [],
        customerRatingAverage: '',
        menu: []
    }])

    return(
        <div>
            {truckState.map(truck => {
                return <div>
                    <h5>{truck.truckName}</h5>
                    <img src={truck.imageOfTruck} alt='truck image'/>
                    <h5>{truck.cuisineType}</h5>
                    <h5>{truck.customerRatingAverage}</h5>
                </div>
            })}
            {truckState.menu.forEach(element => {
                <p>{element}</p>
            })}
        </div>
    )
}

export default TrucksComp;
