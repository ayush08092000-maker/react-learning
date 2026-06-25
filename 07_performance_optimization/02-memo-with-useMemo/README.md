# React.memo with useMemo

## Problem

When a Parent component re-renders, objects and arrays are recreated with a new reference.

Example:

```js
const user = {
    name: "Ayush",
    age: 22
}
```

Every render creates a new object.

Flow:

```text
Parent re-render
        ↓
New object reference created
        ↓
React.memo sees props changed
        ↓
Child component re-renders ❌
```

Even if object values are the same.

---

## Solution - useMemo

useMemo caches the value/reference between renders.

Example:

```js
const user = useMemo(() => {
    return {
        name: "Ayush",
        age: 22
    }
}, [])
```

Flow:

```text
Parent re-render
        ↓
useMemo returns old object reference
        ↓
React.memo sees same props
        ↓
Child render skipped ✅
```

---

## React.memo

React.memo memoizes a component.

It prevents unnecessary component re-rendering when props are unchanged.

```js
export default memo(Child)
```

---

## Difference

| Feature | Used For |
|---|---|
| React.memo | Cache Component |
| useMemo | Cache Value / Object / Array Reference |

---

## Remember

```text
React.memo
      +
useMemo

Used together when passing objects or arrays as props.
```
