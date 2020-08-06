const apiPath = (path: string) => `http://127.0.0.1:3000/api/${path}`;

const baseHeaders = () => ({
  "Content-Type": "application/json",
});

const makeHeaders = (headers?: object) =>
  headers !== undefined ? { ...headers, ...baseHeaders() } : baseHeaders();

const postRecordPath = () => apiPath("post-record");

const postRecord = (payload: object, headers?: object) =>
  fetch(postRecordPath(), {
    method: "POST",
    body: JSON.stringify(payload),
    headers: makeHeaders(headers),
  });

const deleteRecordPath = () => apiPath("delete-record");

const deleteRecord = (payload: object, headers?: object) => {
  try {
    const res = fetch(deleteRecordPath(), {
      method: "DELETE",
      body: JSON.stringify(payload),
      headers: makeHeaders(headers),
    });

    return Promise.resolve(res);
  } catch (error) {
    return { error: "Error occured while DELETE'ing data" };
  }
};

export const API = { postRecord, deleteRecord };
