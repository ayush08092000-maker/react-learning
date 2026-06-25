# 🚀 React useCallback Hook

This folder contains practice examples of React `useCallback` Hook.

`useCallback` is used to memoize (cache) a function reference so that the function is not recreated unnecessarily on every render.

---

# 📌 Syntax

```jsx
const functionName = useCallback(() => {

    // code

}, [dependencies])
```

---

# 🧠 Why useCallback?

Problem:

```
State Update
      ↓
Component Re-render
      ↓
New Function Created ❌
      ↓
Function Reference Changes
```

Solution:

```
State Update
      ↓
Component Re-render
      ↓
useCallback checks dependency
      ↓
Same dependency?
      ↓
Return old function reference ✅
```

---

# 📂 Examples Covered

```
useCallback
│
├── 01_without-useCallback
└── 02_with-useCallback
```

---

# 1️⃣ Without useCallback

## Problem

Whenever component re-renders, normal functions are recreated.

Example:

```jsx
function increment(){

    setCount(prev => prev + 1)

}
```

---

Flow:

```
Initial Render

increment → Function@123


State Change
      ↓
Re-render

increment → Function@456


State Change
      ↓
Re-render

increment → Function@789
```

Same code but different function reference ❌

---

## Checking Function Reference

`useRef` stores previous function:

```jsx
const oldFunction = useRef(null)
```

Compare old and current reference:

```jsx
if(oldFunction.current === increment){

    console.log("Same function")

}
else{

    console.log("New function created")

}
```

Save current function:

```jsx
oldFunction.current = increment
```

---

Output:

```
New function created ❌
New function created ❌
New function created ❌
```

Because:

```
count update → re-render
text update  → re-render

Every render creates new function
```

---

# 2️⃣ With useCallback

## Solution

Wrap function with `useCallback`.

Example:

```jsx
const increment = useCallback(() => {

    setCount(prev => prev + 1)

}, [])
```

---

Flow:

```
Initial Render
      ↓
Create Function


State Change
      ↓
Component Re-render
      ↓
Return old function reference ✅
```

---

Output:

```
First Render:

New function created ❌


After Re-render:

Same function ✅
Same function ✅
Same function ✅
```

---

# Dependency Array

Example:

```jsx
useCallback(() => {

    // function code

}, [dependency])
```

Meaning:

```
Dependency same
        ↓
Old function reference returned


Dependency changed
        ↓
New function reference created
```

---

# useMemo vs useCallback

| useMemo | useCallback |
|---|---|
| Caches value | Caches function |
| Stores return result | Stores function reference |
| Avoid recalculation | Avoid function recreation |

---

Example:

## useMemo

```jsx
const result = useMemo(() => {

    return calculate()

}, [])
```

Stores:

```
calculate() output
```

---

## useCallback

```jsx
const handleClick = useCallback(() => {

    clickHandler()

}, [])
```

Stores:

```
Function reference
```

---

# Important Notes

- Component still re-renders.
- useCallback does not stop rendering.
- It only keeps the same function reference.
- Mainly useful when passing functions as props.

---

# Real Use Case

Most powerful with:

```
React.memo
      +
useCallback
```

Example:

```
Parent re-render
        ↓
Function prop changes
        ↓
Child re-renders ❌


useCallback
        ↓
Same function reference
        ↓
React.memo skips child render ✅
```

---

# Revision

```
useCallback
      ↓
Caches function reference
      ↓
Component re-renders
      ↓
Dependency same?
      ↓
Return old function

Dependency changed?
      ↓
Create new function
```

---

# Covered Concepts

✔ useCallback Hook  
✔ Function Memoization  
✔ Function Reference  
✔ Dependency Array  
✔ useRef comparison  
✔ Prevent unnecessary function recreation  

```
Render → useCallback → Same Function Reference
```