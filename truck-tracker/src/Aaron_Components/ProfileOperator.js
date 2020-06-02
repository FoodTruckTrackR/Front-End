import React, { useEffect, useState } from "react";
import axiosWithAuth from "./axiosWithAuth";
import { connect } from "react-redux";
import { actionLogin } from "./Action";
import Add_truck from "./Add_truck";
import CustomerSurvey from "./CustomerSurvey";
import ReactDOM from "react-dom";

const ProfileOperator = (props) => {
  console.log("profile", props);
  const [trucks, setTrucks] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get(
        `https://foodtruck-trackr.herokuapp.com/operators/${props.id}/trucks`
      )
      .then((res) => setTrucks(res.data))
      .catch((err) => console.log(err));
  }, [props.id]);

  const [newTruck, setNewTruck] = useState({
    truckName: "",
    imageOfTruck: "",
    cuisineType: "",
  });

  const onDelete = (item) => {
    axiosWithAuth()
      .delete(
        `https://foodtruck-tracker.herokuapp.com/operators/${props.id}/trucks/${item.id}`
      )
      .then((res) => setTrucks(res.data))
      .catch((err) => console.log(err));
  };

  const onEdit = (item) => {
    axiosWithAuth()
      .put(
        `https://foodtruck-tracker.herokuapp.com/operators/${props.id}/trucks/${item.id}`,
        newTruck
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Add_truck />
      <div className="truck-info">
        {trucks.map((item) => {
          return (
            <div className="update">
              <div>{item.truckName}</div>
              <div>{item.imageOfTruck}</div>
              <div>
                <button onClick={onDelete(item)}>Delete</button>
                <input
                  placeholder="Enter New Truck Name"
                  type="text"
                  onChange={(e) =>
                    setNewTruck({ ...trucks, truckName: e.target.value })
                  }
                />
                <input
                  placeholder="Enter New Image URL Here"
                  type="text"
                  onChange={(e) =>
                    setNewTruck({ ...trucks, imageOfTruck: e.target.value })
                  }
                />
                <input
                  placeholder="Enter New Cuisine Type Here"
                  type="text"
                  onChange={(e) =>
                    setNewTruck({ ...trucks, cuisineType: e.target.value })
                  }
                />
                <button onClick={onEdit(item)}>Edit</button>
              </div>
              <CustomerSurvey item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.error,
    id: state.id,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, { actionLogin })(ProfileOperator);
