interface Pt {
    x: number;
    y: number;
}
/**
 * Converts a point in the canvas coordinate system to the pixel coordinate system
 * system.  This can be used to reset tools' image coordinates after modifications
 * have been made in canvas space (e.g. moving a tool by a few cm, independent of
 * image resolution).
 *
 * @param {HTMLElement} element The Cornerstone element within which the input point lies
 * @param {{x: Number, y: Number}} pt The input point in the canvas coordinate system
 *
 * @returns {{x: Number, y: Number}} The transformed point in the pixel coordinate system
 * @memberof PixelCoordinateSystem
 */
export default function (element: HTMLElement, pt: Pt): {
    x: any;
    y: any;
};
export {};
