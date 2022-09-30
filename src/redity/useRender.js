import { useState } from "react";
import createHash from "./utils/createHash";

export function useRender() {
  const [, render] = useState(() => createHash());

  return () => render(createHash());
}
