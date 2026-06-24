# React.memo with useCallback

## Problem

When a Parent component re-renders, functions are recreated with a new reference.

Example:

```js
const handleClick = () => {
    console.log("Clicked")
}
```

Every render creates a new function.

Flow:

```text
Parent re-render
        ↓
New function reference created
        ↓
React.memo sees props changed
        ↓
Child component re-renders ❌
```

Even if the function logic is the same.

---

## Solution - useCallback

useCallback caches the function reference between renders.

Example:

```js
const handleClick = useCallback(() => {

    console.log("Clicked")

}, [])
```

Flow:

```text
Parent re-render
        ↓
useCallback returns old function reference
        ↓
React.memo sees same props
        ↓
Child render skipped ✅
```

---

## React.memo

React.memo memoizes a component.

It prevents unnecessary component re-rendering when props are unchanged.

Example:

```js
export default memo(Child)
```

---

## Difference

| Feature | Used For |
|---|---|
| React.memo | Cache Component |
| useMemo | Cache Value / Object / Array Reference |
| useCallback | Cache Function Reference |

---

## useMemo vs useCallback

```text
useMemo
    ↓
Returns cached value


useCallback
    ↓
Returns cached function
```

---

## Remember

```text
React.memo
      +
useCallback

Used together when passing functions as props.
```
