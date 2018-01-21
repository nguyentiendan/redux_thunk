
import React from 'react'
import { AppRegistry } from 'react-native'
import {Provider} from 'react-redux'
import configStore from './store/configStore'
import App from './App'

const store = configStore()

const ReduxApp = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent('redux_thunk', () => ReduxApp)
