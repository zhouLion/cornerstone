export declare class Transform {
    m: number[];
    constructor();
    reset(): void;
    clone(): Transform;
    multiply(matrix: {
        m: number[];
    }): void;
    invert(): void;
    rotate(rad: number): void;
    translate(x: number, y: number): void;
    scale(sx: number, sy: number): void;
    transformPoint(px: number, py: number): {
        x: number;
        y: number;
    };
}
