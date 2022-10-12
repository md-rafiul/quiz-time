import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Components/Layout/Main";
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
