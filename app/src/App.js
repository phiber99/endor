import {React,useEffect} from 'react';
import './App.css';
import Header from './header/Header';
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Route
} from 'react-router-dom'
import Home from './Home';
import WaterUsage from './components/WaterUsage';
import Footer from './footer/Footer';
import Landingpage from './landingPage/landingpage'

function App() {
  const navPosition = "fixed";
  const location = useLocation();
  useEffect(() => {
    console.log(location)
  }, [location]);
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
        <Header menuItems={menuItems}
                navPosition={navPosition}
        />
        <Switch>
          <Route path="/" exact>
            <Landingpage />
          </Route>
          <Route path="/waterusage" exact>
            <WaterUsage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
  

}




export default App;
