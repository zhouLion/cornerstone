/**
 * Get the appropriate Modality LUT for the current situation.
 *
 * @param {Number} [slope] m in the equation specified by Rescale Intercept (0028,1052).
 * @param {Number} [intercept] The value b in relationship between stored values (SV) and the output units specified in Rescale Type (0028,1054).
 * @param {Function} [modalityLUT] A modality LUT function. Given a stored pixel it returns the modality pixel value.
 *
 * @return {function(*): *} A modality LUT function. Given a stored pixel it returns the modality pixel value.
 * @memberof Internal
 */
export default function (slope: number, intercept: number, modalityLUT: any): (storedPixelValue: number) => any;
