# 🚀 React useLayoutEffect Hook

This folder contains examples of React `useLayoutEffect` Hook.

`useLayoutEffect` is used to perform layout-related work after DOM updates but **before the browser paints the screen**.

It is similar to `useEffect`, but it runs **synchronously**.

---

# 📌 Syntax

```jsx
useLayoutEffect(() => {

  // code

  return () => {
    // cleanup
  }

}, [dependencies])
```

---

# ⚡ Execution Flow

```
Component Render
        ↓
DOM Update
        ↓
useLayoutEffect Runs
        ↓
Browser Paint
        ↓
useEffect Runs
```

Order:

1. `useLayoutEffect`
2. Browser paints UI
3. `useEffect`

---

# 🔥 useEffect vs useLayoutEffect

| useEffect | useLayoutEffect |
|----------|----------------|
| Runs after browser paint | Runs before browser paint |
| Asynchronous | Synchronous |
| Does not block UI | Blocks UI paint |
| Better for API calls | Better for DOM measurement |

---

# 📌 Common Uses

- Measure DOM elements
- Update layout before showing UI
- Avoid screen flickering
- Work with DOM libraries
- Auto scrolling

---

# 📂 Examples

## 1. Execution Order Test

File:

```
Test.jsx
```

Concept:

```jsx
useLayoutEffect(() => {
  console.log("useLayoutEffect")
}, [])


useEffect(() => {
  console.log("useEffect")
}, [])
```

Output:

```
useLayoutEffect
useEffect
```

Because `useLayoutEffect` runs before browser paint.

---

# 2. Measure DOM Height

File:

```
Example1.jsx
```

Concepts used:

```
useRef → access DOM element
useLayoutEffect → measure before paint
```

DOM Properties:

```
clientHeight
    ↓
content + padding


offsetHeight
    ↓
content + padding + border


getBoundingClientRect()
    ↓
exact size and position
```

Example:

```jsx
useLayoutEffect(() => {

  setHeight1(boxRef.current.clientHeight)

  setHeight2(boxRef.current.offsetHeight)

  setHeight3(
    boxRef.current.getBoundingClientRect().height
  )

}, [])
```

---

# 3. Prevent UI Flicker / Layout Update

File:

```
Example2.jsx
```

Concept:

```
Measure element
        ↓
Update layout
        ↓
Paint UI
```

Example:

```jsx
useLayoutEffect(() => {

  const elem = boxRef.current

  const width = elem.clientWidth

  elem.style.transform =
      `translateX(${width}px)`

}, [])
```

`useLayoutEffect` updates the element position before the user sees the UI.

---

# 4. Auto Scroll Example

File:

```
Example3.jsx
```

Used in:

- Chat applications
- Message boxes

Concept:

```
useRef
  ↓
Access scroll container

useLayoutEffect
  ↓
Scroll before paint
```

Properties:

```
scrollTop
    ↓
Current scroll position


scrollHeight
    ↓
Total scrollable height
```

Example:

```jsx
useLayoutEffect(() => {

  chatRef.current.scrollTop =
      chatRef.current.scrollHeight

}, [])
```

This automatically moves the scrollbar to the latest message.

---

# 🧠 Remember

- Use `useEffect` for most tasks.
- Use `useLayoutEffect` only when DOM measurement or layout update is required before painting.

Examples:

```
API Calls
Data Fetching
Subscriptions

        ↓

useEffect ✅


DOM Measurement
Layout Change
Avoid Flicker

        ↓

useLayoutEffect ✅
```

---

# 📚 Covered Concepts

✔ useLayoutEffect  
✔ useRef with DOM  
✔ DOM measurement  
✔ Browser paint flow  
✔ Prevent UI flickering  
✔ Auto scrolling  
✔ DOM properties  

```
Render → DOM Update → useLayoutEffect → Paint → useEffect
```