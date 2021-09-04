declare type IProvider<T> = (type: string, imageId: string) => T;
/**
 * @module Metadata
 */
/**
 * Adds a metadata provider with the specified priority
 * @param {Function} provider Metadata provider function
 * @param {Number} [priority=0] - 0 is default/normal, > 0 is high, < 0 is low
 *
 * @returns {void}
 * @memberof Metadata
 */
export declare function addProvider<T>(provider: IProvider<T>, priority?: number): void;
/**
 * Removes the specified provider
 *
 * @param {Function} provider Metadata provider function
 *
 * @returns {void}
 * @memberof Metadata
 */
export declare function removeProvider(provider: IProvider<any>): void;
/**
 * Gets metadata from the registered metadata providers.  Will call each one from highest priority to lowest
 * until one responds
 *
 * @param {String} type The type of metadata requested from the metadata store
 * @param {String} imageId The Cornerstone Image Object's imageId
 *
 * @returns {*} The metadata retrieved from the metadata store
 * @memberof Metadata
 */
declare function getMetaData<T>(type: string, imageId: string): T | undefined;
declare const _default: {
    addProvider: typeof addProvider;
    removeProvider: typeof removeProvider;
    get: typeof getMetaData;
};
export default _default;
