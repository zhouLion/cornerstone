import { Image } from './enabledElements';
export declare const cachedImages: Array<Partial<Image>>;
/** Sets the maximum size of cache and purges cache contents if necessary.
 *
 * @param {number} numBytes The maximun size that the cache should occupy.
 * @returns {void}
 */
export declare function setMaximumSizeBytes(numBytes: number | undefined): void;
/**
 * Puts a new image loader into the cache
 *
 * @param {string} imageId ImageId of the image loader
 * @param {Object} imageLoadObject The object that is loading or loaded the image
 * @returns {void}
 */
export declare function putImageLoadObject(imageId: string, imageLoadObject: {
    promise: Promise<any> | undefined;
    cancelFn: any;
}): void;
/**
 * Retuns the object that is loading a given imageId
 *
 * @param {string} imageId Image ID
 * @returns {void}
 */
export declare function getImageLoadObject(imageId: string): any;
/**
 * Removes the image loader associated with a given Id from the cache
 *
 * @param {string} imageId Image ID
 * @returns {void}
 */
export declare function removeImageLoadObject(imageId?: string): void;
/**
 * @typedef {Object} CacheInformation
 * @property {number} maximumSizeInBytes  The maximum size of the cache in bytes
 * @property {number} cacheSizeInBytes Currently occupied space in the cache in bytes
 * @property {number} numberOfImagesCached Number of ImageLoaders in the cache
 * @returns {void}
 */
/**
 * Gets the current state of the cache
 * @returns {void}
 */
export declare function getCacheInfo(): {
    maximumSizeInBytes: number;
    cacheSizeInBytes: number;
    numberOfImagesCached: number;
};
/**
 * Removes all images from cache
 * @returns {void}
 */
export declare function purgeCache(): void;
/**
 * Updates the space than an image is using in the cache
 *
 * @param {string} imageId Image ID
 * @param {number} newCacheSize New image size
 * @returns {void}
 */
export declare function changeImageIdCacheSize(imageId: string, newCacheSize: number): void;
declare const _default: {
    imageCache: Partial<Record<string, Partial<Image>>>;
    cachedImages: Partial<Image>[];
    setMaximumSizeBytes: typeof setMaximumSizeBytes;
    putImageLoadObject: typeof putImageLoadObject;
    getImageLoadObject: typeof getImageLoadObject;
    removeImageLoadObject: typeof removeImageLoadObject;
    getCacheInfo: typeof getCacheInfo;
    purgeCache: typeof purgeCache;
    changeImageIdCacheSize: typeof changeImageIdCacheSize;
};
export default _default;
