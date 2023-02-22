const url = 'http://localhost:3001/api'

// Signup
export const createUser = (data) => {
  const token = localStorage.getItem('@token')
  return fetch(`${url}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ` + token,
    },
    body: JSON.stringify(data),
  })
}

//Get user name
export const getUsername = () => {
  const token = localStorage.getItem('@token')
  return fetch(`${url}/users/singleUser`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ` + token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const { status } = data
      return {
        status: status,
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

// Create new timelapse project
export const createNewProject = (data) => {
  const token = localStorage.getItem('@token')
  return fetch(`${url}/project`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ` + token,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      const { status } = data
      return {
        status: status,
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

// Get all projects
export const getAllProjects = () => {
  const token = localStorage.getItem('@token')
  return fetch(`${url}/project`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ` + token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const { status } = data
      return {
        status: status,
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
  const token = localStorage.getItem('@token')
  return fetch(`${url}/project/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ` + token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const { status } = data
      return {
        status: status,
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

// Delete a Project
export const deleteSingleProject = (id) => {
  const token = localStorage.getItem('@token')
  return fetch(`${url}/project/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ` + token,
    },
  })
}

// Edit a Single Project
export const editSingleProject = (id) => {
  const token = localStorage.getItem('@token')
  return fetch(`${url}/project/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ` + token,
    },
    // body: JSON.stringify(data),
  })
}

// Get all Timelapse projects
export const getAllTimelapse = () => {
  const token = localStorage.getItem('@token')
  return fetch(`${url}/timelapse`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ` + token,
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
  const token = localStorage.getItem('@token')
  return fetch(`${url}/timelapse/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ` + token,
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error))
}

// Comments
export const addComment = (data, timelapseID) => {
  const token = localStorage.getItem('@token')
  return fetch(`${url}/timelapse/${timelapseID}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ` + token,
    },
    body: JSON.stringify(data),
  })
}

export const generateTimelapse = (id) => {
  const token = localStorage.getItem('@token')
  return fetch(`${url}/timelapse/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ` + token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const { status } = data
      return {
        status: status,
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

// Send email on account creation
export const sendGreeting = async (email) => {
  const token = localStorage.getItem('@token')
  return fetch(`${url}/send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ` + token,
    },
    body: JSON.stringify(email),
  })
}
