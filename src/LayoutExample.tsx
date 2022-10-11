import React from "react";
import './App.css'

const LayoutExample = () => {

    return (
        <>
            <h2>Layout Example</h2>
            <p className="Explain">This example includes two nested rectangles for which the dimensions are defined by CSS. Go to the Styles panel
in the Elements tab of the browser dev tools to see the CSS responsible for the width. Uncheck some of the CSS
properties to see the changes made to the layout.
</p>
            <div className='Box1 Box'>
                <div className='Box2 Box'>
                Inside
                </div>
            </div>
        </>

    )

}

export default LayoutExample;