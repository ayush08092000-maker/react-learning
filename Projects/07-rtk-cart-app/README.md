# 🛒 RTK Cart App

A simple e-commerce cart application built with **React** and **Redux Toolkit**.

This project was created to practice Redux Toolkit in a realistic application by combining:

- Redux Toolkit
- Multiple Redux slices
- `createAsyncThunk()`
- API data fetching
- Cart state management
- LocalStorage
- React Router
- Shared state between components

---

## 🚀 Tech Stack

- React
- Redux Toolkit
- React Redux
- React Router DOM
- Tailwind CSS
- Lucide React
- Vite
- DummyJSON API
- Browser LocalStorage

---

## ✨ Features

### Product Management

- Fetch products from an API
- Display products in a grid
- Show product image, title, brand, price, and rating
- Add products to the cart
- Remove products from the cart

### Cart Management

- Add product to cart
- Remove product from cart
- Display cart item count
- Display cart items
- Change item quantity
- Calculate total price
- Clear cart
- Place order

### Data Persistence

Cart data is stored in browser `localStorage`.

This allows cart data to remain available after refreshing the page.

### Routing

The application contains two main routes:

```text
/       → Products Page
/cart   → Cart Page
```

---

# 📂 Project Structure

```text
07-rtk-cart-app/
│
├── src/
│   │
│   ├── app/
│   │   └── store.js
│   │
│   ├── components/
│   │   ├── AddToCart.jsx
│   │   ├── CartItems.jsx
│   │   └── Header.jsx
│   │
│   ├── features/
│   │   ├── cart/
│   │   │   └── cartSlice.js
│   │   │
│   │   └── products/
│   │       └── productsSlice.js
│   │
│   ├── pages/
│   │   └── Products.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# 🧠 Redux Toolkit Architecture

This project uses two Redux slices:

```text
                    Redux Store
                         │
              ┌──────────┴──────────┐
              │                     │
             cart                product
              │                     │
        cartSlice.js        productsSlice.js
              │                     │
        Cart State          Product State
```

The Redux store is configured in:

```text
src/app/store.js
```

```js
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
    }
});
```

---

# 🛒 Cart Slice

Location:

```text
src/features/cart/cartSlice.js
```

The cart slice manages the cart state.

Initial state:

```js
const initialState = {
    items: localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : [],
};
```

## Cart Reducers

The cart slice contains:

```text
addItem
removeItem
clearCart
```

### `addItem`

Adds a product to the cart.

```js
dispatch(addItem(product));
```

### `removeItem`

Removes a product using its ID.

```js
dispatch(removeItem(product.id));
```

### `clearCart`

Removes all items from the Redux cart state.

```js
dispatch(clearCart());
```

---

# 📦 Product Slice

Location:

```text
src/features/products/productsSlice.js
```

The product slice manages product data fetched from the API.

Initial state:

```js
const initialState = {
    items: [],
    status: undefined,
    error: null,
};
```

---

# 🌐 createAsyncThunk()

Products are fetched using Redux Toolkit's `createAsyncThunk()`.

```js
export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',

    async () => {
        const response = await fetch(
            'https://dummyjson.com/products'
        );

        const data = await response.json();

        return data.products;
    }
);
```

The component dispatches the thunk:

```js
dispatch(fetchProducts());
```

---

# 🔄 Async Redux Flow

The basic flow is:

```text
Component
    │
    │ dispatch(fetchProducts())
    ↓
createAsyncThunk
    │
    ↓
API Request
    │
    ↓
Response
    │
    ↓
fulfilled
    │
    ↓
productsSlice
    │
    ↓
Redux Store
    │
    ↓
useSelector()
    │
    ↓
Products UI
```

---

# 🧩 Multiple Redux Slices

This project demonstrates how multiple slices can be registered in one Redux store.

```js
const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
    }
});
```

Therefore, the Redux state can be accessed as:

### Cart state

```js
state.cart.items
```

### Product state

```js
state.product.items
```

Example:

```js
const products = useSelector(
    (state) => state.product.items
);
```

Cart example:

```js
const cartItems = useSelector(
    (state) => state.cart.items
);
```

---

# 🔗 Provider

The Redux store is provided to the entire React application using `Provider`.

```jsx
<Provider store={store}>
    <App />
</Provider>
```

This is done in:

```text
src/main.jsx
```

Because the application is inside the `Provider`, its components can use:

```js
useSelector()
```

and:

```js
useDispatch()
```

---

# 📖 useSelector()

`useSelector()` is used to read data from the Redux store.

Example:

```js
const products = useSelector(
    (state) => state.product.items
);
```

Cart example:

```js
const cartItems = useSelector(
    (state) => state.cart.items
);
```

---

# 📤 useDispatch()

`useDispatch()` is used to dispatch Redux actions.

Example:

```js
const dispatch = useDispatch();
```

Add product:

```js
dispatch(addItem(product));
```

Remove product:

```js
dispatch(removeItem(product.id));
```

Fetch products:

```js
dispatch(fetchProducts());
```

---

# 💾 LocalStorage

The cart is persisted using browser `localStorage`.

When adding an item:

```js
localStorage.setItem(
    'cart',
    JSON.stringify(state.items)
);
```

When the application starts, the cart is loaded from `localStorage`:

```js
const initialState = {
    items: localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : []
};
```

Basic concept:

```text
Redux State
     ↕
LocalStorage
```

---

# 🧭 React Router

The application uses React Router for navigation.

```jsx
<Routes>

    <Route
        path="/"
        element={<Products />}
    />

    <Route
        path="/cart"
        element={<CartItems />}
    />

</Routes>
```

### Routes

| Route | Component | Purpose |
|---|---|---|
| `/` | `Products` | Display products |
| `/cart` | `CartItems` | Display cart |

---

# 🛍️ Products Page

The Products page:

1. Dispatches `fetchProducts()`
2. Gets products from Redux
3. Displays the products
4. Checks whether a product is already in the cart
5. Allows the user to add or remove products

Read products:

```js
const products = useSelector(
    (state) => state.product.items
);
```

Read cart:

```js
const cartItems = useSelector(
    (state) => state.cart.items
);
```

Check whether a product is already in the cart:

```js
cartItems.find(
    (cartItem) => cartItem.id === product.id
);
```

---

# 🛒 Cart Page

The Cart page displays:

- Cart items
- Product image
- Product title
- Brand
- Quantity
- Price
- Total price
- Remove button
- Place Order button

---

# 🔢 Cart Quantity

The project allows the user to change the quantity of a cart item.

The total price changes according to the quantity:

```text
Total = Price × Quantity
```

Example:

```text
Product A
$20 × 2 = $40

Product B
$15 × 1 = $15

----------------
Total = $55
```

---

# 🧮 Cart Total

The total cart price is calculated using JavaScript's `reduce()`:

```js
cartItems.reduce(
    (sum, item) =>
        item.qty
            ? sum + item.price * item.qty
            : sum + item.price,
    0
)
```

---

# 🧹 Clear Cart and Place Order

When an order is placed, the application:

1. Clears the cart
2. Clears stored cart data
3. Shows an order confirmation
4. Navigates back to the products page

---

# 📚 Redux Toolkit Concepts Practiced

## Redux Fundamentals

- State
- Store
- Action
- Reducer
- Dispatch
- Selector

## Redux Toolkit

- `configureStore()`
- `createSlice()`
- `createAsyncThunk()`
- `extraReducers`
- `useSelector()`
- `useDispatch()`
- `Provider`
- `action.payload`

## Redux Architecture

- Multiple slices
- Feature-based structure
- Centralized state
- Shared state between components

## Async Redux

- API requests
- `createAsyncThunk()`
- `fulfilled`
- Async data handling

## React

- Components
- Props
- `useState`
- `useEffect`
- `useSelector`
- `useDispatch`

## Other Concepts

- React Router
- LocalStorage
- API integration
- Conditional rendering
- `map()`
- `find()`
- `reduce()`

---

# 🧠 Redux Flow Used in This Project

```text
                Redux Store
                     │
        ┌────────────┴────────────┐
        │                         │
      cart                     product
        │                         │
   cartSlice                productsSlice
        │                         │
        ↓                         ↓
   Cart State              Product State
        ↑                         ↑
        │                         │
 useSelector()             useSelector()
        ↑                         ↑
        │                         │
 Components                Components
        │                         │
        └──────── dispatch() ─────┘
```

For API data:

```text
Products Component
       │
       │ dispatch(fetchProducts())
       ↓
createAsyncThunk
       │
       ↓
DummyJSON API
       │
       ↓
fulfilled
       │
       ↓
productsSlice
       │
       ↓
Redux Store
       │
       ↓
useSelector()
       │
       ↓
Products UI
```

---

# 🎯 What I Learned

The main purpose of this project was to understand how Redux Toolkit can be used in a realistic application instead of only using small examples.

The main learning flow was:

```text
createSlice()
      ↓
Create Redux logic
      ↓
configureStore()
      ↓
Register reducers
      ↓
Provider
      ↓
Make store available to React
      ↓
useSelector()
      ↓
Read Redux state
      ↓
useDispatch()
      ↓
Dispatch actions
```

I also learned how multiple application features can have their own Redux slices:

```text
features/
│
├── cart/
│   └── cartSlice.js
│
└── products/
    └── productsSlice.js
```

---

# 📈 Learning Progression

This project was the final project in my Redux Toolkit learning section.

The progression was:

```text
Counter App
    ↓
Redux Toolkit Basics
    ↓
Todo App
    ↓
Redux State Management
    ↓
Posts App
    ↓
createAsyncThunk + API
    ↓
RTK Cart App
    ↓
Multiple Slices + API + LocalStorage
```

---

# ▶️ Run the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL provided by Vite.

---

# 🔮 Future Improvements

Possible improvements for a more complete e-commerce application:

- Product search
- Product categories
- Product details page
- Better loading state
- Proper API error handling
- Update cart quantity through Redux
- Persist quantity changes to LocalStorage
- Better cart persistence logic
- User authentication
- Checkout page
- Order history
- Backend integration
- Payment integration

---

# 📌 Project Status

**Status: Completed**

This project was created as a practical Redux Toolkit project to practice:

> **Redux Toolkit + Multiple Slices + API + LocalStorage + React Router**