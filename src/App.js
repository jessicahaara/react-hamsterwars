import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import Battle from './components/battle/Battle.jsx'
import Gallery from './components/gallery/Gallery.jsx'


function App() {
  const [data, setData] = useState([])
  const [updateData, setUpdateData] = useState(0)

  useEffect(() => {

    const getHamsters = async () => {
      try {
        const response = await axios.get('http://localhost:1111/hamsters')
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getHamsters()
  }, [updateData])

  return (
    <Router>
      <div className="App">
        <header>
          {sessionStorage.getItem('enter') ? <Header /> : ''}
        </header>
        <main>
          <Switch>
            <Route path="/battle"><Battle setUpdateData={setUpdateData}/></Route>
            <Route path="/gallery"><Gallery hamsters={data} setUpdateData={setUpdateData}/></Route>
            <Route path="/statistics"></Route>
            <Route path="/history"></Route>
            <Route path="/"><Home /></Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
