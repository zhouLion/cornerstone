import { getEnabledElement } from './enabledElements';

/**
 * Retrieves any data for a Cornerstone enabledElement for a specific string
 * dataType
 *
 * @param {HTMLElement} element An HTML Element enabled for Cornerstone
 * @param {string} dataType A string name for an arbitrary set of data
 * @returns {*} Whatever data is stored for this enabled element
 */
export function getElementData (element, dataType) {
  const enabledElement = getEnabledElement(element);

  if (enabledElement.data.hasOwnProperty(dataType) === false) {
    enabledElement.data[dataType] = {};
  }

  return enabledElement.data[dataType];
}

/**
 * Clears any data for a Cornerstone enabledElement for a specific string
 * dataType
 *
 * @param {HTMLElement} element An HTML Element enabled for Cornerstone
 * @param {string} dataType A string name for an arbitrary set of data
 *
 * @returns {void}
 */
export function removeElementData (element, dataType) {
  const ee = getEnabledElement(element);

  delete ee.data[dataType];
}
