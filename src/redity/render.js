import { store } from "./store";

/**
 * @param {string} keyName
 */
export function render(keyName) {
  if (!store.has(keyName)) return;

  const storeData = store.get(keyName);

  storeData.render();
}
