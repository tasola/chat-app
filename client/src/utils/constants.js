export const apiPort = process.env.REACT_APP_API_PORT || 8000

// hostUrl should of course be switched to the URL of the host service once deployed
export const apiUrl =
  process.env.NODE_ENV === 'prod' ? 'hostUrl' : `localhost:${apiPort}`
