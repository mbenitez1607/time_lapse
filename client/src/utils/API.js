const url = 'http://localhost:3001'

export const createNewTimelapse = (data) => {
  return fetch(`${url}/api/timelapse`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
}
