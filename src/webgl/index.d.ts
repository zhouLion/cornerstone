import { render, initRenderer, getRenderCanvas, isWebGLAvailable } from './renderer';
import createProgramFromString from './createProgramFromString';
import textureCache from './textureCache';
/**
 * @module WebGLRendering
 */
declare const mod: {
    createProgramFromString: typeof createProgramFromString;
    renderer: {
        render: typeof render;
        initRenderer: typeof initRenderer;
        getRenderCanvas: typeof getRenderCanvas;
        isWebGLAvailable: typeof isWebGLAvailable;
    };
    textureCache: typeof textureCache;
};
export default mod;
