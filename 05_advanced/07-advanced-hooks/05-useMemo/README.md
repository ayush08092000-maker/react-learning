# 🚀 React useMemo Hook

This folder contains practice examples of React `useMemo` Hook.

`useMemo` is used to memoize (cache) the result of an expensive calculation so React does not recalculate it unnecessarily on every render.

It caches the **return value/result** of a function.

---

# 📌 Syntax

```jsx
const value = useMemo(() => {

    return calculation()

}, [dependency])
```

---

# 🧠 Why useMemo?

Problem:

```
State Update
      ↓
Component Re-render
      ↓
Expensive Function Runs Again ❌
```

Even if the calculation result is not needed again, normal functions execute on every render.

Solution:

```
State Update
      ↓
Component Re-render
      ↓
useMemo checks dependency
      ↓
Same dependency?
      ↓
Return cached value ✅
```

---

# 📂 Examples Covered

```
useMemo
│
├── 01-without-useMemo
├── 02-with-useMemo
└── 03-filter-search-list
```

---

# 1️⃣ Without useMemo

## Problem

Component re-renders whenever any state changes.

Expensive calculations inside the component body run again every time.

Example:

```jsx
const result = expensiveCalculation()
```

Flow:

```
Count change
      ↓
Component re-render
      ↓
expensiveCalculation runs ❌


Input change
      ↓
Component re-render
      ↓
expensiveCalculation runs ❌
```

---

## Expensive Function

```jsx
function expensiveCalculation(){

    console.log("Calculating...")

    let total = 0

    for(let i = 0; i <= 1000000000; i++){
        total += i
    }

    return total
}
```

Large loops or heavy calculations can slow down the application.

---

# 2️⃣ With useMemo

## Solution

Cache the calculation result.

Example:

```jsx
const result = useMemo(() => {

    return expensiveCalculation()

}, [text])
```

---

Flow:

```
Component Render
        ↓
useMemo checks dependency
        ↓
Dependency changed?
        ↓
YES → Run calculation

NO  → Return cached result
```

---

Example:

```
Count Change:
      ↓
Component re-render
      ↓
useMemo returns old result ✅
      ↓
expensiveCalculation not called


Text Change:
      ↓
Dependency changed
      ↓
expensiveCalculation runs ✅
```

---

# 3️⃣ Filter Search List Example

Real world use case:

- Searching
- Filtering
- Sorting large data

---

Without optimization:

```
Search change
      ↓
filter() runs ✅


Other state change
      ↓
Component re-render
      ↓
filter() runs again ❌
```

---

With useMemo:

```jsx
const filteredUsers = useMemo(() => {

    return users.filter((user) =>
        user
        .toLowerCase()
        .includes(search.toLowerCase())
    )

}, [search])
```

---

Flow:

```
Search Change:
      ↓
filter() runs again ✅


Count Change:
      ↓
Component re-render
      ↓
useMemo returns cached list
      ↓
filter() does not run ✅
```

---

# useMemo vs Normal Function

| Normal Function | useMemo |
|---|---|
| Runs every render | Runs when dependency changes |
| No caching | Stores previous result |
| Can slow UI | Improves performance |
| Simple calculations | Expensive calculations |

---

# Important Notes

- Component still re-renders.
- `useMemo` only prevents recalculation.
- Do not use for every calculation.
- Use only for expensive operations.

---

# When to use useMemo?

Use for:

✅ Expensive calculations  
✅ Large list filtering  
✅ Sorting large data  
✅ Avoiding unnecessary recalculation  


Avoid for:

❌ Simple addition  
❌ Small calculations  
❌ Every variable  

---

# Revision

```
useMemo
    ↓
Caches return value
    ↓
Component re-render happens
    ↓
Dependency same?
    ↓
Returns cached result

Dependency changed?
    ↓
Runs calculation again
```

---

# Covered Concepts

✔ useMemo Hook  
✔ Memoization  
✔ Expensive Calculation  
✔ Dependency Array  
✔ Prevent unnecessary recalculation  
✔ Filter Search Optimization  
✔ Performance Optimization  

```
State Change → Re-render → useMemo → Cached Result
```