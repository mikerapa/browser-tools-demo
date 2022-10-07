import React from "react";


const ConsoleExample = () => {

    const timeExample = () => {
        console.time('Important Work')
        for (let i:number=0;i<10000;i++){
            let h=i*i;
        }
        console.timeEnd('Important Work')
    }

    const countExample= () => {
        const colorList = ['green', 'blue', 'yellow', 'black', 'orange', 'purple', 'pink']
        const randomInt = (max:number) => {return Math.floor(Math.random() * (max + 1));}

        const randomSelect = (a:Array<any>) => {return a[randomInt(a.length-1)]}
        for (let i:number=0;i<10;i++){
            console.count(randomSelect(colorList));
        }
    }

    const tableExample = () => {
        const cities = [
            {'city': 'New York', 'population': '8,467,513'},
            {'city': 'Los Angeles', 'population': '3,849,297'},
            {'city': 'Chicago', 'population': '2,696,555'},
            {'city': 'Houston', 'population': '2,288,250'},
            {'city': 'Phoenix', 'population': '1,624,569'},
            {'city': 'Philadelphia', 'population': '1,576,251'},

        ]
        console.table(cities)
    }

    const assertExample = () =>{
        console.assert(false, 'This is your assert message')
        console.assert(true, 'This assert message will not be displayed')
    }

    const groupExample = () => {
        console.group('Group one')
        console.log('Data 1')
        console.log('Data 2')
        console.groupEnd()
        console.group('Group two')
        console.log('Data 1')
        console.log('Data 2')
        console.groupEnd()
        
    }

    return (
        <>
            <h2>Console Examples</h2>
            <p className="Explain">These buttons exercise the console.time, console.count, console.table,
            console.group and console.assert 
            functions. Observe the output in the Console tab of the dev tools. Refer to the 
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/console"> console documentation</a>
            for more information. </p>
            <button onClick={timeExample}>Time</button>        
            <button onClick={countExample}>Count</button>
            <button onClick={tableExample}>Table</button>
            <button onClick={assertExample}>Assert</button>
            <button onClick={groupExample}>Group</button>
        </>
    )
}

export default ConsoleExample;