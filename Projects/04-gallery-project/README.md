# React Image Gallery

A simple React image gallery application that fetches images from the Picsum API and displays them in a responsive card layout.

## Features

- Fetch images using Axios
- Responsive image cards
- Pagination (Previous / Next)
- Loading state while fetching data
- Open image source in a new tab
- Built with React Hooks
- Styled using Tailwind CSS

## Technologies Used

- React JS
- Axios
- Tailwind CSS
- Picsum API

## Project Structure

src/
├── App.jsx
├── Component/
│ └── Cards.jsx
└── main.jsx

## How It Works

1. Images are fetched from the Picsum API.
2. Each page displays 12 images.
3. Users can navigate using Prev and Next buttons.
4. Loading text appears while new data is being fetched.
5. Clicking on a card opens the original image page.

## API Used

https://picsum.photos/v2/list

Example:

https://picsum.photos/v2/list?page=1&limit=12

## Installation

Clone the repository:

```bash
git clone <your-repository-link>
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

## Learning Outcomes

This project helped me practice:

- React Components
- Props
- useState Hook
- useEffect Hook
- API Fetching with Axios
- Conditional Rendering
- Pagination Logic
- Tailwind CSS Styling

## Author

Ayush Dubey
MCA Student