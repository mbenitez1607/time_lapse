const url = 'http://localhost:3001/api'

// Create new timelapse project
export const createNewTimelapse = (data, token) => {
  return fetch(`${url}/timelapse`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
}

// Get all Timelapse projects
export const getAllTimelapse = () => {
  return fetch(`${url}/timelapse`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error))
}

// Get a single timelapse project
export const getSingleTimelapse = (id) => {
  return fetch(`${url}/timelapse/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error))
}

// Comments
export const addComment = (data, timelapseID, token) => {
  return fetch(`${url}/timelapse/${timelapseID}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
}
