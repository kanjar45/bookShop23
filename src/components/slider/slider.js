import React, {useState,useEffect,useRef} from 'react'

const Scrollable = props =>{

    return(
<div>
    <div className='container'>
        <h1>Books</h1>
    </div>
    <div className={props._class}>
        {
            React.Children.map(props.children, child =>React.Children.only(child))
        }

    </div>
</div>

    )
}

export default Scrollable