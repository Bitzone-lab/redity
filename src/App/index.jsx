import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Indexed from "./Indexed";
import Rendering from "./Rendering";
import Sidebar from "./Sidebar";
import Started from "./Started";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    children: [
      {
        path: "/",
        element: <Started />,
      },
      {
        path: "/rendering",
        element: <Rendering />,
      },
      {
        path: "/indexed",
        element: <Indexed />,
      },
    ],
  },
]);

export default function App() {
  return (
    <div className="app">
      <nav>
        <h1>Redity</h1>
        <a
          href="https://github.com/Bitzone-lab/redity"
          target="_blank"
          rel="noreferrer"
        >
          Source
        </a>
      </nav>
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}
