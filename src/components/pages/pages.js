import React from 'react';
import Scrollable from "../slider/slider";
import About from "../aboutUs/about";
import Hero from "../hero/hero";
import Data from "../data";
import New from "../new/new";

import Genres from "../genres/genres";


const Pages = () => {
    return (
        <div>
            <Hero/>
            <Genres/>
            <New/>


            <div className='containerScroll'>
                <Scrollable _class='data'>
                    {
                        Data.map((el) => {
                            return <div key={el.id} style={{
                                borderRadius: '10px',
                                minWidth: '220px !important',
                                marginLeft: '20px',
                            }}>
                                <img style={{
                                    width: '350px',
                                    borderRadius: '40px'
                                }} src={el.image} alt="img"/>
                                <h3 style={{
                                    fontFamily: 'Public Sans',
                                    fontSize: '18px',
                                    fontWeight: '700'
                                }}>{el.title}</h3>
                                <p style={{
                                    fontFamily: 'Puplic Snas',
                                    fontWeight: '400',
                                    fontSize: '16px'
                                }}>{el.subtitle}</p>
                                <p>{el.price}</p>
                            </div>
                        })
                    }
                </Scrollable>
                </div>
                <About/>


        </div>
    );
};

export default Pages;