import { hot } from 'react-hot-loader'
import React from 'react'
/* import { Provider as Redux } from 'react-redux'

import Auth from './providers/auth'
import Router from './router'
import store from './store' */

/* const App = () => (
  <Redux store={store}>
    <Auth>
        <Router/>
    </Auth>
  </Redux>
) */

const App = () => {
    return <input type="text" defaultValue="this is the value"/>
}

export default hot(module)(App)
