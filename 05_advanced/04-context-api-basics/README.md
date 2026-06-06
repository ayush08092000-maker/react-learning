# 📚 Context API Basics - Student Management

A simple React project created to understand the basics of **React Context API**.

This project demonstrates how to pass multiple states using a single Context and access/update data from deeply nested components without props drilling.

---

## 🚀 Features

- 📖 Manage Subject data globally
- 👨‍🎓 Manage Student data globally
- 🎓 Manage Course data globally
- Update state from child components
- Avoid props drilling using Context API

---

## 🛠️ Technologies Used

- React JS
- Context API
- React Hooks
  - useState
  - useContext

---

## 📂 Project Structure

```text
src
│
├── components
│   │
│   ├── College.jsx
│   ├── ClassComponent.jsx
│   ├── Student.jsx
│   └── Subject.jsx
│
├── context
│   │
│   └── ContextData.jsx
│
├── App.jsx
└── main.jsx
```

---

## 🧠 Context API Flow

```text
createContext()

        ↓

Context.Provider

value={{
 subject,
 student,
 setStudent,
 course,
 setCourse
}}

        ↓

useContext()

        ↓

Components access data
```

---

## 📖 Subject State

Subject is managed in App.jsx and shared using Context.

Used in:

- Subject.jsx

Flow:

```text
Select Subject

       ↓

setSubject()

       ↓

Context Updated

       ↓

Subject Component Re-render
```

---

## 👨‍🎓 Student State

Student data is shared globally using Context.

Used in:

- Student.jsx

Feature:

```text
Change Name Button

        ↓

setStudent()

        ↓

Student Name Updates
```

Example:

```text
Ayush ↔ Rahul
```

---

## 🎓 Course State

Course data is managed globally.

Used in:

- ClassComponent.jsx

Feature:

```text
Change Course Button

        ↓

setCourse()

        ↓

Course Updates
```

Example:

```text
MCA ↔ MBA
```

---

## 📌 Single Context Example

Only one Context file is used:

```text
ContextData.jsx
```

which manages:

```javascript
{
 subject,
 student,
 setStudent,
 course,
 setCourse
}
```

---

## 📚 Concepts Practiced

✔ createContext()  
✔ Context Provider  
✔ useContext Hook  
✔ Passing multiple values in Context  
✔ Updating parent state from child component  
✔ Avoiding props drilling  

---

## 🎯 Purpose

The main purpose of this project is to understand how React Context API works and how multiple states can be shared globally using a single Context.

---

## 🔥 Next Learning Step

- Multiple Context API
- Separate Context files
- Custom Provider Components
- Provider setup in main.jsx

---