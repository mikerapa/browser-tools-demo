import React,{useState, useEffect} from "react";


const LocationExample:React.FC = () => {
    const [location, setLocation] = useState<string>('')




    useEffect(() => {
      const timer = setInterval(()=>{setLocation(Intl.DateTimeFormat().resolvedOptions().timeZone)}, 1000)
    
      return () => {clearInterval(timer)}
    })
    

        return(
            <>
                <h2>Location/Timezone Example</h2>
                <p className="Explain">This example shows the device location as reported by the browser.
                Change the browser location in the Sensors panel of the browser development tools. The 
                value displayed is the timezone name. </p>
                <label className="Counter" key="counter">{location}</label>
            </>
        )

}

export default LocationExample;