/**
 * Creates and compiles a shader.
 *
 * @param {!WebGLRenderingContext} gl The WebGL Context.
 * @param {string} shaderSource The GLSL source code for the shader.
 * @param {number} shaderType The type of shader, VERTEX_SHADER or FRAGMENT_SHADER.
 *
 * @return {!WebGLShader} The shader.
 * @memberof WebGLRendering
 */
function compileShader (gl: WebGLRenderingContext, shaderSource: string, shaderType: number) {

  // Create the shader object
  const shader = gl.createShader(shaderType);

  if (!shader) {
    console.error('unable to create shader');
    return;
  }

  // Set the shader source code.
  gl.shaderSource(shader, shaderSource);

  // Compile the shader
  gl.compileShader(shader);

  // Check if it compiled
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

  if (!success && !gl.isContextLost()) {
    // Something went wrong during compilation; get the error
    const infoLog = gl.getShaderInfoLog(shader);

    console.error(`Could not compile shader:\n${infoLog}`);
  }

  return shader;
}

/**
 * Creates a program from 2 shaders.
 *
 * @param {!WebGLRenderingContext} gl The WebGL context.
 * @param {!WebGLShader} vertexShader A vertex shader.
 * @param {!WebGLShader} fragmentShader A fragment shader.
 * @return {!WebGLProgram} A program.
 * @memberof WebGLRendering
 */
function createProgram (gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) {

  // Create a program.
  const program = gl.createProgram();

  if (!program) {
    console.error('unable to create program');
    return;
  }

  // Attach the shaders.
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);

  // Link the program.
  gl.linkProgram(program);

  // Check if it linked.
  const success = gl.getProgramParameter(program, gl.LINK_STATUS);

  if (!success && !gl.isContextLost()) {
    // Something went wrong with the link
    const infoLog = gl.getProgramInfoLog(program);

    console.error(`WebGL program filed to link:\n${infoLog}`);
  }

  return program;
}

/**
 * Creates a program from 2 shaders source (Strings)
 * @param  {!WebGLRenderingContext} gl              The WebGL context.
 * @param  {!WebGLShader} vertexShaderSrc   Vertex shader string
 * @param  {!WebGLShader} fragShaderSrc Fragment shader string
 * @return {!WebGLProgram}                 A program
 * @memberof WebGLRendering
 */
export default function (gl: WebGLRenderingContext, vertexShaderSrc: WebGLShader, fragShaderSrc: WebGLShader) {
  const vertexShader = compileShader(gl, vertexShaderSrc, gl.VERTEX_SHADER);
  const fragShader = compileShader(gl, fragShaderSrc, gl.FRAGMENT_SHADER);


  return createProgram(gl, vertexShader, fragShader);
}
