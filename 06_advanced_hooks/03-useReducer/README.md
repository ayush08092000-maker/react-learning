# 🚀 React useReducer Hook

This folder explains the **useReducer Hook** in React with practical examples.

`useReducer` is used to manage complex state logic inside functional components.

It is an alternative to `useState`, but it is better when:

- State logic becomes complex
- Multiple values depend on each other
- Working with objects and arrays
- Multiple actions are required

---

# 📌 Import

```jsx
import { useReducer } from "react";
```

---

# 🔹 Syntax

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

---

# 📂 Parameters

## state

Stores current data.

Example:

```js
state = {
  count: 0
}
```

---

## dispatch()

`dispatch()` is used to send actions to the reducer function.

Example:

```js
dispatch({
  type: "Increment"
});
```

---

## reducer()

Reducer function contains all state update logic.

It receives:

```js
function reducer(state, action){

}
```

Parameters:

- `state` → current state
- `action` → instruction/data sent by dispatch

Reducer always returns a **new state**.

---

# ⚠️ Important Reducer Rule

Reducer should not directly modify the old state.

Wrong ❌

```js
state.count = state.count + 1;
```

Correct ✅

```js
return {
  count: state.count + 1
}
```

React state should be updated immutably.

---

# 🔄 useReducer Flow

```text
User Action
     |
     ↓
dispatch(action)
     |
     ↓
reducer(state, action)
     |
     ↓
new state returned
     |
     ↓
Component re-render
```

---

# Example 1: Toggle using useReducer

Used for switching between two values.

Examples:

```text
false ↔ true

ON ↔ OFF

Checked ↔ Unchecked
```

Code:

```jsx
const [checked, toggle] = useReducer(
  checked => !checked,
  false
);
```

Explanation:

- checked → current state
- toggle → dispatch function
- false → initial state

When toggle runs:

```text
false → true

true → false
```

---

# Example 2: Counter using useReducer

Initial State:

```js
const initialState = {
  count: 0
};
```

---

Reducer:

```js
function reducer(state, action){

  switch(action.type){

    case "Increment":

      return {
        count: state.count + 1
      };


    case "Decrement":

      return {
        count: state.count - 1
      };


    case "Reset":

      return {
        count: 0
      };


    default:

      return state;

  }

}
```

---

Calling Actions:

```js
dispatch({
  type:"Increment"
});
```

---

# Example 3: Form Handling using useReducer

Initial State:

```js
const initialState = {

  username:"",
  email:"",
  password:"",
  address:""

};
```

---

# Updating Input Fields

Action:

```js
dispatch({

  type:"UPDATE_FIELD",

  field:e.target.name,

  value:e.target.value

});
```

Example action data:

```js
{
  field:"username",
  value:"Ayush"
}
```

---

Reducer:

```js
return {

  ...state,

  [action.field]: action.value

}
```

---

# Spread Operator

```js
...state
```

Keeps old state values.

Example:

Before:

```js
{
 username:"Ayush",
 email:"abc@gmail.com",
 password:"123"
}
```

Changing only email:

Without spread ❌

```js
{
 email:"new@gmail.com"
}
```

Old data is removed.

---

With spread ✅

```js
{
 username:"Ayush",
 email:"new@gmail.com",
 password:"123"
}
```

Old data remains safe.

---

# Dynamic Property Update

```js
[action.field]
```

It selects object property dynamically.

Example:

```js
action.field = "username"
```

Then:

```js
[action.field]: "Ayush"
```

Becomes:

```js
username:"Ayush"
```

---

# 📦 Payload

Payload means extra data sent with action.

Example:

```js
dispatch({

  type:"ADD",

  payload:data

});
```

Explanation:

- type → operation name
- payload → required extra data

---

# 🔄 Reset State

Reducer:

```js
case "RESET":

return initialState;
```

Action:

```js
dispatch({
  type:"RESET"
});
```

---

# ⚔️ useState vs useReducer

| useState | useReducer |
|---|---|
| Simple state | Complex state |
| Direct update | Action based update |
| setState() | dispatch() |
| Small logic | Large logic |
| Few states | Objects / Arrays |

---

# 🎯 When to use useReducer?

Use for:

✅ Forms  
✅ Todo Apps  
✅ Shopping Cart  
✅ Authentication  
✅ Objects  
✅ Arrays  
✅ Complex state updates  

---

Avoid for:

❌ Simple counter  
❌ Single input  
❌ Simple toggle  

---

# 📚 Concepts Covered

- useReducer Hook
- reducer function
- dispatch()
- action object
- action.type
- payload
- spread operator
- dynamic object keys
- immutable updates

---

# 🚀 Important Revision Flow

```text
dispatch sends action
        ↓
reducer checks action.type
        ↓
reducer returns new state
        ↓
React updates UI
```

---