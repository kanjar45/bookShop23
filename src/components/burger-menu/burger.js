import React from 'react';
import {FaBookBookmark} from "react-icons/fa6";
import {FaBook, FaBookMedical} from "react-icons/fa";
import {ImBook} from "react-icons/im";


const Burger = () => {
    return (
        <div id='menu'>
            <div className='container'>
                <div className='menu'>
                    <div className='all'>
                        <div className='categories'>
                            <FaBookBookmark className="icon"/>
                            <p>Genres</p>
                        </div>
                        <div className='categories'>
                            <FaBook className='icon'/>
                            <p>New</p>
                        </div>
                        <div className='categories'>
                            <FaBookMedical className='icon'/>
                            <p>Books</p>
                        </div>
                        <div className='categories'>
                            <ImBook className='icon'/>
                            <p>About</p>
                        </div>
                    </div>
                    <div className='decor'></div>
                </div>
            </div>
        </div>
    );
};

export default Burger;