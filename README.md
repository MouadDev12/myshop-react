# 🛍️ MyShop - Modern React E-Commerce Application

A professional, responsive, and feature-rich e-commerce web application built with **React**, **Tailwind CSS**, and modern web technologies.



## 🚀 Overview

**MyShop** is a seamless shopping experience demonstrating state-of-the-art frontend development practices. It features a dynamic product catalog, realtime cart management, user authentication simulation, and a sleek dark mode.

The application is built with performance and user experience in mind, utilizing smooth transitions and a mobile-first design system.

## ✨ Key Features

- **🎨 Modern UI/UX**: Clean, minimalist design with **Tailwind CSS** and **Glassmorphism** effects.
- **🌙 Dark Mode**: Fully integrated dark/light theme switching with persistence.
- **🛒 Smart Cart System**:
  - Real-time add/remove functionality.
  - Quantity adjustments.
  - Price calculation with tax estimates.
  - **Context API** for global state management.
- **⚡ Dynamic Filtering**: Browse products by category (Electronics, Fashion, Gaming) instantly.
- **🔐 Authentication**: Secure login flow using Context API (simulated auth).
- **💳 Checkout Process**: A professional multi-step checkout form with validation and success states.
- **📱 Fully Responsive**: Optimized for generic desktops, tablets, and mobile devices.
- **🎞️ Smooth Animations**: Interactive elements powered by **Framer Motion**.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://reactjs.org/) (Vite)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Routing**: [React Router Dom](https://reactrouter.com/)
- **State Management**: React Context API

## 📂 Project Structure

```bash
src/
├── components/          # Reusable UI components
│   ├── CategoryFilter.jsx
│   ├── DarkModeToggle.jsx
│   ├── Header.jsx
│   ├── ProductCard.jsx
│   └── ...
├── context/             # Global State Management
│   ├── AuthContext.jsx
│   ├── CartContext.jsx
│   └── ThemeContext.jsx
├── data/
│   └── products.js      # Static product catalog
├── pages/               # Main Application Routes
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   └── Products.jsx
├── redux/               # Redux Store (Optional integration)
├── App.jsx              # Main App Component
└── main.jsx             # Entry Point
```

## 🚀 Getting Started

Follow these steps to run the project locally:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/MouadDev12/myshop-React.git
    cd myshop-React
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:5173` to view the app.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---


