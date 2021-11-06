

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
                reset(data)
            }
            );
    }, [reset,mealId])

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
                    <input {...register("orderId", {})}defaultValue={mealId} />

                    <label> Order status:</label>
                    <input {...register("orderStatus", {})}  defaultValue="pending" />

                    <label> Amount to be paid:</label>
                    <input {...register("price", { })} defaultValue= {mealdetail.price}/>



                    <label> Meal: </label>
                    <input {...register("meal", {})} placeholder="Name of the meal" defaultValue={mealdetail.name} />
                    
                   

                    <label> Name: </label>
                    <input {...register("uName", {})}  defaultValue={user.displayName} />


                    <label> Email address: </label>
                    <input {...register("email", { })}  defaultValue={user.email} />

                    <label> Address: </label>
                    <input {...register("address", { required: true })} />
                    <label> contact number: </label>
                    <input type="number"  {...register("phone", { required: true})}  />

                    
                    <input type="submit" />
                </form>
            </div>


            <button className="btn-success px-3 py-2" onClick={handleClick}>Go back</button>
        </div>
    );
};

export default MealDetail;