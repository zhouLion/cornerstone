import { renderColorImage } from './renderColorImage';
import { renderGrayscaleImage } from './renderGrayscaleImage';
import { renderWebImage } from './renderWebImage';
import { renderPseudoColorImage } from './renderPseudoColorImage';
import { renderLabelMapImage } from './renderLabelMapImage';
import renderToCanvas from './renderToCanvas';
/**
 * @module rendering
 */
export default {
    colorImage: renderColorImage,
    grayscaleImage: renderGrayscaleImage,
    webImage: renderWebImage,
    pseudoColorImage: renderPseudoColorImage,
    labelMapImage: renderLabelMapImage,
    toCanvas: renderToCanvas
};
