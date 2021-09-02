import { Viewport } from "src/enabledElements";

const state: {
  viewport: Partial<Viewport>;
} = {
  viewport: {}
};

/**
 * Sets new default values for `getDefaultViewport`
 *
 * @param {Object} viewport - Object that sets new default values for getDefaultViewport
 * @returns {undefined}
 */
export default function (viewport: Partial<Viewport>) {
  state.viewport = viewport || {};
}

export { state };
