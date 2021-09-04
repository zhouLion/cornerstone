declare const EVENTS: {
    NEW_IMAGE: string;
    INVALIDATED: string;
    PRE_RENDER: string;
    IMAGE_CACHE_MAXIMUM_SIZE_CHANGED: string;
    IMAGE_CACHE_PROMISE_REMOVED: string;
    IMAGE_CACHE_FULL: string;
    IMAGE_CACHE_CHANGED: string;
    WEBGL_TEXTURE_REMOVED: string;
    WEBGL_TEXTURE_CACHE_FULL: string;
    IMAGE_LOADED: string;
    IMAGE_LOAD_FAILED: string;
    ELEMENT_RESIZED: string;
    IMAGE_RENDERED: string;
    LAYER_ADDED: string;
    LAYER_REMOVED: string;
    ACTIVE_LAYER_CHANGED: string;
    ELEMENT_DISABLED: string;
    ELEMENT_ENABLED: string;
};
export default EVENTS;
/**
 * EventTarget - Provides the [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) interface
 *
 * @class
 * @memberof Polyfills
 */
declare class EventTarget {
    private namespaces;
    private listeners;
    constructor();
    addEventNamespaceListener(type: string, callback: EventListener): void;
    removeEventNamespaceListener(type: string): void;
    addEventListener(type: string, callback: EventListener): void;
    removeEventListener(type: string, callback: EventListener): void;
    dispatchEvent(event: Event): boolean;
}
export declare const events: EventTarget;
