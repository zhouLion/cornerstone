import { renderColorImage } from './renderColorImage';
import { renderGrayscaleImage } from './renderGrayscaleImage';
import { renderWebImage } from './renderWebImage';
import { renderPseudoColorImage } from './renderPseudoColorImage';
import { renderLabelMapImage } from './renderLabelMapImage';
import renderToCanvas from './renderToCanvas';
declare const _default: {
    colorImage: typeof renderColorImage;
    grayscaleImage: typeof renderGrayscaleImage;
    webImage: typeof renderWebImage;
    pseudoColorImage: typeof renderPseudoColorImage;
    labelMapImage: typeof renderLabelMapImage;
    toCanvas: typeof renderToCanvas;
};
/**
 * @module rendering
 */
export default _default;
