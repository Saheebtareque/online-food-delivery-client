import React from 'react';
import banner from '../../../images/banner.jpg'

const Banner = () => {
    return (
        <div>
            <img style={{ width: '100%' }} className="rounded" src={banner} alt="" />
        </div>
    );
};

export default Banner;