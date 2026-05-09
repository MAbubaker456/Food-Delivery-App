import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import AppLayout from "./src/components/AppLayout";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
