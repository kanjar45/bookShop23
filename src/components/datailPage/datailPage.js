import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Data from "../data";
import {AiFillHeart, AiOutlineHeart, AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {BiShareAlt} from "react-icons/bi";

import Modal from "../pages/modal/modal";

const DetailPage = () => {
    const [books, setBooks] = useState({})
    const [quantity, setQuantity] = useState(1)
    const card = JSON.parse(localStorage.getItem("card")) || []
    const [modal, setModal] = useState(false)
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
    const addToBasket = (books) => {
        const card = JSON.parse(localStorage.getItem("card")) || []
        const add = card.find(el => el.id === books.id)
        if (add) {
            return card
        } else {
            card.push(books)
        }
        localStorage.setItem("card", JSON.stringify(card))
        return card
    }
    return (
        <div id="cards" >
            <div className="container">
                <div className="cards">
                    <div className="cards--img">
                        <img src={books.image} alt=""/>
                    </div>
                    <div className="cards--title">
                        <div className="cards--title__top">
                            <div className="cards--title__top--text">
                                <h3>{books.title}</h3>
                                <p>by{books.author}</p>
                            </div>

                            <div className="cards--title__top--icons">
                                {
                                    !like ?
                                        <AiOutlineHeart onClick={liked} className="cards--title__top--icons__heart"/>
                                        :
                                        <AiFillHeart onClick={liked} style={{color: "#ec2727"}}
                                                     className="cards--title__top--icons__heart"/>
                                }
                                <BiShareAlt className="cards--title__top--icons__share" onClick={() => {
                                    setModal(!modal)
                                }}/>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid iusto magnam officia
                            repellat ullam unde?</p>
                        <h1>$ {books.price * quantity}</h1>

                        <div className="cards--title__bottom">
                            <button className="cards--title__bottom--btn" onClick={() => {
                                addToBasket(books)
                                console.log(card)
                            }}>Add to Cart
                            </button>
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
            {modal &&

                <Modal modal={()=>{
                setModal(false)}
                }/>
            }
        </div>
    );
};

export default DetailPage;
