import React from 'react'
import './App.css';
import BusContent from './components/BusContent';
import NavBar from './components/NavBar';

const id = '7898B605E39613A8'

const url = `https://data.etabus.gov.hk/v1/transport/kmb/stop-eta/${id}`




function App() {
  return (
  <React.Fragment>
    <NavBar />
  <BusContent url={url}/>
  <footer>This is devloped by me</footer>
  </React.Fragment>
  )
}

export default App;
