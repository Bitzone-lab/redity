import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from "./Sidebar";
import Introduction from "./Introduction";
import Started from "./Started";
import Rendering from "./Rendering";
import Indexed from "./Indexed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    children: [
      {
        path: "/",
        element: <Introduction />,
      },
      {
        path: "/started",
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
