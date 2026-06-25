# 🎯 useRef Hook in React

This folder explains the **useRef Hook** in React with practical examples.

`useRef` is used to store mutable values and directly access DOM elements without causing component re-render.

---

# 📌 What is useRef?

`useRef` is a React Hook that allows us to:

- Store values between renders
- Access DOM elements directly
- Update values without triggering re-render

---

# 🔹 Syntax

```jsx
const refName = useRef(initialValue);
```

`useRef` returns an object with a **current property**.

```jsx
refName.current
```

Example:

```jsx
const value = useRef(0);

value.current = value.current + 1;
```

---

# 🚀 Common use cases of useRef

## Case 1

✔ Store mutable values without re-rendering

## Case 2

✔ Access / update DOM elements directly

---

# 📂 Case 1: useRef vs Normal Variable

Normal variables are recreated after every render.

Example:

```jsx
let a = 0;
```

Whenever component re-renders:

```
a = 0 again
```

So it cannot remember previous value.

---

## useRef Variable

```jsx
let b = useRef(0);
```

`useRef` keeps its value between renders.

Updating:

```jsx
b.current = b.current + 1;
```

does not cause re-render.

---

# 🧪 Example

```jsx
useEffect(() => {

  a = a + 1;

  console.log(
    `Value of a is ${a}`
  );


  b.current = b.current + 1;

  console.log(
    `Value of b.current is ${b.current}`
  );

});
```

---

# 🖥 Console Output Difference

Normal variable:

```
Rerendering... value of a is 1
Rerendering... value of a is 1
Rerendering... value of a is 1
```

Because it resets after every render.

---

useRef:

```
Rerendering... value of b.current is 1
Rerendering... value of b.current is 2
Rerendering... value of b.current is 3
```

Because useRef remembers previous value.

---

# 🖱 Case 2: Accessing DOM Elements

`useRef` can directly reference HTML elements.

Example:

```jsx
const inputRef = useRef(null);
```

Connect ref with element:

```jsx
<input ref={inputRef} />
```

Now input element is available inside:

```jsx
inputRef.current
```

---

# 🎯 Focus Input Example

```jsx
const inputHandler = () => {

  inputRef.current.focus();

}
```

When button is clicked:

```
Input box gets focused
```

---

# 👁 Hide / Show Element Example

```jsx
inputRef.current.style.display =
inputRef.current.style.display === "none"
? "inline-block"
: "none";
```

This directly changes input element style.

---

# ⚡ useRef vs useState

| useState | useRef |
|---|---|
| Causes re-render | Does not cause re-render |
| Used for UI updates | Used for storing values |
| Value updates asynchronously | Updates immediately |
| Triggers component refresh | Keeps same reference |

---

# 📌 Important Points

✔ useRef value is stored inside `.current`  
✔ Changing `.current` does not re-render component  
✔ useRef value persists between renders  
✔ Useful for accessing DOM elements  
✔ Avoid unnecessary re-rendering  

---

# 📚 Concepts Covered

- useRef Hook
- .current property
- useRef vs normal variable
- useRef vs useState
- DOM element reference
- focus()
- Dynamic style update

---

# 🚀 Learning Goal

Understand how React useRef works internally and how to use it for storing values and controlling DOM elements efficiently.