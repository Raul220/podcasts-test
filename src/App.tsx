import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { PodcastDetail } from './pages/PodcastDetail'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/podcast/:podcastId" component={PodcastDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
