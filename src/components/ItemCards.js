import React from 'react';

export default(props) =>{
    return(
        <div className=' grid grid-cols-4 gap-3 w-full'>{props.children}</div>
    )
}