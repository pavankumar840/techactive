import React from 'react'
import './assets/css/rating.css'

function Rating() {
    
    return (
        <div className="mt-5">
            <div className="bg_block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Maecenas pellentesque eu enim eget luctus. Sed augue felis, 
            facilisis et elementum vitae, aliquam sit amet ante. Sed iaculis eros sem, 
            elementum consequat est consequat eu. Quisque aliquet a ipsum nec tincidunt. 
            Nulla vitae rhoncus leo. Praesent dui sapien, bibendum quis tempus dictum.
            </div>
            <div className="d-flex black_dot">
                <span></span>
            </div>
            <div className="text-center">
                <p className="m-0"><b>Edward M. Brooks</b></p>
                <p className="m-0">Marketing House</p>
                <p>&#9733; &#9733; &#9733; &#9733; &#9733;</p>
            </div>
        </div>
    )
}

export default Rating
