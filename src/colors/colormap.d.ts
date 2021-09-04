import { LUT } from '../enabledElements';
import LookupTable from './lookupTable';
interface ColormapColorsType {
    name: string;
    numColors?: number;
    numOfColors?: number;
    colors: number[][];
}
interface SegmentedData {
    red: number[][];
    green: number[][];
    blue: number[][];
}
interface ColormapSegmentedDataType {
    name: string;
    numColors: number;
    gamma: number;
    segmentedData: SegmentedData;
}
/**
 * Return all available colormaps (id and name)
 * @returns {Array<{id,key}>} An array of colormaps with an object containing the "id" and display "name"
 * @memberof Colors
 */
export declare function getColormapsList(): {
    id: string;
    name: string;
}[];
/**
 * Return a colorMap object with the provided id and colormapData
 * if the Id matches existent colorMap objects (check colormapsData) the colormapData is ignored.
 * if the colormapData is not empty, the colorMap will be added to the colormapsData list. Otherwise, an empty colorMap object is returned.
 * @param {string} id The ID of the colormap
 * @param {Object} colormapData - An object that can contain a name, numColors, gama, segmentedData and/or colors
 * @returns {*} The Colormap Object
 * @memberof Colors
*/
export declare function getColormap(id: string, colormapData?: (ColormapColorsType | ColormapSegmentedDataType)): {
    getId(): string;
    getColorSchemeName(): any;
    setColorSchemeName(name: string): void;
    getNumberOfColors(): any;
    setNumberOfColors(numColors: number): void;
    getColor(index: number): any;
    getColorRepeating(index: number): any;
    setColor(index: number, rgba: Array<number>): void;
    addColor(rgba: Array<number>): void;
    insertColor(index: number, rgba: Array<number>): void;
    removeColor(index: number): void;
    clearColors(): void;
    buildLookupTable(lut: LUT): void;
    createLookupTable(): LookupTable;
    isValidIndex(index: number): boolean;
};
export {};
