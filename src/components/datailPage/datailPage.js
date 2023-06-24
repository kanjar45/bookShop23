import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Data from "../data";
import {AiOutlineHeart, AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {BiShareAlt} from "react-icons/bi";
const DetailPage = () => {
    const [books,setBooks]=useState({})

    const {id}=useParams();

    useEffect(()=>{
setBooks(Data[id-1])
    },[id])
    return (
        <div id="cards">
        <div className="container">
            <div className="cards">
                <div className="cards--img">
                    <img src={books.image} alt=""/>
                </div>
                <div className="cards--title">
<div className="cards--title__top">

        <h3>{books.title}</h3>
       <div className="cards--title__top--icons">
           <AiOutlineHeart/>
           <BiShareAlt style={{marginLeft:"10px"}}/>
       </div>
</div>
                    <div className="cards--title__center">
                        <p>{books.subtitle}</p>
                        <h2>$ {books.price}</h2>
                    </div>
                    <div className="cards--title__bottom">
                        <button className="cards--title__bottom--btn">Add to Cart </button>
                            <button className="cards--title__bottom--btn2">
                                <AiOutlineMinus className="icon"/> <h5>1</h5> <AiOutlinePlus className="icon"/>
                            </button>

                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default DetailPage;