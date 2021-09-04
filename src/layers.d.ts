import { EnabledElementLayer, Image } from './enabledElements';
/**
 * Rescale the target layer to the base layer based on the
 * relative size of each image and their pixel dimensions.
 *
 * This function will update the Viewport parameters of the
 * target layer to a new scale.
 *
 * @param {EnabledElementLayer} baseLayer The base layer
 * @param {EnabledElementLayer} targetLayer The target layer to rescale
 * @returns {void}
 * @memberof EnabledElementLayers
 */
export declare function rescaleImage(baseLayer: EnabledElementLayer, targetLayer: EnabledElementLayer): void;
/**
 * Add a layer to a Cornerstone element
 *
 * @param {HTMLElement} element The DOM element enabled for Cornerstone
 * @param {Image} image A Cornerstone Image object to add as a new layer
 * @param {Object} options Options for the layer
 *
 * @returns {String} layerId The new layer's unique identifier
 * @memberof EnabledElementLayers
 */
export declare function addLayer(element: HTMLElement, image: Image, options: any): string;
/**
 * Remove a layer from a Cornerstone element given a layer ID
 *
 * @param {HTMLElement} element The DOM element enabled for Cornerstone
 * @param {String} layerId The unique identifier for the layer
 * @returns {void}
 * @memberof EnabledElementLayers
 */
export declare function removeLayer(element: HTMLElement, layerId: string | undefined): void;
/**
 * Retrieve a layer from a Cornerstone element given a layer ID
 *
 * @param {HTMLElement} element The DOM element enabled for Cornerstone
 * @param {String} layerId The unique identifier for the layer
 * @return {EnabledElementLayer} The layer
 * @memberof EnabledElementLayers
 */
export declare function getLayer(element: HTMLElement, layerId: string): EnabledElementLayer | undefined;
/**
 * Retrieve all layers for a Cornerstone element
 *
 * @param {HTMLElement} element The DOM element enabled for Cornerstone
 *
 * @return {EnabledElementLayer[]} An array of layers
 * @memberof EnabledElementLayers
 */
export declare function getLayers(element: HTMLElement): EnabledElementLayer[];
/**
 * Retrieve all visible layers for a Cornerstone element
 *
 * @param {HTMLElement} element The DOM element enabled for Cornerstone
 *
 * @return {EnabledElementLayer[]} An array of layers
 * @memberof EnabledElementLayers
 */
export declare function getVisibleLayers(element: HTMLElement): EnabledElementLayer[];
/**
 * Set the active layer for a Cornerstone element
 *
 * @param {HTMLElement} element The DOM element enabled for Cornerstone
 * @param {String} layerId The unique identifier for the layer
 * @returns {void}
 * @memberof EnabledElementLayers
 */
export declare function setActiveLayer(element: HTMLElement, layerId: string): void;
/**
 * Set a new image for a specific layerId
 *
 * @param {HTMLElement} element The DOM element enabled for Cornerstone
 * @param {Image} image The image to be displayed in this layer
 * @param {String} [layerId] The unique identifier for the layer
 * @returns {void}
 * @memberof EnabledElementLayers
 */
export declare function setLayerImage(element: HTMLElement, image: Image, layerId?: string): void;
/**
 * Retrieve the currently active layer for a Cornerstone element
 *
 * @param {HTMLElement} element The DOM element enabled for Cornerstone
 * @return {EnabledElementLayer} The currently active layer
 * @memberof EnabledElementLayers
 */
export declare function getActiveLayer(element: HTMLElement): EnabledElementLayer | undefined;
/**
 * Purge the layers
 *
 * @param {HTMLElement} element The DOM element enabled for Cornerstone
 *
 * @returns {void}
 */
export declare function purgeLayers(element: HTMLElement): void;
