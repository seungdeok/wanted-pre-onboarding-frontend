const apiBaseURL = "https://www.pre-onboarding-selection-task.shop";

export const getApi = async ({ url, headers = {} }) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      ...headers,
    },
  };

  const res = await fetch(apiBaseURL + url, { ...options });

  const data = await res.json();
  return {
    statusCode: res.status,
    data,
  };
};

export const postApi = async ({ url, body, headers = {} }) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      ...headers,
    },
    body: JSON.stringify(body),
  };

  const res = await fetch(apiBaseURL + url, { ...options });
  if (res.headers.get('content-type') &&
    res.headers.get('content-type').indexOf('application/json') !== -1) {
    const data = await res.json();
    return {
      statusCode: res.status,
      ...data,
    };
  }

  return {
    statusCode: res.status,
  }
};

export const putApi = async ({ url, body, headers = {} }) => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      ...headers,
    },
    body: JSON.stringify(body),
  };

  const res = await fetch(apiBaseURL + url, { ...options });

  const data = await res.json();
  return {
    statusCode: res.status,
    ...data,
  };
};

export const deleteApi = async ({ url, headers = {} }) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      ...headers,
    },
  };

  const res = await fetch(apiBaseURL + url, { ...options });

  if (res.headers.get('content-type') &&
    res.headers.get('content-type').indexOf('application/json') !== -1) {
    const data = await res.json();
    return {
      statusCode: res.status,
      ...data,
    };
  }

  return {
    statusCode: res.status,
  }
};