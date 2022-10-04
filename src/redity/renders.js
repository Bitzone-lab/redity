import { store } from "./store";

/**
 * @param {string} keyName
 * @param {(string|number)[]=} omits
 */
export function renders(keyName, omits = []) {
  if (!store.has(keyName)) return;

  const storeData = store.get(keyName);

  Object.entries(storeData.indexed).forEach(([key, render]) => {
    if (!omits.map((key) => key.toString()).includes(key)) {
      render();
    }
  });
}
