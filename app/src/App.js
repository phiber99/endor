import React from 'react';
import './App.css';
import Header from './header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './Home';
import WaterUsage from './components/WaterUsage';
import Footer from './footer/Footer';
import News from './news/News';

function App() {
  const menuItems = [
    {
      key: 1,
      title: "Home",
      pageURL: "/"
    },
    {
      key: 2,
      title: "Water Usage",
      pageURL: "/waterusage"
    }
  ]

  return (
    <div className="App">
      <Router>
        <Header menuItems={menuItems} />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/waterusage" exact>
            <WaterUsage />
          </Route>
          <Route path="/news" exact>
            <News />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
