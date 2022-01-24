import React from 'react'
import './index.css'

const Dropdown = ({title, items}) => {

    return(
        <div className='dropdown-container'>
            <div className='dropdown-title'>
                {title}
            </div>
            <div className='dropdown-list'>
                {items.map((item)=><div>
                    {item}
                </div>)}
            </div> 
        </div>
    )
}

export default Dropdown