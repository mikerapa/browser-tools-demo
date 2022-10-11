import React from "react";
import './App.css'
import logo from './TechBash2022.png'


const AnimationExample = () => {

    return (
        <>
            <h2>Animation Example</h2>
            <p className="Explain">This example shows a basic CSS animation. Navigate to the Animation tab
            in the browser tools to examine the details. You will also see an animation for the logo at 
            the top of this page.</p>
            <img src={logo} className="TBLogo" alt="logo" />
            
        </>

    )

}

export default AnimationExample;