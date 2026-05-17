import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import AppLayout from "./src/components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./src/components/WelcomePage";
import AboutUs from "./src/components/AboutUs";
import Cart from "./src/components/Cart";
import ContactUs from "./src/components/ContactUs";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <div>404 error page not found</div>,
    children: [
      {
        path: "/",
        element: <WelcomePage />,
        errorElement: <div>404 - Page Not Found</div>,
      },
      {
        path: "/res",
        element: <Body />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
