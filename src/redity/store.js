/**
 * @typedef StoreData
 * @type {object}
 * @property {string} keyName
 * @property {string|number=} index
 * @property {()=> void} render
 */

/**
 * @type {Map<string, StoreData>}
 */
export const store = new Map();
