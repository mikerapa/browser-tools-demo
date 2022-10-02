
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
    // This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
    var indexedDB = window.indexedDB// || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

    // Open (or create) the database
    var open = indexedDB.open("MyDatabase", 1);

    // Create the schema
    open.onupgradeneeded = function() {
        var db = open.result;
        var store = db.createObjectStore("MyObjectStore", {keyPath: "id"});
        var index = store.createIndex("NameIndex", ["name.last", "name.first"]);
    };

    open.onsuccess = function() {
        // Start a new transaction
        var db = open.result;
        var tx = db.transaction("MyObjectStore", "readwrite");
        var store = tx.objectStore("MyObjectStore");
        var index = store.index("NameIndex");

        // Add some data
        store.put({id: 12345, name: {first: "John", last: "Doe"}, age: 42});
        store.put({id: 67890, name: {first: "Bob", last: "Smith"}, age: 35});
        
        // Query the data
        var getJohn = store.get(12345);
        var getBob = index.get(["Smith", "Bob"]);

        getJohn.onsuccess = function() {
            console.log(getJohn.result.name.first);  // => "John"
        };

        getBob.onsuccess = function() {
            console.log(getBob.result.name.first);   // => "Bob"
        };

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