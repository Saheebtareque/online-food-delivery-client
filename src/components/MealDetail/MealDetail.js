

import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import './MealDetail.css';
import useAuth from '../hooks/useAuth';

const MealDetail = () => {
    const { user, } = useAuth();
    const { mealId } = useParams();
    const history = useHistory();
    const [mealdetail, setMealdetail] = useState({});
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        fetch(`https://afternoon-earth-11436.herokuapp.com/meals/${mealId}`)
            .then(res => res.json())
            .then(data => {
                setMealdetail(data)
            }
            );
    }, [])

    const onSubmit = data => {
        console.log(data);

        fetch('https://afternoon-earth-11436.herokuapp.com/orderedmeals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    alert('meal order placed');
                    reset();
                }
            })
    }

    const handleClick = () => {
        history.push('/home');
    }
    return (
        <div>
            <h1>Meals's Id: {mealId} </h1>
            <div className="meal-info">
                <Card style={{ width: '50rem' }}>
                    <Card.Img variant="top" src={mealdetail.img} />
                    <Card.Body>
                        <Card.Title className="text-warning">{mealdetail.name}</Card.Title>
                        <Card.Title className="text-success">{mealdetail.price} taka</Card.Title>
                        <Card.Text>
                            {mealdetail.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>


            <div className="meal-form my-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label> Order ID:</label>
                    <input {...register("orderId", { required: true} )} />

                    <label> Order status:</label>
                    <input {...register("orderStatus", { required: true})} placeholder="pending" />

                    <label> Amount to be paid:</label>
                    <input {...register("price", { required: true})} />



                    <label> Meal: </label>
                    <input {...register("meal", { required: true})} placeholder="Name of the meal" />

                    <h3> User information: </h3>

                    <label> Name: </label>
                    <input {...register("uName", { required: true })} />


                    <label> Email address: </label>
                    <input {...register("email", { required: true })} />

                    <label> Address: </label>
                    <input {...register("address", { required: true })} />
                    <label> contact number: </label>
                    <input type="number"  {...register("phone", { required: true, maxLength: 20 })} />


                    <input type="submit" />
                </form>
            </div>


            <button className="btn-success px-3 py-2" onClick={handleClick}>Go back</button>
        </div>
    );
};

export default MealDetail;