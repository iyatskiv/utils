// Start counter from 1 "++uintCounter"
// Another option is to start from Number.MIN_SAFE_INTEGER
// but in that case counter will include negative integers and Zero (0)
let uintCounter = 0; // Number.MIN_SAFE_INTEGER;

function uint() {
  return ++uintCounter;
}

function uintDev() {
  const value = uint();

  if (value >= Number.MAX_SAFE_INTEGER) {
    throw new Error('uint reached MAX_SAFE_INTEGER');
  }

  return value;
}

/**
 * @returns {function}
 */
function pickExportFunctionBasedOnEnv() {
  if (
    typeof process?.env?.NODE_ENV === 'string' &&
    process.env.NODE_ENV.toLowerCase().includes('dev')
  ) {
    return uintDev;
  } else {
    return uint;
  }
}

/** @type {function} */
const exportFunction = pickExportFunctionBasedOnEnv();

export default exportFunction;