 import React from 'react'
 import Data from "../data";
 import Slider from "react-slick";

 const Scrollable = () =>{
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return(
<section id="slider">
    <div className='container'>
        <div className="slider">
            <h1>Books</h1>
            <div className="slider--cards">
               <Slider {...settings}>
               {
                   Data.map((el) => {
                       return <div key={el.id} className="slider--cards__card">
                           <img src={el.image} alt="img"/>
                           <h3>{el.title}</h3>
                           <p>by {el.author}</p>
                       </div>
                   })
               }
               </Slider>
           </div>

        </div>

    </div>
</section>

    )
}

export default Scrollable