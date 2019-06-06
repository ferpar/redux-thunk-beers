import React from 'react'
import {hot} from 'react-hot-loader'

import List from './components/list.js'

class App extends React.Component {
  state = {
    count: 0
  }

  render() {
    const {count} = this.state;
    return (
      <div>
      <h1>thunking...</h1>
      <List />
      </div>
    )
  }
}

export default hot(module)(App)
