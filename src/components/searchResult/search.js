import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import Data from "../data"

const Search = () => {
    const [result, setResult] = useState([])
    const {booksName} = useParams()

// el.title.split(" ").filter((elem)=>{    //
// if(   elem.toLowerCase()=== booksName.toLowerCase()){
    //         arr= {...el}    //
    //     }    // })

    useEffect(() => {
        setResult(Data.filter((el) => {
            if (el.title.toLowerCase() === booksName.toLowerCase()) {
                return el
            }
        }))
    }, [])
    console.log(result)
    return (
        <div className="search">
            <div className="container">
                <div className="search--cards">
                    {
                        result.length > 0 ?
                                result.map((el) => {
                                    return (
                                        <div key={el.id} className="search--cards__card1">
                                            <div className="search--cards__card1--titles">
                                                <h1>On request "{booksName}"
                                                    found</h1>
                                                <p>{result.length} goods</p>
                                            </div>
                                            <div className="search--cards__card1--img">
                                                <NavLink key={el.id} to={`/books/${el.id}`}>
                                                    <img src={el.image} alt=""/>
                                                </NavLink>
                                            </div>


                                            <div className="search--cards__card1--title">
                                                <h5>{el.title}</h5>
                                                <p>by {el.author}</p>
                                            </div>


                                        </div>

                                    )
                                })
                            :
                            <div className="search--cards__no">
                                <h1>On request "{booksName}"
                                    nothing found</h1>
                            </div>

                    }
                </div>
            </div>
        </div>
    );
};

export default Search;