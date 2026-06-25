# Custom Hooks in React

Custom Hooks allow us to extract and reuse React logic between multiple components.

A custom hook is a JavaScript function that starts with `use` and can use other React hooks inside it.

Example:

```js
useToggle()
useFetch()
useForm()
```

---

# Why Custom Hooks?

## Problem

Same stateful logic gets repeated in multiple components.

Example:

```text
Component A
    ↓
useState
useEffect
logic


Component B
    ↓
same useState
same useEffect
same logic ❌
```

---

## Solution

Move reusable logic into a custom hook.

Flow:

```text
Custom Hook
     ↓
Reusable Logic
     ↓
Use in Multiple Components ✅
```

---

# 01. useToggle Hook

## Problem

Toggle logic is repeated in different components.

Example:

```js
const [open, setOpen] = useState(false)
```

---

## Solution

Create reusable toggle logic.

Flow:

```text
useToggle()
     ↓
Manage boolean state
     ↓
Return value + toggle function
```

Used for:

```text
Show / Hide
Open / Close
Dark Mode Toggle
Modal Toggle
```

---

# 02. useFetch Hook

## Problem

API logic is repeated.

Every component needs:

```text
data state
loading state
error state
fetch logic
```

---

## Solution

Move API fetching logic into custom hook.

Flow:

```text
Component
    ↓
useFetch(url)
    ↓
API Call
    ↓
Return

data
loading
error
```

Used for:

```text
Reusable API Handling
```

---

# 03. useForm Hook

## Problem

Form handling code repeats in every form.

Common logic:

```text
Input state
Change handler
Submit handler
Reset form
```

---

## Solution

Move form logic into custom hook.

Flow:

```text
useForm()
    ↓
Manage form values
    ↓
Handle input changes
    ↓
Submit / Reset form
```

Used for:

```text
Reusable Form Handling
```

---

# Rules of Custom Hooks

- Name must start with `use`
- Can use React hooks inside
- Should contain reusable logic
- Should not return JSX

---

# Remember

```text
Component
    ↓
UI


Custom Hook
    ↓
Reusable Logic
```

---

# Examples Completed

```text
useToggle
    ↓
Reusable boolean state


useFetch
    ↓
Reusable API logic


useForm
    ↓
Reusable form handling
```
