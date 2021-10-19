import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../Context/UsAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user} =UseAuth();
    return (
        <div>
            <Route
            {...rest}
            render={({location}) => user.email?children:
        <Redirect
        t to={{
            pathname: "/login",
            state: { from: location }
          }}>
          </Redirect> }
        >

            </Route>
            
        </div>
    );
};

export default PrivateRoute;