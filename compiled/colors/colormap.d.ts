import LookupTable from './lookupTable';
interface ColormapColorsType {
    name: string;
    numColors?: number;
    numOfColors?: number;
    colors: Array<number[]>;
}
interface SegmentedData {
    red: Array<number[]>;
    green: Array<number[]>;
    blue: Array<number[]>;
}
interface ColormapSegmentedDataType {
    name: string;
    numColors: number;
    gamma: number;
    segmentedData: SegmentedData;
}
declare type ColorsTypeKeyBuildIn = 'hotIron' | 'pet' | 'hotMetalBlue' | 'pet20Step';
declare type SegmentedDataTypeKeyBuildIn = 'gray' | 'jet' | 'hsv' | 'hot' | 'cool' | 'spring' | 'summer' | 'autumn' | 'winter' | 'bone' | 'copper' | 'spectral' | 'coolwarm' | 'blues';
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
export declare function getColormap(id: ColorsTypeKeyBuildIn | SegmentedDataTypeKeyBuildIn | string, colormapData: (ColormapColorsType | ColormapSegmentedDataType)): {
    getId(): string;
    getColorSchemeName(): any;
    setColorSchemeName(name: string): void;
    getNumberOfColors(): any;
    setNumberOfColors(numColors: any): void;
    getColor(index: any): any;
    getColorRepeating(index: any): any;
    setColor(index: any, rgba: any): void;
    addColor(rgba: any): void;
    insertColor(index: any, rgba: any): void;
    removeColor(index: any): void;
    clearColors(): void;
    buildLookupTable(lut: any): void;
    createLookupTable(): LookupTable;
    isValidIndex(index: any): boolean;
};
export {};
