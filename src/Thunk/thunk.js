import axios from 'axios'
import { city_history, login, signUp, weather, weather_by_city } from '../Redux/Action/actions';

const request = axios.create({
    baseURL: 'http://localhost:7000',
});

export const signUpUser = (state) => async (dispatch) => {
    try{
        const response = await request.post('/signup', state);
        dispatch(signUp({users: response.data}))
    }
    catch (err) {
        console.log(err);
    } 
}

export const loginUser = (state) => async (dispatch) => {
    try{
        const response = await request.post('/login', state);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("name", response.data.result.name)
        localStorage.setItem("id", response.data.result._id)
        localStorage.setItem("userCity", response.data.result.city)
        dispatch(login({users: response.data, token: response.token}))
    }
    catch (err) {
        console.log(err)
    }
 }

export const location = (state) => async (dispatch) => {
    try{
        const response = await request.get('/dashboard/weather', {
            params: {
                lat: state.lat,
                lon: state.lon,
                userCity: state.userCity,
            }

        });
        dispatch(weather(response.data))
    }
    catch (err) {
        console.log(err)
    }

}

export const cityWeather = (state) => async (dispatch) => {
    try{
        const response = await request.get('/dashboard/city',{
            params:{
                city: state.city,
                name: state.user
            }
        });
        dispatch(weather_by_city(response.data))
    }
    catch (err) {
        console.log(err)
    }
}

export const cityhistory = (state) => async (dispatch) => {
    try{
        const response = await request.get('/history', {
            params: {
                name: state.name
            }
        })
        dispatch(city_history(response.data))
    }
    catch (err) {
        console.log(err);
    }
}

