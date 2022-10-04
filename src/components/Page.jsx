import { useContext } from "react";
import LayoutContext from "../contexts/layout-context";

export default function Page({ children, className = "" }) {
  const { isOpenSidebar, setIsOpenSidebar } = useContext(LayoutContext);

  return (
    <div
      className={className}
      onClick={() => setIsOpenSidebar(false)}
      style={{ opacity: isOpenSidebar ? ".5" : "1", transition: ".3s ease" }}
    >
      {children}
    </div>
  );
}
