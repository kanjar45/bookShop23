import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Data from "../data"
const Search = () => {
    const [result,setResult]=useState([])
    const{booksName}=useParams()



    useEffect(()=>{
        setResult(   Data.filter((el)=>{
            if( el.title.toLowerCase()===booksName.toLowerCase()){
                return el
            }
        })[0])
    },[])
    console.log(result)
    return (
        <div style={{
            margin:"150px"
        }}>
            <img src={result.image} alt=""/>
            <h2>{result.title}</h2>
            <p>by {result.author}</p>
        </div>
    );
};

export default Search;