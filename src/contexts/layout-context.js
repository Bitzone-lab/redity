import { createContext } from "react";

const LayoutContext = createContext({
  isOpenSidebar: false,
  setIsOpenSidebar: () => null,
});

export default LayoutContext;
