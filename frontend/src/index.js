// src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";

// RootLayout: Navbar + Outlet for pages + Footer
function RootLayout() {
  console.log("✅ Navbar is rendering");
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

// Create the router with route objects
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // layout for nested pages
    children: [
      { index: true, element: <HomePage /> }, // route for "/"
      { path: "signup", element: <Signup /> },
      { path: "about", element: <AboutPage /> },
      { path: "products", element: <ProductPage /> },
      { path: "pricing", element: <PricingPage /> },
      { path: "support", element: <SupportPage /> },

      // add more nested routes here
    ],
  },
  { path: "*", element: <NotFound /> },
  // optionally add errorElement or other top-level routes
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
