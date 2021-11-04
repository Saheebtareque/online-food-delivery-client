import React from 'react';
import { useHistory, useParams } from 'react-router';

const MealDetail = () => {
    const {mealId} = useParams();
    const history = useHistory();
    const handleClick = () => {
        history.push('/home');
    }
    return (
        <div>
              <h1>Meals's Id: {mealId} </h1>
            <h1>Don't hesitate to buy this meal!!</h1>
            <button className="btn-success px-3 py-2" onClick={handleClick}>Go back</button>
        </div>
    );
};

export default MealDetail;