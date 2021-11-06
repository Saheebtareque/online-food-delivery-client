import React from 'react';
import { useForm } from "react-hook-form";
import './AddNew.css'

const AddNew = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);

        fetch('http://localhost:5000/meals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    alert('New Meal Inserted ');
                    reset();
                }
            })
    }
    return (
        <div className="add-meal my-5">
            <h1 className="my-5"> Please add a new meal:</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name of the meal" />
                <input {...register("img")} placeholder="image url of meal" />
                <input type="number" {...register("price")} placeholder="price" />
                <textarea {...register("description")} placeholder="Description of the meal" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddNew;