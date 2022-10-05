import React,{useState, useEffect} from "react";



const ElementChangeExample:React.FC = () => {
    const [counter, setCounter] = useState<number>(0)


    useEffect(() => {
      const timer = setInterval(()=>{setCounter(counter+1)}, 1000)
    
      return () => {clearInterval(timer)}
    })
    

        return(
            <>
                <h2>Element Change Example</h2>
                <p className="Explain">This example increments a timer every second. In the sources
                tab, navigate to the counter. Right-click on the element and select Break on-{`>`} 
                Subtree modifications. The debugger should break on the javascript code which initiated 
                the change to the element. Use the call stack to find the code which contains the setInterval
                function call. </p>
                <label className="Counter" key="counter">{counter.toString()}</label>
            </>
        )

}

export default ElementChangeExample;