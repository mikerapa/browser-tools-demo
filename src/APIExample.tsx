import React, { useState } from "react"

interface User {
    name:string
    userName:string
    email:string
    id:number
}

const getUsers = (setFn:React.Dispatch<React.SetStateAction<Array<User>>>) =>{
    console.log(`getting user data`)
    window.fetch('https://jsonplaceholder.typicode.com/users')
    .then((result)=>result.json())
    .then((result)=>{
        // const obj = JSON.parse(result);
        //console.log(result[1].name);
        setFn(result)
        console.log(`done setting the userData`)
    })
}

const APIExample = () => {

    const [userData, setUserData] = useState<Array<User>>([])
    // console.log(userData[1]['name'])
    return (
        <>
            <h2>API Example</h2>
            <p className="Explain">Clicking the 'Get User List' button below calls an 
            external REST API to retrieve fake user data. The user data is displayed as 
            a list beneath the button. Use this to demonstrate a service call in the 
            Networking tab.</p>
            <button onClick={()=>getUsers(setUserData)}>Get User List</button>
            <ul>
                {userData.map((u:User)=><li key={u.id}>{u.name} (<i>{u.email}</i>)</li>)}
            </ul>
        </>
    )
}

export default APIExample;