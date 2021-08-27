import React from 'react'
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {

    const token = useSelector((state) => state.Users.token)

    return token ? (
        <Route {...props} />
    ): (
        <Redirect to = {{pathname: '/login'}} />
    )
}

export default PrivateRoute;
