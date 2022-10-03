
import React, { useState } from 'react'


const storeValueInLocalStorage = (varName: string, value:string) => {
    localStorage.setItem(varName, value)
    console.log(`local storage added: stored ${value} in ${varName}`)
}

const storeValueInSessionStorage = (varName: string, value:string) => {
    sessionStorage.setItem(varName, value)
    console.log(`session storage added: stored ${value} in ${varName}`)
}

const storeValueInCookie = (varName:string, value:string) => {
    document.cookie = `${varName}=${value}`
    console.log(`cookie storage added: stored ${value} in ${varName}`)
}

const storeValueInCache = (varName:string, value:string)=>{
    // TODO This isn't implemented yet
}

const storeValueInIndexDB = (varName:string, value:string)=>{
    
    var indexedDB = window.indexedDB

    // Open (or create) the database
    var open = indexedDB.open("MyDatabase", 1);

    // create index and schema
    open.onupgradeneeded = function() {
        var db = open.result;
        var store = db.createObjectStore("MyObjectStore", {keyPath: "name"});
        var index = store.createIndex("NameIndex", ["name"]);
    };

    open.onsuccess = function() {
        // Start a new transaction
        var db = open.result;
        var tx = db.transaction("MyObjectStore", "readwrite");
        var store = tx.objectStore("MyObjectStore");
        var index = store.index("NameIndex");

        // add name/value
        store.put({name:varName, value:value})

        // Close the db when the transaction is done
        tx.oncomplete = function() {
            db.close();
        };
    }

    console.log(`indexedDB storage added: stored ${value} in ${varName}`)
}

const StorageExample = () => {
    const [localStorage1InputValue, setLocalStorage1InputValue] = useState('')
     
    return (<>
        <h2>Storage Examples</h2>
        <h3>Local Storage</h3>
        <StorageInput defaultVarName="localStorage1" storageFn={storeValueInLocalStorage}></StorageInput>
        <h3>Session Storage</h3>
        <StorageInput defaultVarName='sessionStorage1' storageFn={storeValueInSessionStorage}></StorageInput>
        <h3>Cookie Storage</h3>
        <StorageInput defaultVarName='cookieStorage1' storageFn={storeValueInCookie}></StorageInput>
        <h3>IndexedDB Storage</h3>
        <StorageInput defaultVarName='indexedDBStorage1' storageFn={storeValueInIndexDB}></StorageInput>
    </>
    
    )
 }

 interface storageInputProps{
    defaultVarName:string
    storageFn:(varName:string, inputValue:string)=>void
 }

 const StorageInput:React.FC<storageInputProps> = ({defaultVarName, storageFn}) => {
    const [inputValue, setInputValue] = useState<string>('')
    const [varName, setVarName] = useState(defaultVarName)
    return (
        <>
            <label>key</label>
            <input value={varName} onChange={(e)=>setVarName(e.target.value)} />
            <label>value</label>
            <input onChange={(e)=>setInputValue(e.target.value)}></input>
            <button onClick={()=>storageFn(varName, inputValue)}>Save</button>

         </>
    )
    
 }


 export default StorageExample;