import fetch from 'node-fetch'

export const remind = async () => {
  return fetch('http://localhost:3001/api/send/reminder', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
