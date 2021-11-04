import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.jpg'
const Notfound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={notfound} alt="" />
            <Link to="/"><button type="button" className="btn btn-success mx-3 my-5">Go back</button>
            </Link>
        </div>
    );
};

export default Notfound;