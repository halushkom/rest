import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Reservation } from "./components/reservation/reservation";

export default function useRoutes() {
    return(
        <Switch>
            <Route path="/reservation" exact>
                <Reservation />
            </Route>
            <Redirect to="/home"/>
        </Switch>
    );
}
