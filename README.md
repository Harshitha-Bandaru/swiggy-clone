# Savoury

[Savoury!](https://swiggy-clone-pc5l-harshitha-bandaru.vercel.app/)

Testing Setup

1. Install react testing library
   npm install --save-dev @testing-library/react
2. Install jest
   npm i -D jest
3. Configure Jest
   npx jest --init
   why use npx --> you just need to execute it once, to create the config file.
   npm init jest@latest -- for latest version of jest
   test environment - jsdom (browser-like)
   provider to instrument code for coverage - babel
   Automatically clear mock calls, instances, contexts and results before every test? y
   This creates jest.config.js file

How do you run the testcases?
In package.json,
"scripts": {
"test": "jest",
},
---> Command : npm run test

Now, if you run "npm run test", a lot of errors will come, let's try to fix them.

1. As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.
   npm i -D jest-environment-jsdom
   Now, everything is fixed

Pattern of tests folder/files --> testMatch: **/**tests**/**/_.[jt]s?(x), \*\*/?(_.)+(spec|test).[tj]s?(x)

Create my first test

1. Make a folder inside components called "**tests**"
   (Fun Fact: '\_\_' this is called 'dunder')
2. Inside "**tests**", create a file in the format filename.test.js
3. How to write a test case?
   --> All testcases expect something - assertion
   test("test case name",()=>{
   // A function which tests
   })

Try running the test case,

1.  SyntaxError: Cannot use import statement outside a module
    One more time we got this error, we used type="module" in index.html for referring app.js
    Normal js doesn't understand the import statement. How will I make sure that, jest understands this import.
2.  We need to take help of Babel in this.It is a transpiler
    Babel makes sures that jest understands import, because you are writing ES6.
    Babel's job - take some code, modify it.
    ---> npm install --save-dev babel-jest @babel/core @babel/preset-env
    We used .babelrc to configure babel for removing console.log statements. So, let's use that instead of babel.config.js(as in the docs). babelrc requires a json
3.  Difference b/w JSON and javascript object?
4.  Babel requires JSON for configuration.JSON takes double quotes
    babel.config.js-->module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
    };
    babel.rc --> {
    "presets": [["@babel/preset-env", {"targets": {"node": "current"}}]]
    }
    Everything is configured for testing now!!!

Testing doesn't require running your app.
Are these tests running on our browser? NOOO. So, our tests run in a different environment, i.e., jest. It's not rendering in our browser.
That's the reason, browser could've understood import, but our tests are not running in browser.
We've configured our test environment as jsdom, which is having some browser functionality.

Rendering our header

1. test("Logo should load on rendering header.",()=>{
   const header = render(<Header/>);
   console.log(header);
   })
   --> SyntaxError: Support for the experimental syntax 'jsx' isn't currently enabled.
   To resolve this,
   {
   "presets": [
   ["@babel/preset-env", { "targets": { "node": "current" } }], // this array is for import
   ["@babel/preset-react", { "runtime": "automatic" }] // this is for recognizing jsx syntax.
   ]
   }
   Also, install the dependency --> npm i -D @babel/preset-react
   Again, try to run tests
   --> Failed to run, image is not recognized by jsdom. It is trying to read img as js.
   When something breaks, When jest doesn't understand something, We have to create a workaround, we have to create a mock around it.
   So, src->mocks->dummyImage.js->export default "dummyImage.png";
   How will my code get to know that we will use dummy.png?
   Jest will help us. In the jest config, add this config,
   moduleNameMapper: {
   "\\.png": "./mocks/dummyImage.js",
   },
   -->By doing like this, we will inform jest that wherever it sees png, use dummyImage.js
   Now again, if we try to run our tests,we will get the following error,
   Error: Uncaught [Error: could not find react-redux context value; please ensure the component is wrapped in a <Provider>]
   So, we can wrap the header component inside <Provider>
   Why can't we mock the provider? No, We will create the actual store.
   Now, this provider has to provide something, i.e., store
   Now, if we run again, it fails, because it doesn't know how to parse <link>
   so, remember, we used, createBrowserRouter, but this doesn't work as we are not using browser. So, import StaticRouter from react-router-dom/server.
   ->import { StaticRouter } from "react-router-dom/server".
   so, finally, wrap it inside <StaticRouter>
   Now, if you run the test cases, passes
   Let'see what's there in the console --->VirtualDOM
   -->Now, how to check if logo is present in Header or not.
   Similar to how browser understands id, jest understands "data-testid"

Search.test.js
--> jsdom doesn't understand fetch
That is a super power given by browser.
So, we have to mock our API call.
We don't have network access in our test environment. We can ideally, but we don't have to. We can use mocks
How to mock our fetch, there is something known as global.fetch and we'll use a dummy function given to us by jest ---> global.fetch = jest.fn();
What does fetch do in general? --> It returns us a promise.Fetch returns us a readable stream.
There can be two cases, resolving our API, rejecting our API.
Right now, we are resolving with json data.
When API returns readable stream, we convert it into json, while doing so we have to wait, because it returns a promise.
Now, we have to mock the data, that is pass the data, that is present in response of network call

It is painful to run npm run test again and again. Jest gives us out-of-box support for hmr(hot module replacement)
"watch-test":"jest --watch"
Now, do, npm run watch-test, it will keep running, keep watching
toBeInTheDocument comes from
.innerHTML

//Restaurants should load on Home page
Now, how do we avoid shimmer
I will wait till my search button loads on page
await waitFor - given by react testing library
