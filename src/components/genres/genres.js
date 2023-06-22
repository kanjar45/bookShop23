import React from 'react';
import img8 from '../../assets/img/image 8(0).png'
import img1 from '../../assets/img/image 8(1).png'
import img2 from '../../assets/img/image 8(2).png'
import img3 from '../../assets/img/image 8(3).png'
import img4 from '../../assets/img/image 8(4).png'
import img5 from '../../assets/img/image 8(5).png'
import {NavLink} from "react-router-dom";

const Pages = () => {
    return (
        <div id="genres">
            <div className='container'>
                <div className='genres'>
                    <div className='genres--title'>
                        <h1>Genres</h1>
                        <NavLink to={"/books"} className='p-1'>View all</NavLink>
                    </div>
                    <div className='genres--blocks'>
                        <div className='genres--blocks__block'>
                            <img src={img8} alt=""/>
                            <NavLink to={"/books"} className="p">Sci-Fi</NavLink>
                        </div>
                        <div className='genres--blocks__block'>
                            <img src={img1} alt=""/>
                            <NavLink to={"/books"} className="p">For kids</NavLink>
                        </div>
                        <div className='genres--blocks__block'>
                            <img src={img2} alt=""/>
                            <NavLink to={"/books"} className="p">Psychology</NavLink>
                        </div>
                        <div className='genres--blocks__block'>
                            <img src={img3} alt=""/>
                            <NavLink to={"/books"} className="p">Romantic</NavLink>
                        </div>
                        <div className='genres--blocks__block'>
                            <img src={img4} alt=""/>
                            <NavLink to={"/books"} className="p">Detective</NavLink>
                        </div>
                        <div className='genres--blocks__block'>
                            <img src={img5} alt=""/>
                            <NavLink to={"/books"} className="p">Finance</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Pages;
