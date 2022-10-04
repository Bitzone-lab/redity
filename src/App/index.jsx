import { RouterProvider, createHashRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Introduction from "./Introduction";
import Started from "./Started";
import Rendering from "./Rendering";
import Groups from "./Groups";
import PageNotFound from "./PageNotFound";

const router = createHashRouter([
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
        path: "/groups",
        element: <Groups />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default function App() {
  return (
    <div className="app">
      <nav>
        <h1>Redity</h1>
        <div>
          <img
            className="badge"
            src="https://badge.fury.io/js/redity.svg"
            alt=""
          />
          <a
            href="https://github.com/Bitzone-lab/redity"
            target="_blank"
            rel="noreferrer"
          >
            Source
          </a>
        </div>
      </nav>
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}
