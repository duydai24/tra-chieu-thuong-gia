export function createAuthHeader(token) {
  let headers = {
    // 'Set-Cookie': 'HttpOnly;Secure;SameSite=Strict',
  };

  if (token) {
    Object.assign(headers, {
      Authorization: 'Bearer ' + token,
    });
  }
  return headers;
}
