import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Components/Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [],
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
