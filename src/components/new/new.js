import React from 'react';
import new1 from '../../assets/img/image 6.png'
import new2 from "../../assets/img/image 5.png"
import new3 from "../../assets/img/image 7.png"
const New = () => {
    return (
   <div id="new">
       <div className='container'>
           <div className='new'>
               <div className='new--title'>
                   <h1>New Books</h1>
               </div>
               <div className='new--cards'>
                   <div className='new--cards__card'>
                       <img src={new1} alt=""/>
                       <h4>The Climate Book: <br/> The Facts and the <br/> Solutions</h4>
                       <p>by Greta Thunberg</p>
                   </div>
                   <div className='new--cards__card2'>
                       <img src={new2} alt=""/>
                       <h4>Rest Is Resistance: <br/> A Manifesto</h4>
                       <p>by Tricia Hersey</p>
                   </div>
                   <div className='new--cards__card3'>
                       <img src={new3} alt=""/>
                       <h4>A New Name: <br/> Septology VI-VII</h4>
                       <p>by Jon Fosse</p>
                   </div>
               </div>
           </div>
       </div>
   </div>
       );

};
export default New;