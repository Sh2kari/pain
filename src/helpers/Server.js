const API_ROOT = 'http://localhost:8110';

export const getParams = (url, method, types) => {
  return {
    endpoint: API_ROOT + `/${url}`,
    method: method,
    body: {},
    // headers: {
    // 'Accept': 'application/json',
    // 'Content-Type': 'application/json',
    // 'Cache': 'no-cache'
    // },
    options: { timeout: 30000 },
    credentials: 'include',
    types: [...types]
  };
};
