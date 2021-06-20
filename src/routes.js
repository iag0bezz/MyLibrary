import React from 'react'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { createBrowserHistory } from 'history'

import {
    Home
} from './pages'

export default function Routes() {
    return (
        <BrowserRouter history={createBrowserHistory()}>
            <Switch>
                <Route exact path="/" component={Home} />

                
            </Switch>
        </BrowserRouter>
    )
}