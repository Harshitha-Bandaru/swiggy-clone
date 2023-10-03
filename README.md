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

Pattern of tests folder/files --> testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x)


Create my first test
1. Make a folder inside components called "__tests__"
    (Fun Fact: '__' this is called 'dunder')
2. Inside "__tests__", create a file in the format filename.test.js
3. How to write a test case?
    --> All testcases expect something - assertion
    test("test case name",()=>{
        // A function which tests
    })

Try running the test case,
1.  SyntaxError: Cannot use import statement outside a module
    One more time we got this error, we used type="module" in index.html for referring app.js
    Normal js doesn't understand the import statement. How will I make sure that, jest understands this import. 
2. We need to take help of Babel in this.It is a transpiler
   Babel makes sures that jest understands import, because you are writing ES6.
   Babel's job - take some code, modify it.
   ---> npm install --save-dev babel-jest @babel/core @babel/preset-env
   We used .babelrc to configure babel for removing console.log statements. So, let's use that instead of babel.config.js(as in the docs). babelrc requires a json
3. Difference b/w JSON and javascript object?
4. Babel requires JSON for configuration.JSON takes double quotes
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


