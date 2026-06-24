# React Performance Optimization

Performance optimization improves React application speed by avoiding unnecessary work and reducing initial loading time.

---

# 01. React.memo

## Problem

When a parent component re-renders, child components also re-render even if their props are unchanged.

Flow:

```text
Parent state update
        ↓
Parent re-render
        ↓
Child re-render ❌
```

---

## Solution

React.memo memoizes the component.

It prevents unnecessary child component re-rendering when props are unchanged.

Flow:

```text
Parent re-render
        ↓
React.memo checks props
        ↓
Same props
        ↓
Skip child render ✅
```

Used for:

```text
Component Optimization
```

---

# 02. useMemo

## Problem

Objects, arrays, or expensive calculations are recreated on every render.

Flow:

```text
Parent re-render
        ↓
New value/reference created
        ↓
Unnecessary calculation/render ❌
```

---

## Solution

useMemo caches calculated values and references.

Flow:

```text
Parent re-render
        ↓
Dependency changed?
        ↓
No → use cached value ✅
```

Used for:

```text
Value / Object / Array Reference Optimization
```

---

# 03. useCallback

## Problem

Functions are recreated on every render.

Flow:

```text
Parent re-render
        ↓
New function reference
        ↓
React.memo child re-renders ❌
```

---

## Solution

useCallback caches function references.

Flow:

```text
Parent re-render
        ↓
Same function reference
        ↓
Child render skipped ✅
```

Used for:

```text
Function Optimization
```

---

# 04. Lazy Loading

## Problem

Normal imports load all components at initial app load.

Flow:

```text
App Start
    ↓
Download all components
    ↓
Large bundle size
    ↓
Slow loading ❌
```

---

## Solution

React.lazy performs code splitting and loads components only when required.

Flow:

```text
App Start
    ↓
Load required code
    ↓
Visit component/page
    ↓
Download component chunk ✅
```

Suspense shows loading UI while lazy components load.

Used for:

```text
Bundle Size Optimization
```

---

# Quick Revision

```text
React.memo
    ↓
Cache Component
    ↓
Avoid unnecessary component render


useMemo
    ↓
Cache Value / Object / Array
    ↓
Avoid recalculation/reference change


useCallback
    ↓
Cache Function
    ↓
Avoid function recreation


Lazy Loading
    ↓
Code Splitting
    ↓
Reduce initial bundle size
```

---

# Remember

```text
Rendering Optimization:

React.memo
useMemo
useCallback


Loading Optimization:

React.lazy
Suspense
```
