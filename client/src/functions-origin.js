export const REACT_APP_CLOUD_FUNCTIONS_ORIGIN = 
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_CF_DEV
    : process.env.REACT_APP_CF_PROD;
