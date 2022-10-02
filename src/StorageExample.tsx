
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


}

const StorageExample = () => {
    const [localStorage1InputValue, setLocalStorage1InputValue] = useState('')
     
    return (<>
        <h3>Local Storage</h3>
        <StorageInput varName="localStorage1" storageFn={storeValueInLocalStorage}></StorageInput>
        <h3>Session Storage</h3>
        <StorageInput varName='sessionStorage1' storageFn={storeValueInSessionStorage}></StorageInput>
        <h3>Cookie Storage</h3>
        <StorageInput varName='cookieStorage1' storageFn={storeValueInCookie}></StorageInput>
        <h3>IndexedDB Storage</h3>
        <StorageInput varName='indexedDBStorage1' storageFn={storeValueInIndexDB}></StorageInput>
    </>
    
    )
 }

 interface storageInputProps{
    varName:string
    storageFn:(varName:string, inputValue:string)=>void
 }

 const StorageInput:React.FC<storageInputProps> = ({varName, storageFn}) => {
    const [inputValue, setInputValue] = useState<string>('')
    
    return (
        <>
            <label>{varName}</label>
            <input onChange={(e)=>setInputValue(e.target.value)}></input>
            <button onClick={()=>storageFn(varName, inputValue)}>Save</button>

         </>
    )
    
 }


 export default StorageExample;