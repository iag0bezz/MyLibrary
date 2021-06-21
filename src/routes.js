import React from 'react'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { createBrowserHistory } from 'history'

import {
    Home,
    Create,
    View
} from './pages'

export default function Routes() {
    return (
        <BrowserRouter history={createBrowserHistory()}>
            <Switch>
                <Route path="/create" component={Create} />
                <Route path="/content/:contentId?" component={View} />
                <Route exact path="/" component={Home} />

                <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
    )
}