# Browser Tools Demo
This sample application is intended to accompany a demonstration of the browser debugging tools. 


## Running the sample application

In the project directory, you can run:

```npm start```


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Note: The IndexedDB example in the Storage section will only work in browsers which use the chromium engine, such as Chrome, Vivaldi, Edge and Brave.

Once the application is running, refer to the following section to excersize features and show the corresponding tools in the browser's debugging console. 

## Storage Examples
This portion of the applicaiton is intended to be used with the 'Application' tab of the browser tools. 

### Local Storage
Add a value and click the 'Save' button. In the browser inspection tools, navigate to the Application tab and click on the Local Storage section on the left panel. 

This sample uses the following api. 

```localStorage.setItem(key: string, value: string): void```

See [Chrome developer documentation on Local Storage](https://developer.chrome.com/docs/devtools/storage/localstorage/) for details about using the Local Storage panel.


### Session Storage
Add a value and click the 'Save' button. In the browser inspection tools, navigate to the Application tab and click on the Session Storage section on the left panel. 

This samaple uses the following api:

```sessionStorage.setItem(key: string, value: string): void```

See [Chrome developer documentation on Session Storage](https://developer.chrome.com/docs/devtools/storage/sessionstorage/) for details about using the Session Storage panel.

### Cookies
Add a name and value, then click the 'Save' button. In the browser inspection tools, navigate to the Application tab and click on the Cookies section on the left panel. This example uses `document.cookie` for setting the cookie value. 

See [Chrome developer documentation on cookie managment](https://developer.chrome.com/docs/devtools/storage/cookies/) for details about using the Session Storage panel.

### IndexedDB Storage
Add a name and value, then click the 'Save' button. In the browser inspection tools, navigate to the Application tab and click on the IndexedDB section on the left panel.

See [Chrome developer documentation on IndexedDB managment](https://developer.chrome.com/docs/devtools/storage/indexeddb/) for details about using the IndexedDB managment panel. 