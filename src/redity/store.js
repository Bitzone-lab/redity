/**
 * @typedef StoreData
 * @type {object}
 * @property {string} keyName
 * @property {Record<string, () => void>} indexed
 * @property {()=> void} render
 */

/**
 * @type {Map<string, StoreData>}
 */
export const store = new Map();
