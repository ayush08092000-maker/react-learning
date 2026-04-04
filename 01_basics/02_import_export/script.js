// 1. Default import - use only onse.
// *Syntax* -         import anyName from "./file.js"

import msg from "./message.js"; // can be import by anyname
console.log(msg);

var a = document.createElement("h1"); // ele created in html
a.innerText = msg;                    
a.style.color = "blue"
document.body.appendChild(a);

// --------------------------------------------------------------------------------

// 2. Named export - can be import multi var using {}. 
//    Syntax -       import {Name1, Name2,...} from "./file.js"

import {name} from "./message.js"; //name of var must be same.
console.log(name);

import {userName, userId, age } from "./message.js";    // multi var can be import at once
console.log("name = "+ userName,"\nId = "+ userId,"age = ",+ age);

import { add as sum, sub} from "./message.js"; // Rename is possible 
console.log(sum(5,4));
console.log(sub(8,3));


// ------------------------ Mixed Import -------------------------------

// Syntax => import msg, { name, age } from "./data.js"; 

console.log(`msg: ${msg} \nname: ${name} \nage : ${age}`);


