import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import Battle from './components/battle/Battle.jsx'


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route path="/battle"><Battle /></Route>
            <Route path="/gallery"></Route>
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
