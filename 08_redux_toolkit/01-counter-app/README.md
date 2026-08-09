# 🔢 Redux Toolkit - Counter App

A simple Counter application built using **React** and **Redux Toolkit** to learn the fundamentals of global state management.

This project demonstrates how to create a Redux Store, define a Slice, dispatch actions, update state, and access Redux state inside React components.

---

# 📚 Concepts Covered

- Redux Toolkit Setup
- configureStore()
- createSlice()
- Initial State
- Reducers
- Actions
- Action Payload
- React Redux Provider
- useSelector()
- useDispatch()
- Global State Management
- Immer (Mutable Syntax)

---

# 📂 Folder Structure

```bash
src/
│
├── app/
│   └── store.js
│
├── features/
│   └── counter/
│       └── counterSlice.js
│
├── components/
│   ├── Counter.jsx
│   └── InputCounter.jsx
│
├── App.jsx
├── main.jsx
├── App.css
└── index.css
```

---

# 🚀 Features

- Display Counter Value
- Increment Counter
- Decrement Counter
- Reset Counter
- Increment by Custom Amount
- Decrement by Custom Amount
- Prevent Counter from Going Below Zero

---

# 🧠 Redux Flow

```text
React Component
      │
      ▼
dispatch(action)
      │
      ▼
Redux Store
      │
      ▼
Reducer Updates State
      │
      ▼
Redux Store Updates
      │
      ▼
useSelector()
      │
      ▼
Component Re-renders
```

---

# 📖 What I Learned

## Store

- Created Redux Store using `configureStore()`
- Registered Slice Reducers

---

## Slice

- Created Slice using `createSlice()`
- Defined Initial State
- Created Reducers
- Generated Actions Automatically

---

## Reducers

Implemented reducers for:

- Increment
- Decrement
- Reset
- Increment by Amount
- Decrement by Amount

---

## React Redux

Connected React with Redux using:

- `Provider`
- `useSelector()`
- `useDispatch()`

---

## Action Payload

Learned how to pass data while dispatching actions.

Example:

```js
dispatch(incrementByAmount(10))
```

Access payload inside reducer:

```js
action.payload
```

---

## Immer

Redux Toolkit uses **Immer**, allowing state updates with mutable syntax.

Example:

```js
state.value += 1;
```

instead of manually returning a new state object.

---

# 🛠️ Tech Stack

- React
- Redux Toolkit
- React Redux
- Tailwind CSS
- Vite

---

# 🎯 Learning Outcome

After completing this project, I understand:

- How Redux Toolkit works
- How to configure a Redux Store
- How Slices manage application state
- How Actions trigger state updates
- How Reducers update the store
- How Components access Redux state using `useSelector()`
- How Components update Redux state using `useDispatch()`
- How to pass custom data using Action Payloads
- How Immer simplifies state updates

---

# 🚀 Next Project

**Todo App**

Concepts to explore next:

- Arrays in Redux State
- Objects in Redux State
- CRUD Operations
- Updating Nested State
- Filtering Data
- Rendering Lists
- Managing Complex Global State