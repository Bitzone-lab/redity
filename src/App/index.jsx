import { RouterProvider, createHashRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Introduction from "./Introduction";
import Started from "./Started";
import Rendering from "./Rendering";
import Groups from "./Groups";
import PageNotFound from "./PageNotFound";
import Menu from "../components/Menu";
import { useState } from "react";
import LayoutContext from "../contexts/layout-context";

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
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <div className="app">
      <nav
        style={{ opacity: isOpenSidebar ? ".5" : "1", transition: ".3s ease" }}
      >
        <div>
          <Menu onClick={() => setIsOpenSidebar(!isOpenSidebar)} />
          <h1>Redity</h1>
        </div>
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
      <LayoutContext.Provider value={{ isOpenSidebar, setIsOpenSidebar }}>
        <RouterProvider router={router} />
      </LayoutContext.Provider>
    </div>
  );
}
