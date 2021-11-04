import React from 'react';
import { useHistory } from 'react-router';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { name,price, description ,img, _id} = service;
    const history = useHistory();

    const mealinfo = () => {
        history.push(`/service/${_id}`);
    }
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h2  className="text-warning" > {price} taka</h2>
            <p className="px-3">{description}</p>
                <button className="btn btn-warning" onClick={mealinfo}>Click here to order</button>
        
        </div>
    );
};

export default Service;