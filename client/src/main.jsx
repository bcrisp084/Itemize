import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowswerRouter, RouterProvider } from "react-router-dom";
import Signup from "./Pages/Signup";

const router = createBrowswerRouter([
  {
    path: "/",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode></React.StrictMode>
);
