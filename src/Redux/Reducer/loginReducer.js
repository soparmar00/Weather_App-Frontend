import { CITY_HISTORY, LOGIN, LOGOUT, SIGN_UP, WEATHER, WEATHER_BY_CITY } from "../Action/actions";

const initialState = {
    users: {},
    token: localStorage.getItem("token"),
    weatherLL: [],
    weatherCity: [],
    fetchCityHistory: {},
    fetchLoginHistory: {},
    name: localStorage.getItem('name'),
    id: localStorage.getItem('id'),
    userCity: localStorage.getItem('userCity')
}

export default function Users(state = initialState, action) {

    switch(action.type){
        case SIGN_UP:
            return{
                ...state,
                users: action.payload.users
            }
        case LOGIN:
            return{
                ...state,
                users: action.payload.users
            }
        case LOGOUT:
            return{
                ...state,
                token: null,
            }
        case WEATHER:
            return{
                ...state,
                weatherLL: action.payload
            }

        case WEATHER_BY_CITY:
            return{
                ...state,
                weatherCity: action.payload
            }
        case CITY_HISTORY:
            return{
                ...state,
                fetchCityHistory: action.payload
            }
        default:
            return state
    }
    
}