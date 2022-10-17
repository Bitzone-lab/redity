/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { store } from "./store";

/**
 * @param {string=} keyName
 * @param {string|number=} index
 * @returns
 */
export function useRender(keyName, index) {
  const [, render] = useState();

  useEffect(() => {
    if (!keyName) return;

    const hasStore = store.has(keyName);

    if (!hasStore) {
      const fakeRender = () => null;
      store.set(keyName, {
        keyName,
        indexed: {},
        render: index !== undefined ? fakeRender : renderHandler,
      });
    }

    const storeData = store.get(keyName);

    if (index !== undefined) {
      storeData.indexed = {
        ...storeData.indexed,
        [index.toString()]: renderHandler,
      };
    } else {
      storeData.render = renderHandler;
    }

    return () => {
      if (index !== undefined && store.has(keyName)) {
        const hasIndexed = !!store.get(keyName).indexed[index.toString()];
        if (hasIndexed) {
          delete store.get(keyName).indexed[index.toString()];
        }
      } else {
        store.delete(keyName);
      }
    };
  }, []);

  function renderHandler() {
    render({});
  }

  return renderHandler;
}
