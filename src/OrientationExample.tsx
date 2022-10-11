import React,{useState, useEffect} from "react";

    const getScreenOrientationData=():[angle:number, type:string, height:number, width:number]=>{
        return ([window.screen.orientation.angle ,window.screen.orientation.type.toString(), window.screen.height, window.screen.width ] )

    }

    const getScreenOrientationString=():string => {
        const [angle, type, height, width] = getScreenOrientationData()
        return (
            `Angle: ${angle}, Orientation: ${type}, Height: ${height}, Width: ${width}`
        )
    }

const OrientationExample:React.FC = () => {
    const [orientation, setOrientation] = useState<string>('')




    useEffect(() => {
      const timer = setInterval(()=>{setOrientation(getScreenOrientationString)}, 1000)
    
      return () => {clearInterval(timer)}
    })
    

        return(
            <>
                <h2>Orientation Example</h2>
                <p className="Explain">This example displays the device orientation and screen dimensions as
reported by the browser. To exercise this example, activate the device toolbar in the 
browser development tool. Change the dimensions and orientation of the simulated device 
and notice the values changing.</p>
                <label className="Counter" key="counter">{orientation}</label>
            </>
        )

}

export default OrientationExample;