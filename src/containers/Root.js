import React from 'react'

import {Provider} from 'react-redux'

import App from '../routers_acess_user/App'
import Counter from '../components/Counter'

import {store } from '../store'

const Root=()=>(
  <Provider store={store}>
   <Counter/>
  </Provider>
)

export default Root