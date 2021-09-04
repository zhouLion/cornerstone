declare const shaders: {
    int16: Record<string, any>;
    int8: Record<string, any>;
    rgb: Record<string, any>;
    uint16: Record<string, any>;
    uint8: Record<string, any>;
};
declare const dataUtilities: {
    int16: {
        storedPixelDataToImageData: (image: import("../../enabledElements").Image) => Uint8Array;
    };
    int8: {
        storedPixelDataToImageData: (image: import("../../enabledElements").Image) => Uint8Array;
    };
    rgb: {
        storedPixelDataToImageData: (image: import("../../enabledElements").Image) => Uint8Array;
    };
    uint16: {
        storedPixelDataToImageData: (image: import("../../enabledElements").Image) => Uint8Array;
    };
    uint8: {
        storedPixelDataToImageData: (image: import("../../enabledElements").Image) => any;
    };
};
export { shaders, dataUtilities };
