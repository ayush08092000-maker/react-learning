# 🚀 Advanced React Router Project

This is an advanced React Router practice project built using React JS.  
The main purpose of this project is to learn and implement React Router DOM concepts like normal routing, nested routing, dynamic routing, navigation hooks, and 404 page handling.

---

# 📌 Features

- Multiple Page Routing
- Active Navigation Styling
- Nested Routes
- Default Child Route
- Dynamic URL Routing
- URL Parameters
- Programmatic Navigation
- Back & Forward Navigation
- 404 Page Handling
- Common Navbar and Footer Layout

---

# 📂 Folder Structure

```bash
02_routing-advanced/

├── src/
│
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Buttons.jsx
│   │   └── Footer.jsx
│   │
│   ├── pages/
│   │   │
│   │   ├── collections/
│   │   │   ├── Men.jsx
│   │   │   ├── Women.jsx
│   │   │   └── Kids.jsx
│   │   │
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Courses.jsx
│   │   ├── CourseDetail.jsx
│   │   ├── Products.jsx
│   │   ├── ProductHome.jsx
│   │   └── NotFound.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── index.html
└── vite.config.js
```

---

# 🧠 React Router Concepts Covered

---

## 🔹 BrowserRouter

BrowserRouter enables routing functionality in the React application.

```jsx
<BrowserRouter>

  <App />

</BrowserRouter>
```

---

# 🔹 Routes & Route

Routes and Route components are used to create different pages.

Example:

```jsx
<Routes>

<Route 
 path="/about"
 element={<About />}
/>

</Routes>
```

Pages created:

- Home
- About
- Courses
- Products
- Contact

---

# 🔹 NavLink

NavLink is used for navigation and active page styling.

Example:

```jsx
<NavLink to="/products">

 Products

</NavLink>
```

Active class styling:

```css
.active{

 color: rgb(0,255,149);

 text-decoration: underline;

}
```

---

# 📦 Nested Routing

Products page contains nested routes.

Parent Route:

```jsx
<Route 
 path="/products"
 element={<Products />}
>

<Route 
 index
 element={<ProductHome />}
/>


<Route 
 path="men"
 element={<Men />}
/>


<Route 
 path="women"
 element={<Women />}
/>


<Route 
 path="kids"
 element={<Kids />}
/>


</Route>
```

Available URLs:

```bash
/products

/products/men

/products/women

/products/kids
```

---

# 🔹 Outlet

Outlet is used as a placeholder where child routes are displayed.

Example:

```jsx
<Outlet />
```

Flow:

```bash
Products.jsx

       |

       |

    Outlet

       |

       |

Men / Women / Kids Component
```

---

# 📚 Dynamic Routing

Dynamic routing is implemented in Courses.

Route:

```jsx
<Route

 path="/courses/:id"

 element={<CourseDetail />}

/>
```

Example URLs:

```bash
/courses/react

/courses/javascript

/courses/anything
```

All URLs open the Course Detail page.

---

# 🔹 useParams()

useParams is used to access values from URL.

Example:

```jsx
const params = useParams()


<h1>

{params.id} Course Detail

</h1>
```

URL:

```bash
/courses/react
```

Output:

```bash
react Course Detail
```

---

# 🔹 useNavigate()

useNavigate is used to navigate using JavaScript.

Example:

```jsx
const navigate = useNavigate()
```

Previous Page:

```jsx
navigate(-1)
```

Home Page:

```jsx
navigate("/")
```

Forward Page:

```jsx
navigate(1)
```

---

# ❌ 404 Page Handling

Invalid URLs are handled using wildcard route.

```jsx
<Route

 path="*"

 element={<NotFound />}

/>
```

Example:

```bash
/randomURL
```

Output:

```bash
404 Page Not Found
```

---

# 🎨 UI Features

- Responsive Navbar
- Active Link Highlight
- Product Category Navbar
- Navigation Buttons
- Fixed Layout Structure
- Footer Section

---

# 🛠️ Tech Stack

- HTML
- CSS
- JavaScript
- React JS
- React Router DOM
- Tailwind CSS
- Vite

---

# 🎯 Learning Goal

The goal of this project is to understand React Router concepts practically by building a multi-page React application.

Concepts practiced:

- Routing Setup
- Navigation
- Nested Routing
- Dynamic Routing
- Route Parameters
- Navigation Hooks
- Error Routes

---

# 👨‍💻 Author

**Ayush Dubey**

---

# ⭐ Note

This project is part of my React learning journey.  
It focuses on understanding routing concepts by implementing them practically.
