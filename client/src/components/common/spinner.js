import React from 'react'
import Spinner from './spinner.gif'
export default ()=> {
    return (
       <h4>
            <img src={Spinner}
            alt="Loading..."
            style={{width:'auto',margin:'auto',display:'block',
                       position:"absolute",left:"50%",
                       transform:"translateX(-50%)"
                   }}
            />
       </h4>
    )
}
