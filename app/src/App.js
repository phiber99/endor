import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
import WaterUsage from './components/WaterUsage';
import Footer from './footer/Footer';
import MainPage from './landingPage/MainPage';
import Landingheader from './Landingheader/Landingheader';
import News from './news/News';
import Quiz from './quiz/Quiz';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [heroHeight, setHeroHeight] = useState(0)
  const heroHeightChanged = (height) => {
    setHeroHeight(height)
  }

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
    },
    {
      key: 3,
      title: "News",
      pageURL: "/news"
    },
    {
      key: 4,
      title: "Quiz",
      pageURL: "/quiz"
    }
  ]

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact>
            <Landingheader menuItems={menuItems} heroHeight={heroHeight} />
            <MainPage onHeightChanged={heroHeightChanged} />
          </Route>
          <Route path="/waterusage" exact>
            <Header menuItems={menuItems} />
            <WaterUsage />
          </Route>
          <Route path="/news" exact>
            <Header menuItems={menuItems} />
            <News />
          </Route>
          <Route path="/quiz" exact>
            <Header menuItems={menuItems} />
            <Quiz />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );


}




export default App;
