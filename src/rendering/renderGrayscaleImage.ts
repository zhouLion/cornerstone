import storedPixelDataToCanvasImageData from '../internal/storedPixelDataToCanvasImageData';
import storedPixelDataToCanvasImageDataRGBA from '../internal/storedPixelDataToCanvasImageDataRGBA';
import setToPixelCoordinateSystem from '../setToPixelCoordinateSystem';
import now from '../internal/now';
import webGL from '../webgl/index';
import getLut from './getLut';
import doesImageNeedToBeRendered from './doesImageNeedToBeRendered';
import initializeRenderCanvas from './initializeRenderCanvas';
import saveLastRendered from './saveLastRendered';
import { EnabledElement, EnabledElementLayer, Image } from 'src/enabledElements';

/**
 * Returns an appropriate canvas to render the Image. If the canvas available in the cache is appropriate
 * it is returned, otherwise adjustments are made. It also sets the color transfer functions.
 *
 * @param {Object} enabledElement The cornerstone enabled element
 * @param {Object} image The image to be rendered
 * @param {Boolean} invalidated Is pixel data valid
 * @param {Boolean} [useAlphaChannel = true] Will an alpha channel be used
 * @returns {HTMLCanvasElement} An appropriate canvas for rendering the image
 * @memberof rendering
 */
function getRenderCanvas (
  enabledElement: EnabledElement | EnabledElementLayer,
  image: Image,
  invalidated = false,
  useAlphaChannel = true
) {
  const canvasWasColor = enabledElement.renderingTools.lastRenderedIsColor === true;

  if (!enabledElement.renderingTools.renderCanvas || canvasWasColor) {
    enabledElement.renderingTools.renderCanvas = document.createElement('canvas');
    initializeRenderCanvas(enabledElement, image);
  }

  const renderCanvas = enabledElement.renderingTools.renderCanvas;

  if (doesImageNeedToBeRendered(enabledElement, image) === false && invalidated !== true) {
    return renderCanvas;
  }

  // If our render canvas does not match the size of this image reset it
  // NOTE: This might be inefficient if we are updating multiple images of different
  // Sizes frequently.
  if (renderCanvas.width !== image.width || renderCanvas.height !== image.height) {
    initializeRenderCanvas(enabledElement, image);
  }

  // Get the lut to use
  let start = now();
  const lut = getLut(image, enabledElement.viewport, invalidated);

  image.stats = image.stats || {};
  image.stats.lastLutGenerateTime = now() - start;

  const renderCanvasData = enabledElement.renderingTools.renderCanvasData;
  const renderCanvasContext = enabledElement.renderingTools.renderCanvasContext;

  // Gray scale image - apply the lut and put the resulting image onto the render canvas
  if (useAlphaChannel) {
    storedPixelDataToCanvasImageData(image, lut, renderCanvasData.data);
  } else {
    storedPixelDataToCanvasImageDataRGBA(image, lut, renderCanvasData.data);
  }

  start = now();
  renderCanvasContext.putImageData(renderCanvasData, 0, 0);
  image.stats.lastPutImageDataTime = now() - start;

  return renderCanvas;
}

/**
 * API function to draw a grayscale image to a given enabledElement
 *
 * @param {EnabledElement} enabledElement The Cornerstone Enabled Element to redraw
 * @param {Boolean} invalidated - true if pixel data has been invalidated and cached rendering should not be used
 * @returns {void}
 * @memberof rendering
 */
export function renderGrayscaleImage (enabledElement: EnabledElement, invalidated = false) {
  if (enabledElement === undefined) {
    throw new Error('drawImage: enabledElement parameter must not be undefined');
  }

  const image = enabledElement.image;

  if (image === undefined) {
    throw new Error('drawImage: image must be loaded before it can be drawn');
  }

  if (!enabledElement.canvas) {
    throw new Error('drawImage: no canvas associated with this enabledElement');
  }
  // Get the canvas context and reset the transform
  const context = enabledElement.canvas.getContext('2d');

  if (!context) {
    throw new Error('drawImage: could not get canvas context');
  }

  context.setTransform(1, 0, 0, 1, 0, 0);

  // Clear the canvas
  context.fillStyle = 'black';
  context.fillRect(0, 0, enabledElement.canvas.width, enabledElement.canvas.height);

  // Turn off image smooth/interpolation if pixelReplication is set in the viewport
  if (!enabledElement.viewport) {
    throw new Error('drawImage: no viewport');
  }
  context.imageSmoothingEnabled = !enabledElement.viewport.pixelReplication;
  // @ts-ignore
  context.mozImageSmoothingEnabled = context.imageSmoothingEnabled;

  // Save the canvas context state and apply the viewport properties
  setToPixelCoordinateSystem(enabledElement, context);

  let renderCanvas;

  if (enabledElement.options && enabledElement.options.renderer &&
    enabledElement.options.renderer.toLowerCase() === 'webgl') {
    // If this enabled element has the option set for WebGL, we should
    // User it as our renderer.
    renderCanvas = webGL.renderer.render(enabledElement);
  } else {
    // If no options are set we will retrieve the renderCanvas through the
    // Normal Canvas rendering path
    renderCanvas = getRenderCanvas(enabledElement, image, invalidated);
  }

  const sx = enabledElement.viewport.displayedArea.tlhc.x - 1;
  const sy = enabledElement.viewport.displayedArea.tlhc.y - 1;
  const width = enabledElement.viewport.displayedArea.brhc.x - sx;
  const height = enabledElement.viewport.displayedArea.brhc.y - sy;

  context.drawImage(renderCanvas, sx, sy, width, height, 0, 0, width, height);

  enabledElement.renderingTools = saveLastRendered(enabledElement);
}

/**
 * API function to draw a grayscale image to a given layer
 *
 * @param {EnabledElementLayer} layer The layer that the image will be added to
 * @param {Boolean} invalidated - true if pixel data has been invalidated and cached rendering should not be used
 * @param {Boolean} [useAlphaChannel] - Whether or not to render the grayscale image using only the alpha channel.
                                        This does not work if this layer is not the first layer in the enabledElement.
 * @returns {void}
 */
export function addGrayscaleLayer (layer: EnabledElementLayer, invalidated = false, useAlphaChannel = false) {
  if (layer === undefined) {
    throw new Error('addGrayscaleLayer: layer parameter must not be undefined');
  }

  const image = layer.image;

  if (image === undefined) {
    throw new Error('addGrayscaleLayer: image must be loaded before it can be drawn');
  }

  layer.canvas = getRenderCanvas(layer, image, invalidated, useAlphaChannel);

  if (!layer.canvas) {
    throw new Error('addGrayscaleLayer: could not get canvas for layer');
  }
  const context = layer.canvas.getContext('2d');

  if (!context) {
    throw new Error('addGrayscaleLayer: could not get canvas context');
  }
  // Turn off image smooth/interpolation if pixelReplication is set in the viewport
  if (!layer.viewport) {
    throw new Error('addGrayscaleLayer: no viewport');
  }
  context.imageSmoothingEnabled = !layer.viewport.pixelReplication;
  // @ts-ignore
  context.mozImageSmoothingEnabled = context.imageSmoothingEnabled;

  layer.renderingTools = saveLastRendered(layer);
}
