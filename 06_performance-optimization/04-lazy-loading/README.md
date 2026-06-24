# Lazy Loading in React

## Problem

Normal imports load all components when the application starts.

Example:

```js
import Home from "./Home"
import About from "./About"
import Products from "./Products"
```

All components are added into the main JavaScript bundle.

Flow:

```text
App Start
    ↓
Download all components
    ↓
Large bundle size
    ↓
Slow initial loading ❌
```

Even if the user does not visit those pages.

---

## Solution - React.lazy

React.lazy loads components only when they are required.

Example:

```js
const About = lazy(() => import("./About"))
```

React creates a separate JavaScript chunk for this component.

Flow:

```text
App Start
    ↓
Load required code only
    ↓
User visits About page
    ↓
Download About component
    ↓
Render component ✅
```

---

## Suspense

Lazy components need Suspense.

Suspense displays fallback UI while the component is loading.

Example:

```jsx
<Suspense fallback={<h2>Loading...</h2>}>

    <About />

</Suspense>
```

Flow:

```text
Request lazy component
          ↓
Component downloading
          ↓
Show fallback UI
          ↓
Component loaded
          ↓
Show actual component
```

---

## Code Splitting

Code splitting means breaking one large JavaScript bundle into smaller chunks.

Without Code Splitting:

```text
main.js

App
Home
About
Products
Dashboard
```

Everything downloads together ❌

---

With Code Splitting:

```text
main.js
  ↓
App


about.js
  ↓
About


products.js
  ↓
Products
```

Download only when needed ✅

---

## Lazy Loading Types

### 1. Component Based Lazy Loading

Example:

```js
const Post = lazy(() => import("./Post"))
```

Flow:

```text
Button Click
      ↓
Load Component
```

---

### 2. Route Based Lazy Loading

Used mostly in real projects.

Example:

```js
const Home = lazy(() => import("./Home"))

<Route path="/" element={<Home />} />
```

Flow:

```text
Visit Route
     ↓
Download Page Component
```

---

## Remember

```text
React.lazy()
      ↓
Code Splitting
      ↓
Load component only when needed


Suspense
      ↓
Show loading UI while component loads
```

---

## Performance Optimization

```text
Lazy Loading
      ↓
Reduces initial bundle size
      ↓
Improves first page load speed
```
