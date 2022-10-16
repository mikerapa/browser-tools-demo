import React, { useState } from "react";


const MemoryExample = () => {
    // const times:Array<Date>=[]
    const [timeStamps, setTimeStamps] = useState<Array<Date>>([])
    const addTimeStamp = () =>{
        let newT = [...timeStamps, new Date()]
        setTimeStamps(newT)
    }


    return (
        <>
            <h2>Memory Example</h2>
            <div><label>record count {timeStamps.length}</label></div>
            <div><button onClick={addTimeStamp}>Add Value to Array</button></div>
            {/* <button onClick={()=>{times.push(new Date)}}>Add 2</button> */}
        </>
    )

}

export default MemoryExample;