/* eslint-disable import/no-anonymous-default-export */
const API_ROOT =
  process.env.REACT_APP_BACKEND_URL ?? "http://localhost:4000/api";

/**
 * Serialize object to URL params
 *
 * @param {Record<string, unknown>} object
 * @returns {String}
 */
function serialize(object) {
  const params = [];

  for (const param in object) {
    if (Object.hasOwnProperty.call(object, param) && object[param] != null) {
      params.push(`${param}=${encodeURIComponent(object[param])}`);
    }
  }

  return params.join("&");
}

let token = null;

/**
 *
 * @typedef {Object} ApiError
 * @property {{[property: string]: string}} errors
 */

/**
 * @typedef  {Object}   Product
 * @property {String}   title
 * @property {String}   description
 * @property {String}   imageURL
 * @property {Number}   price
 * @property {String}   uniqueName
 */

/**
 * API client
 *
 * @param {String} url The endpoint
 * @param {Object} body The request's body
 * @param {('GET'|'DELETE'|'PUT'|'POST')} [method='GET'] The request's method
 *
 * @throws {@link ApiError API Error}
 *
 * @returns {Promise<Object>} API response's body
 */
const agent = async (url, body, method = "GET", contentType) => {
  const headers = new Headers();

  if (body && !contentType) {
    headers.set("Content-Type", "application/json");
  }

  if (token) {
    headers.set("Authorization", `Token ${token}`);
  }

  const response = await fetch(`${API_ROOT}${url}`, {
    method,
    headers,
    body: body && !contentType ? JSON.stringify(body) : body,
  });
  let result;

  try {
    result = await response.json();
  } catch (error) {
    result = { errors: { [response.status]: [response.statusText] } };
  }

  if (!response.ok) throw result;

  return result;
};

const requests = {
  /**
   * Send a DELETE request
   *
   * @param {String} url The endpoint
   * @returns {Promise<Object>}
   */
  del: (url) => agent(url, undefined, "DELETE"),
  /**
   * Send a GET request
   *
   * @param {String} url The endpoint
   * @param {Object} [query={}] URL parameters
   * @param {Number} [query.limit=10]
   * @param {Number} [query.page]
   * @param {String} [query.author]
   * @param {String} [query.tag]
   * @param {String} [query.favorited]
   * @returns {Promise<Object>}
   */
  get: (url, query = {}) => {
    if (Number.isSafeInteger(query?.page)) {
      query.limit = query.limit ? query.limit : 10;
      query.offset = query.page * query.limit;
    }
    delete query.page;
    const isEmptyQuery = query == null || Object.keys(query).length === 0;

    return agent(isEmptyQuery ? url : `${url}?${serialize(query)}`);
  },
  /**
   * Send a PUT request
   *
   * @param {String} url The endpoint
   * @param {Record<string, unknown>} body The request's body
   * @returns {Promise<Object>}
   */
  put: (url, body) => agent(url, body, "PUT"),
  /**
   * Send a POST request
   *
   * @param {String} url The endpoint
   * @param {Record<string, unknown>} body The request's body
   * @returns {Promise<Object>}
   */
  post: (url, body) => agent(url, body, "POST"),

  /**
   * Send a UPLOAD request
   *
   * @param {String} url The endpoint
   * @param {Record<string, File>} body The request's body
   * @returns {Promise<Object>}
   */
  upload: (url, body) => agent(url, body, "POST", "multipart/form-data"),
};

const Products = {
  /**
   * Get all products
   *
   * @param {Object} query Product's query parameters
   * @param {Number} [query.limit=10]
   * @param {Number} [query.skip]
   * @returns {Promise<ProductsResponse>}
   */
  getAll: (query) => requests.get(`/products`, query),

  /**
   * Create product
   *
   * @param {Object} payload Product's payload
   * @param {Number} [query.imageURL]
   * @param {Number} [query.title]
   * @param {Number} [query.description]
   * @param {Number} [query.price]
   * @returns {Promise<ProductsResponse>}
   */
  create: (payload) => requests.post(`/products`, payload),
};

const Media = {
  /**
   * Create product
   *
   * @param {Object} payload Image Upload
   * @param {File} [File]
   * @returns {Promise<ProductsResponse>}
   */
  upload: (payload) => requests.upload(`/media`, payload),
};

const setToken = (_token) => {
  token = _token;
};

export { Products, Media, setToken };
