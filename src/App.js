import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import Battle from './components/battle/Battle.jsx'
import Gallery from './components/gallery/Gallery.jsx'
import History from './components/history/History.jsx'
import Statistics from './components/statistics/Statistics.jsx'

function App() {
  const [hamsterData, setHamsterData] = useState([])
  const [updateData, setUpdateData] = useState(0)

  useEffect(() => {

    const getHamsters = async () => {
      try {
        const response = await axios.get('/hamsters')
        setHamsterData(response.data);
      } catch (error) {
        setHamsterData(false)
        console.log(error);
      }
    }

    getHamsters()

  }, [updateData])

  return (
    <Router>
      <div className="App">
        <header>
          {sessionStorage.getItem('enter') && hamsterData ? <Header /> : ''}
        </header>
        <main>
          <Switch>
            <Route path="/battle"><Battle setUpdateData={setUpdateData} /></Route>
            <Route path="/gallery"><Gallery hamsters={hamsterData} setUpdateData={setUpdateData} /></Route>
            <Route path="/statistics"><Statistics /></Route>
            <Route path="/history"><History /></Route>
            <Route path="/"><Home data={hamsterData} /></Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
