import React from 'react';
import Banner from './Banner/Banner';
import Faqs from './Faqs/Faqs';
import Subscribe from './Subscribe/Subscribe';

const Home = () => {
    return (
        <div className="mx-2 my-5">
            <Banner> </Banner>
            <Subscribe> </Subscribe>
            <Faqs></Faqs>
        </div>
    );
};

export default Home;