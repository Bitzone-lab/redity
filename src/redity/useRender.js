/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { store } from "./store";
import createHash from "./utils/createHash";

/**
 * @param {string=} keyName
 * @param {string|number=} index
 * @returns
 */
export function useRender(keyName, index) {
  const [, render] = useState(() => createHash());

  useEffect(() => {
    if (!keyName) return;
    if (store.has(keyName)) return;

    store.set(keyName, {
      keyName,
      index,
      render: renderHandler,
    });

    return () => {
      store.delete(keyName);
    };
  }, []);

  function renderHandler() {
    render(createHash());
  }

  return renderHandler;
}
