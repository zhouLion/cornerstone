export function getRenderCanvas(): HTMLCanvasElement;
export function initRenderer(): void;
export function render(enabledElement: any): HTMLCanvasElement;
export function isWebGLAvailable(): false | RenderingContext | null;
export let isWebGLInitialized: boolean;
