import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home.tsx";
import About from "./pages/about.tsx";
import Projects from "./pages/projects.tsx";
import SmartTrainer from "./pages/project-pages/smartTrainer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
    children: [
      {
        path: "smart-trainer",
        element: <SmartTrainer />,
      },
      {
        path: "another-project",
        element: <h1>Project 2</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
