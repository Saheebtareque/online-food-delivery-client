import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import './MealDetail.css';
import useAuth from '../hooks/useAuth';

const MealDetail = () => {
    const { user,} = useAuth();
    const { mealId } = useParams();
    const history = useHistory();
    const [mealdetail, setMealdetail] = useState({})
    const { register, handleSubmit, } = useForm();
    useEffect(() => {
        fetch(`http://localhost:5000/meals/${mealId}`)
            .then(res => res.json())
            .then(data => setMealdetail(data));
    }, [])

    const onSubmit = data => {
        console.log(data);
     };

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
                    <input {...register("orderId", { required:true, maxLength: 20 })}value={mealId || '' } />

                    <label> Order status:</label>
                    <input {...register("orderStatus", { required: true, maxLength: 20 })}  value="pending" />

                    <label> Amount to be paid:</label>
                    <input {...register("price", { required: true, maxLength: 20 })} value= {mealdetail.price || ''}/>



                    <label> Meal: </label>
                    <input {...register("meal", { required: true, maxLength: 20 })} placeholder="Name of the meal" value={mealdetail.name || ''} />
                    
                    <h3> User information: </h3>

                    <label> Name: </label>
                    <input {...register("uName", { required: true, maxLength: 20 })}  value={user.displayName || ''} />


                    <label> Email address: </label>
                    <input {...register("email", { required: true, maxLength: 20 })}  value={user.email || ''} />

                    <label> Address: </label>
                    <input {...register("address", { required: true, maxLength: 20 })} />
                    <label> contact number: </label>
                    <input type="number"  {...register("phone", { required: true, maxLength: 20 })}  />

                    
                    <input type="submit" />
                </form>
            </div>


            <button className="btn-success px-3 py-2" onClick={handleClick}>Go back</button>
        </div>
    );
};

export default MealDetail;