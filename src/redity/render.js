import { store } from "./store";

/**
 * @param {string} keyName
 * @param {string|number=} index
 */
export function render(keyName, index) {
  if (!store.has(keyName)) return;

  const storeData = store.get(keyName);

  if (index !== undefined) {
    if (storeData.indexed[index]) storeData.indexed[index]();
  } else {
    storeData.render();
  }
}
