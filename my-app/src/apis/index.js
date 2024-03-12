const API = {
    'BASE_URL': process.env.NODE_ENV === 'development' ? import.meta.env.VITE_DEV_MODE : import.meta.env.VITE_PRO_MODE,
    // temporary set to random
    'GET_USER': '/user',
    'EVENTS': '/events',
}

export default API;
