export function createUploadHeader(token) {
  const headers = {
    'Content-Type': 'multipart/form-data',
    'Set-Cookie': 'HttpOnly;Secure;SameSite=Strict',

  };
  if (token) {
    Object.assign(headers, {'Authorization': 'Bearer ' + token});
  }

  return headers;
}
