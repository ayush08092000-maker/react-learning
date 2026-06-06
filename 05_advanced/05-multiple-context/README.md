# 🛒 Context Shopping App

A simple React project created to practice **React Context API**.  
This project demonstrates how to manage and share global state between multiple components without props drilling.

---

## 🚀 Features

- 👤 User Management using UserContext
- 🛒 Cart Count Management using CartContext
- 🌙 Light/Dark Theme Toggle using ThemeContext
- Share data globally between components
- Update state from child components
- Avoid props drilling

---

## 🛠️ Technologies Used

- React JS
- Context API
- React Hooks
  - useState
  - useContext
- Tailwind CSS

---

## 📂 Project Structure

```text
src
│
├── components
│   │
│   ├── Navbar.jsx
│   ├── Product.jsx
│   ├── Cart.jsx
│   └── Profile.jsx
│
├── context
│   │
│   ├── UserContext.jsx
│   ├── CartContext.jsx
│   └── ThemeContext.jsx
│
├── App.jsx
└── main.jsx
```

---

## 🧠 Context API Flow

```text
createContext()

       ↓

Provider
(value={{state, setState}})

       ↓

useContext()

       ↓

Access / Update data in components
```

---

## 👤 UserContext

Used to manage user data globally.

Used in:

- Navbar.jsx → Display user name
- Profile.jsx → Display and update user name

Flow:

```text
Profile Button Click

        ↓

setUser()

        ↓

UserContext Update

        ↓

Navbar Automatically Updates
```

---

## 🛒 CartContext

Used to manage cart state globally.

Used in:

- Product.jsx → Increase cart count
- Cart.jsx → Display cart items

Flow:

```text
Add To Cart Button

        ↓

setCart()

        ↓

CartContext Update

        ↓

Cart Component Re-render
```

---

## 🌙 ThemeContext

Used to manage application theme.

Features:

- Light Mode
- Dark Mode

Flow:

```text
Theme Button Click

        ↓

setTheme()

        ↓

ThemeContext Update

        ↓

UI Theme Changes
```

---

## 📚 Concepts Practiced

✔ Creating Context  
✔ Context Provider  
✔ Multiple Contexts  
✔ Passing state through Context  
✔ Updating state using Context  
✔ Consuming data with useContext Hook  

---

## 🎯 Purpose

This project was created to understand how React Context API works internally and how global state can be managed without passing props manually through every component.

---

## 📌 Future Improvements

- Create custom Provider components
- Move Providers to main.jsx
- Add localStorage support
- Improve theme system

---