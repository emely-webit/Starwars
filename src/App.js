import React, { Component } from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import People from './components/People'
import Starships from './components/Starships'
import Species from './components/Species'
import Planets from './components/Planets'
import Vehicles from './components/Vehicles'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <main className="container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/people' component={People} />
            <Route path='/planets' component={Planets} />
            <Route path='/species' component={Species} />
            <Route path='/starships' component={Starships} />
            <Route path='/vehicles' component={Vehicles} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

export default App
