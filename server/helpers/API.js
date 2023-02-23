// 🌟 some frameworks or tools may set a default value for process.env.NODE_ENV based on their own conventions. For example, the create-react-app tool sets process.env.NODE_ENV to 'development' by default when running the development server and to 'production' when building for production.
// It's generally a good practice to explicitly set the value of process.env.NODE_ENV in your application to ensure that it behaves consistently across different environments
const isLocal = process.env.NODE_ENV === 'development'
const url = isLocal ? 'http://localhost:3001/api' : ''

import fetch from 'node-fetch'

export const remind = async () => {
  return fetch(`${url}/send/reminder`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
