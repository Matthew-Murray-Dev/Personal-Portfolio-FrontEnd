/**
 * Defines the base URL for the API.
 * The default values is overridden by the `API_BASE_URL` environment variable.
 */
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";



/**
 * Defines the default headers for these functions to work with `json-server`
 */
const headers = new Headers();
headers.append("Content-Type", "application/json");

/**
 * Fetch `json` from the specified URL and handle error status codes and ignore `AbortError`s
 *
 * This function is NOT exported because it is not needed outside of this file.
 *
 * @param url
 *  the url for the requst.
 * @param options
 *  any options for fetch
 * @returns {Promise<Error|any>}
 *  a promise that resolves to the `json` data or an error.
 *  If the response is not in the 200 - 399 range the promise is rejected.
 */
async function fetchJson(url, options) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      return Promise.reject({ message: error.message });
    }
  }
}
//~~~~~~~~
export async function createTitanDef(titanDef, signal) {
  const url = `${API_BASE_URL}/HW/TitanDef`;
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ data: titanDef }),
    signal,
  };
  return await fetchJson(url, options);
}

export async function listTitanDef(signal) {
  const url = `${API_BASE_URL}/HW/TitanDef`;
  const options = {
    headers,
    signal,
  };
  return await fetchJson(url, options);
}

export async function listSqlOutput(signal) {
  const url = `${API_BASE_URL}/Projects/CA2`;
  const options = {
    headers,
    signal,
  };
  return await fetchJson(url, options);
}



export async function updateTitanDef(updatedTitanDef, id, signal) {
  const url = `${API_BASE_URL}/HW/TitanDef/${updatedTitanDef.titanDef_id}`;
  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify({ data: updatedTitanDef }),
    signal,
  };
  return await fetchJson(url, options, updatedTitanDef);
}

export async function deleteTitanDef(titanDefId, signal) {
  const url = `${API_BASE_URL}/HW/TitanDef/${titanDefId}`;
  const options = {
    method: "DELETE",
    signal,
  };
  console.log(url)
  return await fetchJson(url,options);
}
