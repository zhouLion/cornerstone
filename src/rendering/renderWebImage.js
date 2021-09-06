import setToPixelCoordinateSystem from '../setToPixelCoordinateSystem';
import { renderColorImage } from './renderColorImage';

/**
 * API function to draw a standard web image (PNG, JPG) to an enabledImage
 *
 * @param {EnabledElement} enabledElement The Cornerstone Enabled Element to redraw
 * @param {Boolean} invalidated - true if pixel data has been invalidated and cached rendering should not be used
 * @returns {void}
 * @memberof rendering
 */
export function renderWebImage (enabledElement, invalidated = false) {
  if (enabledElement === undefined) {
    throw new Error('renderWebImage: enabledElement parameter must not be undefined');
  }
  const { canvas, image, viewport } = enabledElement;

  if (image === undefined) {
    throw new Error('renderWebImage: image must be loaded before it can be drawn');
  }
  if (!viewport) {
    throw new Error('renderWebImage: viewport must be defined before it can be drawn');
  }
  if (!viewport.voi) {
    throw new Error('renderWebImage: viewport must have a voi set before it can be drawn');
  }
  // If the viewport ww/wc and invert all match the initial state of the image, we can draw the image
  // Directly. If any of those are changed, we call renderColorImage() to apply the lut
  if (viewport.voi.windowWidth === image.windowWidth &&
        viewport.voi.windowCenter === image.windowCenter &&
        viewport.invert === false) {
    if (!canvas) {
      throw new Error('renderWebImage: canvas must be defined before it can be drawn');
    }
    // Get the canvas context and reset the transform
    const context = canvas.getContext('2d');

    if (!context) {
      throw new Error('renderWebImage: could not get canvas context');
    }
    context.setTransform(1, 0, 0, 1, 0, 0);
    // Clear the canvas
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    // Turn off image smooth/interpolation if pixelReplication is set in the viewport
    context.imageSmoothingEnabled = !viewport.pixelReplication;
    // @ts-ignore
    context.mozImageSmoothingEnabled = context.imageSmoothingEnabled;
    // Save the canvas context state and apply the viewport properties
    setToPixelCoordinateSystem(enabledElement, context);
    const sx = viewport.displayedArea.tlhc.x - 1;
    const sy = viewport.displayedArea.tlhc.y - 1;
    const width = viewport.displayedArea.brhc.x - sx;
    const height = viewport.displayedArea.brhc.y - sy;

    context.drawImage(image.getImage(), sx, sy, width, height, 0, 0, width, height);
  } else {
    renderColorImage(enabledElement, invalidated);
  }
}
