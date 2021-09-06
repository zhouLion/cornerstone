import { render, initRenderer, getRenderCanvas, isWebGLAvailable, isWebGLInitialized } from './renderer';
import createProgramFromString from './createProgramFromString';
import textureCache from './textureCache';

/**
 * @module WebGLRendering
 */
const mod = {
  createProgramFromString,
  renderer: {
    render,
    initRenderer,
    getRenderCanvas,
    isWebGLAvailable
  },
  textureCache
};

Object.defineProperty(mod, 'isWebGLInitialized', {
  enumerable: true,
  configurable: false,
  get: () => isWebGLInitialized
});
export default mod;
