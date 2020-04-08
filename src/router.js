import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './Home'
import Dashboard from './components/Dashboard'

ReactDOM.render(<App />, document.getElementById('root'));

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dash" component={Dashboard} />
        </Switch>
    )
}

export default Router