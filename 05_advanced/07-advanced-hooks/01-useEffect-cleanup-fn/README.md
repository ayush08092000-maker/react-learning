# 🧹 useEffect Cleanup Function in React

This folder explains the **useEffect cleanup function** in React with practical examples.

The cleanup function is mainly used to stop or clear side effects like timers, subscriptions, event listeners, API requests, etc.

---

## 📌 What is useEffect?

`useEffect` is a React Hook that is used to perform **side effects** in functional components.

Examples of side effects:

- Fetching data from API
- Updating document title
- Setting timers
- Adding event listeners
- Subscriptions

---

## 🔹 Syntax

```jsx
useEffect(() => {

  // side effect code

}, [dependencies]);
```

---

# 🧹 useEffect Cleanup Function

The cleanup function is a function returned from inside `useEffect`.

It runs:

✅ Before component unmounts  
✅ Before useEffect runs again due to dependency changes  

It does **not run when useEffect function finishes**.

---

## 🔹 Cleanup Syntax

```jsx
useEffect(() => {

  // start something

  return () => {

    // stop / remove / clear something

  };

}, [dependencies]);
```

---

# ⏱ Example 1: Cleanup with setInterval

In this example:

- Timer starts using `setInterval()`
- Count increases every second
- When timer stops, cleanup function clears the interval

```jsx
useEffect(() => {

  if (show) {

    const timerId = setInterval(() => {

      setCount((prev) => prev + 1);

    }, 1000);


    return () => {

      clearInterval(timerId);

    };

  }

}, [show]);
```

---

## 🔥 Why cleanup is needed?

Without cleanup:

❌ Multiple intervals can keep running  
❌ Memory leaks can happen  
❌ Application performance decreases  

Cleanup stops the old side effect safely.

---

# 🖥 Example 2: Cleanup Execution in Console

```jsx
useEffect(() => {

  console.log(`Run useEffect ${count}`);


  return () => {

    console.log(`Clean up ${count}`);

  };

}, [count]);
```

---

## Console Flow

Initial render:

```
Run useEffect 0
```

After increasing count:

```
Clean up 0
Run useEffect 1
```

Again increase:

```
Clean up 1
Run useEffect 2
```

---

# ⚙️ How Cleanup Works

Flow:

```
Component Render
        |
        ↓
useEffect Runs
        |
        ↓
State / Dependency Change
        |
        ↓
Old Cleanup Runs
        |
        ↓
New useEffect Runs
```

---

# 📂 Concepts Covered

✔ useEffect Hook  
✔ Dependency Array  
✔ Cleanup Function  
✔ setInterval Cleanup  
✔ clearInterval()  
✔ Component Unmounting  
✔ Prevent Memory Leaks  

---

# 📝 Important Note

Cleanup function is commonly used with:

- clearInterval()
- clearTimeout()
- removeEventListener()
- API request cancellation
- subscriptions cleanup

---

# 🚀 Learning Goal

Understand how React manages side effects and how cleanup functions prevent unwanted behavior in components.