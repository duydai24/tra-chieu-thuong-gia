
export function parseStringToObject(str) {
  try {
    return JSON.parse(str) || {};
  }
  catch (e) {
    return str || {};
  }
}
