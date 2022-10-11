# Browser Tools Demo
This sample application is intended to accompany a demonstration of the browser debugging tools. 


## Running the sample application

In the project directory, you can run:

```npm start```


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Note: The IndexedDB example in the Storage section will only work in browsers which use the chromium engine, such as Chrome, Vivaldi, Edge and Brave.

Once the application is running, refer to the following section to excersize features and show the corresponding tools in the browser's debugging console. 

## Layout Example
This example includes two nested rectangles for which the dimensions are defined by CSS. Go to the Styles panel
in the Elements tab of the browser dev tools to see the CSS responsible for the width. Uncheck some of the CSS
properties to see the changes made to the layout.


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

## API Example
This portion of the application is used to demonstrate a call to REST service. Click the 'Get User List' button and see values populate below the button. 

Navigate to the Network tab in the browser's inspection tools. View each instance of the API call when the button is clicked. The data returned is fake user data from [here](https://jsonplaceholder.typicode.com/users).

## Animations
The TechBash logo rocks back and forth with a simple CSS animation. The logo at the top of the page 
is also an animation. Navigate to the Animations tab in your browser dev tools to inspect the details. 
The documentation for this panel can be found on the [Chrome developer documentation site](https://developer.chrome.com/docs/devtools/css/animations/).

## Orientation and dimensions
This example displays the device orientation and screen dimensions as
reported by the browser. To exercise this example, activate the device toolbar in the 
browser development tool. Change the dimensions and orientation of the simulated device 
and notice the values changing.

## Location
This example shows the device location as reported by the browser.
                Change the browser location in the Sensors panel of the browser development tools. The 
                value displayed is the timezone name. This example executes 
`Intl.DateTimeFormat().resolvedOptions().timeZone` in JavaScript to retrieve the value. 


# Framework/Library Specific Tooling
Developers using Angular or ReactJS should consider using the following extensions to ease component
inspection. 

[React Developer Tools extension for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

[Angular State Inspector](https://chrome.google.com/webstore/detail/angular-state-inspector/nelkodgfpddgpdbcjinaaalphkfffbem)