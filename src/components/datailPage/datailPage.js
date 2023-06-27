import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Data from "../data";
import {AiFillHeart, AiFillTwitterCircle, AiOutlineHeart, AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {BiShareAlt} from "react-icons/bi";
import {BsFacebook, BsInstagram} from "react-icons/bs";
import {SiWhatsapp} from "react-icons/si";

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
          return  [...card]
        } else {
           card.push(books)
        }
        localStorage.setItem("card", JSON.stringify(card))
        return card
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
                            <div>
                                <h3>{books.title}</h3>
                                <p>by{books.author}</p>
                            </div>

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
                                <BiShareAlt onClick={() => {
                                    setModal(!modal)
                                }} style={{marginLeft: "10px"}}/>
                            </div>
                        </div>
                        {
                            modal &&
                            <div className="cards--title__modal">
                                <h5>General access</h5>
                                <div className="cards--title__modal--icons">
                                    <div>
                                        <a href="https://www.instagram.com/direct/inbox/">
                                            <BsInstagram className="icon1 icon"/>
                                        </a>
                                        <p>Instagram</p>
                                    </div>
                                    <div>
                                        <a href="https://www.facebook.com/">
                                            <BsFacebook className="icon2 icon"/>
                                        </a>
                                        <p>Facebook</p>
                                    </div>
                                    <div>
                                        <a href="https://twitter.com/">
                                            <AiFillTwitterCircle className="icon3 icon"/>
                                        </a>

                                        <p>Twitter</p>
                                    </div>
                                    <div>
                                        <a href="https://web.whatsapp.com/">
                                            <SiWhatsapp className="icon4 icon"/>
                                        </a>

                                        <p>WhatsApp</p>
                                    </div>
                                </div>
                            </div>

                        }
                        <div className="cards--title__center">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid iusto magnam officia
                                repellat ullam unde?</p>
                            <h1>$ {books.price * quantity}</h1>
                        </div>
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
        </div>
    );
};

export default DetailPage;
