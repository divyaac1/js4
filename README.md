# 🔍 Scope in JavaScript

Understanding **Scope** is essential for writing clean and bug-free JavaScript code. This repository contains examples and explanations of different types of scope in JavaScript.

## 📚 What is Scope?

In JavaScript, **scope** refers to the context in which variables are declared and accessed. It determines the **visibility** or **lifetime** of a variable.

There are mainly three types of scope in JavaScript:

1. **Global Scope**
2. **Function/Local Scope**
3. **Block Scope (ES6)**

---

## 📁 Project Structure

javascript-scope/
│
├── globalScope.js # Example for global scope
├── functionScope.js # Example for function/local scope
├── blockScope.js # Example for block scope (let/const)
└── README.md # This file

yaml
Copy
Edit

---

## 🧠 Key Concepts

### 🔸 Global Scope

Variables declared outside any function or block are in the global scope.

```javascript
var globalVar = "I'm global";

function printGlobal() {
  console.log(globalVar); // Accessible
}
🔸 Function Scope
Variables declared with var inside a function are only accessible within that function.

javascript
Copy
Edit
function example() {
  var localVar = "I'm local";
  console.log(localVar); // Accessible here
}
console.log(localVar); // ❌ ReferenceError
🔸 Block Scope (ES6)
let and const provide block-level scoping.

javascript
Copy
Edit
{
  let x = 10;
  const y = 20;
  console.log(x, y); // Accessible here
}
console.log(x, y); // ❌ ReferenceError
🧪 How to Run
Clone the repo and run the files using Node.js:

bash
Copy
Edit
node globalScope.js
node functionScope.js
node blockScope.js
📖 Resources
MDN Web Docs - Scope

JavaScript Info - Scope

🤝 Contributing
Feel free to fork this repo and add more examples, like closure, lexical scope, or hoisting!

