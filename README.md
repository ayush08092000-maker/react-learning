# 🚀 React Learning Journey

This repository contains my step-by-step journey of learning **React JS**.

It includes React fundamentals, components, props, hooks, custom hooks, state management, Context API, Redux Toolkit, API integration, routing, performance optimization, responsive UI design, and practical projects built using modern React practices.

---

# 📖 Repository Organization

This repository is organized into two sections:

## 1. Topic-wise Learning Folders

These folders contain practice code, examples, notes, and concept-based mini projects created while learning React.

## 2. Projects Folder

The `Projects` folder contains complete working React projects.

Example:

- `04_state_and_effects/10-gallery-project/` → Learning/reference implementation
- `Projects/04-gallery-project/` → Complete project source code
- `08_redux_toolkit/05-cart-app-with-RTK/` → RTK learning/reference implementation
- `Projects/07-rtk-cart-app/` → Main project source code

---

# 📂 Folder Structure

```bash
01_basics/
├── 01_basic_javaScript/
├── 02_import_export/
├── 03_Virtual_DOM_&_JSX/
└── 04_vite_setup/


02_components_props/
├── 01_components/
├── 02_props/
└── 03_job_cards_project/


03_styling_ui/
├── 01_module_css/
├── 02_tailwind_css_basic/
└── 03_ui_project/


04_state_and_effects/
├── 01-function/
├── 02-usestate-counter-app/
├── 03-useState-advance/
├── 04-form-handling/
├── 05-two-way-data-binding/
├── 06-notes-app/
├── 07-localstorage/
├── 08-api-calling/
├── 09-useEffect/
└── 10-gallery-project/


05_advanced_concepts/
├── 01_react_router_dom/
├── 02_routing_advanced/
├── 03_child_to_parent_state/
├── 04_context_api_basic/
├── 05_multiple_context/
└── 06_custom_context_provider/


06_advanced_hooks/
├── 01-useEffect-cleanup-fn/
├── 02-useRef/
├── 03-useReducer/
├── 04-useLayoutEffect/
├── 05-useMemo/
├── 06-useCallback/
└── 07-custom-hooks/


07_performance_optimization/
├── 01-react-memo/
├── 02-memo-with-useMemo/
├── 03-memo-with-useCallback/
└── 04-lazy-loading/


08_redux_toolkit/
├── 01-counter-app/
├── 02-todo-app-without-RTK/
├── 03-todo-app-with-RTK/
├── 04-posts-app-with-createAsyncThunk/
├── 05-cart-app-with-RTK/
└── README.md


Projects/
├── 01_job_cards_project/
├── 02_ui_project/
├── 03-notes-app/
├── 04-gallery-project/
├── 05-todo-app/
├── 06-rtk-todo-app/
└── 07-rtk-cart-app/
```

---

# 📚 Learning Roadmap


# 🔰 Phase 1: React Basics ✅

### Concepts Covered

- JavaScript Revision
- ES6 Import / Export
- Virtual DOM
- JSX
- Vite Setup

---

# ⚛️ Phase 2: Components & Props ✅

### Concepts Covered

- Functional Components
- Component Reusability
- Props Passing
- Dynamic Rendering
- Rendering Lists using map()
- Component Based Structure

---

# 🎨 Phase 3: Styling & UI ✅

### Concepts Covered

- CSS Modules
- Tailwind CSS
- Responsive Design
- Modern UI Layouts
- Cards & Components

---

# 🧠 Phase 4: State & Effects ✅

### Concepts Covered

- useState Hook
- Counter Application
- Updating Objects & Arrays
- Previous State Concept
- Form Handling
- Controlled Components
- Two Way Data Binding
- LocalStorage
- SessionStorage
- API Calling using Axios
- useEffect Hook
- Loading States
- Pagination

---

# 🚀 Phase 5: Advanced React Concepts ✅


## 🔹 React Router DOM

Learned client-side routing in React applications.

### Concepts Covered

- BrowserRouter
- Routes
- Route
- Link
- NavLink
- Active Link Styling
- Nested Routes
- Outlet
- Dynamic Routing
- URL Parameters
- useParams Hook
- useNavigate Hook
- 404 Page Handling

---

## 🔹 Child To Parent State Update

Learned how child components can update parent state by passing functions through props.

### Concepts Covered

- Passing State as Props
- Passing setState Function
- Child → Parent Communication
- State Update from Child Component
- Props Flow Understanding

---

## 🔹 Context API Basics

Learned global state management using React Context API.

### Concepts Covered

- createContext()
- Context Provider
- useContext Hook
- Passing Multiple States
- Avoiding Props Drilling

---

## 🔹 Multiple Context API

Created multiple contexts for better state organization.

### Concepts Covered

- Multiple Context Files
- Multiple Providers
- User Context
- Cart Context
- Theme Context
- Global State Management

---

## 🔹 Custom Context Provider

Implemented scalable Context API structure.

### Concepts Covered

- Separate Context File
- Custom Provider Component
- State inside Provider
- Functions inside Provider
- Provider Wrapping in main.jsx
- Clean App Structure

---

# 🪝 Phase 6: Advanced React Hooks ✅


## 🔹 useEffect Cleanup Function

Learned how to handle component cleanup before unmounting or before running effects again.

### Concepts Covered

- Cleanup Function
- Component Unmount Handling
- Removing Event Listeners
- Clearing Timers
- Preventing Memory Leaks

---

## 🔹 useRef Hook

Learned how to access DOM elements and store mutable values without causing re-renders.

### Concepts Covered

- useRef Hook
- DOM Element Reference
- Persist Values Between Renders
- Store Mutable Values Without Re-render

---

## 🔹 useReducer Hook

Learned advanced state management using reducer pattern.

### Concepts Covered

- useReducer Hook
- Reducer Function
- Initial State
- Dispatch Actions
- Action Types
- Managing Complex State

---

## 🔹 useLayoutEffect Hook

Learned how to perform DOM updates before browser painting.

### Concepts Covered

- useLayoutEffect Hook
- Runs Before Browser Paint
- DOM Measurement
- Avoid UI Flickering

---

## 🔹 useMemo Hook

Learned how to optimize expensive calculations by memoizing computed values.

### Concepts Covered

- useMemo Hook
- Memoizing Computed Values
- Dependency Array
- Expensive Calculation Optimization

---

## 🔹 useCallback Hook

Learned how to memoize functions and prevent unnecessary function recreation.

### Concepts Covered

- useCallback Hook
- Function Reference Memoization
- Dependency Array
- Prevent Function Recreation

---

## 🔹 Custom Hooks

Learned how to create reusable hooks by extracting common component logic.

### Concepts Covered

- Creating Custom Hooks
- Extracting Reusable Logic
- useToggle Hook
- useFetch Hook
- useForm Hook
- Reusing Stateful Logic

---

# ⚡ Phase 7: Performance Optimization ✅


Learned different techniques to optimize React application performance by preventing unnecessary rendering and improving loading speed.

---

## 🔹 React.memo

React.memo prevents unnecessary component re-rendering when props remain unchanged.

### Concepts Covered

- React.memo()
- Higher Order Component (HOC)
- Component Memoization
- Parent Component Re-render
- Child Component Optimization
- Props Comparison
- Preventing Unnecessary Re-renders


---

## 🔹 React.memo with useMemo

Learned how useMemo works with React.memo to prevent reference changes.

### Concepts Covered

- useMemo Hook
- Memoizing Values
- Object Reference Optimization
- Array Reference Optimization
- Preventing Expensive Recalculations
- React.memo + useMemo Optimization


---

## 🔹 React.memo with useCallback

Learned how useCallback prevents unnecessary function recreation.

### Concepts Covered

- useCallback Hook
- Function Reference Memoization
- Passing Functions as Props
- React.memo + useCallback Optimization
- Preventing Child Component Re-render


---

## 🔹 Lazy Loading

Learned how to improve initial application loading performance.

### Concepts Covered

- React.lazy()
- Suspense Component
- Code Splitting
- Dynamic Import
- Component Based Lazy Loading
- Route Based Lazy Loading
- Reducing Initial Bundle Size

---

## Quick Revision

```text
React.memo
    ↓
Optimize Components


useMemo
    ↓
Optimize Values / References


useCallback
    ↓
Optimize Functions


Lazy Loading
    ↓
Optimize Initial Loading
```

---

# 🗃️ Phase 8: Redux Toolkit ✅

Learned Redux Toolkit for managing global application state in React applications and handling complex state management with a simpler Redux workflow.

---

## 🔹 Redux Toolkit Basics

Learned the basic Redux Toolkit workflow for creating and managing global state.

### Concepts Covered

- Redux Store
- configureStore()
- createSlice()
- Initial State
- Reducers
- Actions
- Action Creators
- useDispatch()
- useSelector()
- Provider
- Global State Management

---

## 🔹 Counter App

Created a Counter App to understand the basic Redux Toolkit data flow and state updates.

### Concepts Covered

- configureStore()
- createSlice()
- useDispatch()
- useSelector()
- Redux Store
- Action Dispatching
- State Updates
- Action Payload
- Increment
- Decrement
- Reset
- Increment By Amount
- Decrement By Amount
- Immer

---

## 🔹 Todo App Without Redux Toolkit

Created a Todo App using React local state before implementing Redux Toolkit.

### Concepts Covered

- useState()
- useRef()
- Local State Management
- Add Todo
- Delete Todo
- Edit Todo
- Toggle Todo
- Todo Filtering
- Clear Completed Todos
- Passing Functions Through Props
- Child Component Communication

---

## 🔹 Todo App With Redux Toolkit

Converted the Todo App from React local state to Redux Toolkit for centralized state management.

### Concepts Covered

- createSlice()
- Redux Store
- useDispatch()
- useSelector()
- Action Payload
- prepare()
- nanoid()
- Add Todo
- Delete Todo
- Update Todo
- Toggle Todo
- Clear Completed Todos
- Filter State
- Global State Management

---

## 🔹 createAsyncThunk

Learned how to handle asynchronous operations and API requests using Redux Toolkit.

### Concepts Covered

- createAsyncThunk()
- Async API Requests
- Fetch API
- pending State
- fulfilled State
- rejected State
- extraReducers
- Loading State
- Error State
- API Data Management

---

## 🔹 Posts App

Created a Posts App using Redux Toolkit and createAsyncThunk for fetching posts from an API.

### Concepts Covered

- API Integration
- createAsyncThunk()
- extraReducers
- Loading State
- Error Handling
- Async/Await
- Fetch API
- Redux State Management
- API Pagination
- Page Navigation

---

## 🔹 Cart App With Redux Toolkit

Created an e-commerce-style Cart App using Redux Toolkit for managing products and cart state.

### Concepts Covered

- Multiple Redux Slices
- Cart Slice
- Product Slice
- createSlice()
- createAsyncThunk()
- extraReducers
- API Integration
- useDispatch()
- useSelector()
- Add To Cart
- Remove From Cart
- Cart Item Count
- Quantity Management
- Total Price Calculation
- Place Order
- localStorage
- Persistent Cart State
- React Router Integration

---

## 🔹 Multiple Redux Slices

Learned how to manage different parts of an application using multiple Redux slices.

### Concepts Covered

- Multiple Slices
- Multiple Reducers
- Cart State
- Product State
- configureStore()
- Slice Reducer Registration
- Accessing Different Redux States
- Shared Application State

---

## 🔹 Redux Toolkit With localStorage

Learned how to persist cart data using browser localStorage.

### Concepts Covered

- localStorage
- JSON.parse()
- JSON.stringify()
- Persistent Cart Data
- Initial State From localStorage
- Saving Cart State
- Restoring Cart State

---

## 🔹 Redux Toolkit Data Flow

Learned how data flows between React components and the Redux store.

### Concepts Covered

- Component
- Dispatch
- Action
- Reducer
- Redux Store
- Selector
- Component Re-render

Basic flow:

```text
Component
    ↓
dispatch(action)
    ↓
Redux Store
    ↓
Reducer
    ↓
State Update
    ↓
useSelector()
    ↓
Component
```

---

## Quick Revision

configureStore()
    ↓
Create Redux Store


createSlice()
    ↓
Create State + Reducers + Actions


Provider
    ↓
Make Redux Store Available to React


useSelector()
    ↓
Read Redux State


useDispatch()
    ↓
Dispatch Actions


action.payload
    ↓
Pass Data With Action


createAsyncThunk()
    ↓
Handle Async Operations


extraReducers
    ↓
Handle Async Action States


Multiple Slices
    ↓
Manage Different Parts of Application State


localStorage
    ↓
Persist Application Data

---


# 🚀 Projects

## 🔹 Job Cards Project

A simple React project for practicing reusable components and props.

### Features

- Reusable Components
- Props Usage
- Dynamic Card Rendering
- Clean UI

---

## 🔹 Customer Segmentation UI

Responsive UI project built using React and Tailwind CSS.

### Features

- Tailwind CSS
- Responsive Layout
- Horizontal Scroll
- Hover Effects
- Component Based UI

---

## 🔹 Notes App

A React notes management application.

### Features

- Add Notes
- Delete Notes
- Form Handling
- Dynamic Rendering
- State Management
- Responsive UI

---

## 🔹 Image Gallery Project

Image gallery application using API integration.

### Features

- Fetch Images using Axios
- API Integration
- Async/Await
- useEffect Hook
- Loading State
- Pagination
- Dynamic Rendering
- Responsive Design

---

## 🔹 Todo App

A React Todo management application built using React local state to practice state management and reusable components.

### Features

- Add Tasks
- Edit Tasks
- Delete Tasks
- Mark Tasks as Completed
- Undo Completed Tasks
- Filter Tasks
- Clear Completed Tasks
- Form Handling
- State Management
- Responsive UI

---

## 🔹 RTK Todo App

A Todo management application built using React and Redux Toolkit for centralized state management.

### Features

- Add Todo
- Edit Todo
- Delete Todo
- Mark Todo as Completed
- Undo Todo
- All / Active / Completed Filters
- Clear Completed Todos
- Redux Toolkit State Management
- Global State Management

### Redux Concepts

- configureStore()
- createSlice()
- useDispatch()
- useSelector()
- prepare()
- Redux Actions
- Redux Reducers

---

## 🔹 RTK Cart App

An e-commerce-style shopping cart application built using React and Redux Toolkit.

### Features

- Product API Integration
- Product Listing
- Add To Cart
- Remove From Cart
- Cart Item Count
- Quantity Management
- Total Price Calculation
- Cart Page
- Product Page
- Place Order
- localStorage
- React Router
- Multiple Redux Slices
- Async API Handling
- Responsive UI

### Redux Concepts

- configureStore()
- createSlice()
- createAsyncThunk()
- extraReducers
- Multiple Redux Slices
- Cart State Management
- Product State Management
- Global State Management

---

# 🛠️ Tech Stack

### Core

- HTML
- CSS
- JavaScript (ES6+)
- React JS
- Vite

### React

- React Hooks
- Custom React Hooks
- React Router DOM
- Context API
- Redux Toolkit
- React Redux

### Styling

- CSS Modules
- Tailwind CSS
- Responsive UI Design

### API & Data

- REST APIs
- Axios
- Fetch API
- Async/Await
- localStorage

### Performance

- React.memo
- useMemo
- useCallback
- React.lazy
- Suspense
- Code Splitting

---

# 🎯 Goal

To become a skilled Frontend Developer by building a strong foundation in JavaScript and React, learning modern state management and performance optimization, and developing practical real-world projects step by step.

---

# 👨‍💻 Author

**Ayush Dubey**

MCA Student | React Learner | Future Frontend Developer 🚀

---

# ⭐ Note

This repository documents my React learning journey from fundamentals to advanced concepts and modern state management.

Every topic was learned through hands-on practice, examples, and projects.

The repository separates:

```text
Learning Folders
    ↓
Concepts + Practice + Reference Implementations

Projects Folder
    ↓
Complete / Main Project Implementations
```