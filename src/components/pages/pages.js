import React from 'react';
import Scrollable from "../slider/slider";
import About from "../aboutUs/about";
import Hero from "../hero/hero";
import New from "../new/new";

import Genres from "../genres/genres";


const Pages = () => {
    return (
        <div>
            <Hero/>
            <Genres/>
            <New/>
            <Scrollable/>
            <About/>


        </div>
    );
};

export default Pages;