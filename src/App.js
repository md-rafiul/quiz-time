import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Main from "./Components/Layout/Main";
import Quizs from "./Components/Qiuz/Quizs";
import Statistics from "./Components/Statistics/Statistics";
import Topics from "./Components/Topics/Topics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics></Topics>,
        },
        {
          path: "/home",
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics></Topics>,
        },
        {
          path: "/topics",
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics></Topics>,
        },
        {
          path: "/statistics",
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Statistics></Statistics>,
        },
        {
          path: "/topics/:id",
          loader: async ({ params }) =>
            fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <Quizs></Quizs>,
        },
        {
          path: "/blogs",
          element: <Blog></Blog>,
        },
      ],
    },
    {
      path: "/*",
      element: (
        <div>
          <h2>Error: 404</h2>
          <h4>Following path not found!!</h4>
        </div>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
