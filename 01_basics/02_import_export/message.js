// import & export - In html file 'type' must be 'module'.
//              <script type="module" src="script.js"></script>

// there are 2 type of import-export is used in React js.
                // 1.*default export* - 

// Ex1-
var a = "hello rahul, how are you?";
export default a;

// Ex2-
// var b = "I am Ayush, I am a React Developer.";
// export default b;   //Error, because 👇

// *NOTE* - because only one default export is allowed in a File.

// -----------------------------------------------------------------------------------

            // 2.*Named Export* - must use {}.
//Ex1.
var name = "Ayush";
export {name};

// Ex2.
var userName = "Raj kumar";
var userId = 12345;
var age = 24;
export {userName, userId, age};

// Ex3. 
var add = (a,b) => a + b;
var sub = (a,b) => a - b;
export {add, sub};

