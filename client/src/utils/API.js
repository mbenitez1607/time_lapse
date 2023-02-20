const url = 'http://localhost:3001/api'

// Signup
export const createUser = (data) => {
  return fetch(`${url}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

// Create new timelapse project
export const createNewProject = (data, token) => {
  return fetch(`${url}/project`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
}

// Get all projects
export const getAllProjects = () => {
  return fetch(`${url}/project`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return {
        status: 200,
        data: data,
      }
    })
    .catch((error) => {
      return {
        status: 500,
        error: error,
      }
    })
}

// Get single projects
export const getSingleProject = (id) => {
  return fetch(`${url}/project/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return {
        status: 200,
        data: data,
      }
    })
    .catch((error) => {
      return {
        status: 500,
        error: error,
      }
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
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
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

export const generateTimelapse = (id) => {
  return fetch(`${url}/timelapse/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return {
        status: 200,
        data: data,
      }
    })
    .catch((error) => {
      return {
        status: 500,
        error: error,
      }
    })
}
