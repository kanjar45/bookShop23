import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Data from "../data";
import {AiFillHeart, AiOutlineHeart, AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {BiShareAlt} from "react-icons/bi";

const DetailPage = () => {
    const [books, setBooks] = useState({})
    const [quantity, setQuantity] = useState(1)
    const {id} = useParams();
    const [like, setLike] = useState(false)
    const liked = () => {
        setLike(!like)
    }

    useEffect(() => {
        setBooks(Data[id - 1])

    }, [id])

    const addQuantity = () => {
        setQuantity(quantity + 1)
    }
    const deleteQuantity = () => {
        setQuantity(quantity > 1 ? quantity - 1 : quantity)
    }
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
                                {
                                    !like ? <AiOutlineHeart onClick={() => {
                                        liked()
                                    }
                                    }/> : <AiFillHeart style={{color: "rgba(243, 51, 51, 0.97)"}} onClick={() => {
                                        liked()
                                    }
                                    }/>
                                }
                                <BiShareAlt style={{marginLeft: "10px"}}/>
                            </div>
                        </div>
                        <div className="cards--title__center">
                            <p>{books.subtitle}</p>
                            <h2>$ {books.price *quantity}</h2>
                        </div>
                        <div className="cards--title__bottom">
                            <button className="cards--title__bottom--btn">Add to Cart</button>
                            <button className="cards--title__bottom--btn2">
                                <AiOutlineMinus className="icon" style={{
                                    color: quantity === 1 ? "grey" : ""
                                }} onClick={deleteQuantity}/> <h5>{quantity}</h5>
                                <AiOutlinePlus className="icon" onClick={addQuantity}/>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
