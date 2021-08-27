export const SIGN_UP = "SIGN_UP";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const WEATHER = "WEATHER";
export const WEATHER_BY_CITY = "WEATHER_BY_CITY";
export const CITY_HISTORY = 'CITY_HISTORY'
export const LOGIN_HISTORY = 'LOGIN_HISTORY';

export const signUp = (payload) => ({
    type: SIGN_UP,
    payload,
})

export const login = (payload) => ({
    type: LOGIN,
    payload,
})

export const logout = (payload) => ({
    type: LOGOUT,
    payload,
})

export const weather = (payload) => ({
    type: WEATHER,
    payload,
})

export const weather_by_city = (payload) => ({
    type: WEATHER_BY_CITY,
    payload,
})

export const city_history = (payload) => ({
    type: CITY_HISTORY,
    payload,
})
