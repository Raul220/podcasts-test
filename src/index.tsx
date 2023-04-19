import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

import App from './App'
import PodcastState from './context/podcastState'

ReactDOM.render(
  <PodcastState>
    <App />
  </PodcastState>,
  document.getElementById('root')
)
