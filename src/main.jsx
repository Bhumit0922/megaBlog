import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { AuthLabel, Login } from "./components/index.js";
import Allpost from "./pages/Allpost.jsx";
import AddPost from "./pages/AddPost.jsx";
import EditPost from "./pages/EditPost.jsx";
import Post from "./pages/Post.jsx";
import ReactDOM from "react-dom/client";
import SignUp from "./pages/Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLabel authentication={false}>
            <Login />
          </AuthLabel>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLabel authentication={false}>
            <SignUp />
          </AuthLabel>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLabel authentication>
            <Allpost />
          </AuthLabel>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLabel authentication>
            <AddPost />
          </AuthLabel>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLabel authentication>
            <EditPost />
          </AuthLabel>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
