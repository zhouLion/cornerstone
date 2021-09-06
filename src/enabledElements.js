const enabledElements = [];

/**
 * Retrieves a Cornerstone Enabled Element object
 *
 * @param {HTMLElement} element An HTML Element enabled for Cornerstone
 *
 * @returns {EnabledElement} A Cornerstone Enabled Element
 * @memberof EnabledElements
 */

export function getEnabledElement (element) {
  if (element === undefined) {
    throw new Error('getEnabledElement: parameter element must not be undefined');
  }
  for (let i = 0; i < enabledElements.length; i++) {
    if (enabledElements[i].element === element) {
      return enabledElements[i];
    }
  }
  throw new Error('element not enabled');
}

/**
 * Adds a Cornerstone Enabled Element object to the central store of enabledElements
 *
 * @param {EnabledElement} enabledElement A Cornerstone enabledElement Object
 * @returns {void}
 * @memberof EnabledElements
 */
export function addEnabledElement (enabledElement) {
  if (enabledElement === undefined) {
    throw new Error('getEnabledElement: enabledElement element must not be undefined');
  }
  enabledElements.push(enabledElement);
}

/**
 * Adds a Cornerstone Enabled Element object to the central store of enabledElements
 *
 * @param {string} imageId A Cornerstone Image ID
 * @returns {EnabledElement[]} An Array of Cornerstone enabledElement Objects
 * @memberof EnabledElements
 */
export function getEnabledElementsByImageId (imageId) {
  const ees = [];

  enabledElements.forEach(function (enabledElement) {
    if (enabledElement.image && enabledElement.image.imageId === imageId) {
      ees.push(enabledElement);
    }
  });

  return ees;
}

/**
 * Retrieve all of the currently enabled Cornerstone elements
 *
 * @return {EnabledElement[]} An Array of Cornerstone enabledElement Objects
 * @memberof EnabledElements
 */
export function getEnabledElements () {
  return enabledElements;
}
