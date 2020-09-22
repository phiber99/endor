import React from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from 'react-router-dom';
import About from './About';
import './App.css';
import WaterUsage from './components/WaterUsage';
import Footer from './footer/Footer';
import Header from './Header';
import Home from './Home';
import News from './news/News';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/news" exact>
            <News />
          </Route>
        </Switch>
      </Router>
      <WaterUsage />
      <p>A water footprint shows the extent of water use in relation to consumption by people. The water footprint of an individual, community or business is defined as the total volume of fresh water used to produce the goods and services consumed by the individual or community or produced by the business. Water use is measured in water volume consumed (evaporated) and/or polluted per unit of time. A water footprint can be calculated for any well-defined group of consumers (e.g., an individual, family, village, city, province, state or nation) or producers (e.g., a public organization, private enterprise or economic sector), for a single process (such as growing rice) or for any product or service.</p>
      <p>A water footprint shows the extent of water use in relation to consumption by people. The water footprint of an individual, community or business is defined as the total volume of fresh water used to produce the goods and services consumed by the individual or community or produced by the business. Water use is measured in water volume consumed (evaporated) and/or polluted per unit of time. A water footprint can be calculated for any well-defined group of consumers (e.g., an individual, family, village, city, province, state or nation) or producers (e.g., a public organization, private enterprise or economic sector), for a single process (such as growing rice) or for any product or service.</p>
      <p>A water footprint shows the extent of water use in relation to consumption by people. The water footprint of an individual, community or business is defined as the total volume of fresh water used to produce the goods and services consumed by the individual or community or produced by the business. Water use is measured in water volume consumed (evaporated) and/or polluted per unit of time. A water footprint can be calculated for any well-defined group of consumers (e.g., an individual, family, village, city, province, state or nation) or producers (e.g., a public organization, private enterprise or economic sector), for a single process (such as growing rice) or for any product or service.</p>
      <p>A water footprint shows the extent of water use in relation to consumption by people. The water footprint of an individual, community or business is defined as the total volume of fresh water used to produce the goods and services consumed by the individual or community or produced by the business. Water use is measured in water volume consumed (evaporated) and/or polluted per unit of time. A water footprint can be calculated for any well-defined group of consumers (e.g., an individual, family, village, city, province, state or nation) or producers (e.g., a public organization, private enterprise or economic sector), for a single process (such as growing rice) or for any product or service.</p>
      <p>A water footprint shows the extent of water use in relation to consumption by people. The water footprint of an individual, community or business is defined as the total volume of fresh water used to produce the goods and services consumed by the individual or community or produced by the business. Water use is measured in water volume consumed (evaporated) and/or polluted per unit of time. A water footprint can be calculated for any well-defined group of consumers (e.g., an individual, family, village, city, province, state or nation) or producers (e.g., a public organization, private enterprise or economic sector), for a single process (such as growing rice) or for any product or service.</p>
      <p>A water footprint shows the extent of water use in relation to consumption by people. The water footprint of an individual, community or business is defined as the total volume of fresh water used to produce the goods and services consumed by the individual or community or produced by the business. Water use is measured in water volume consumed (evaporated) and/or polluted per unit of time. A water footprint can be calculated for any well-defined group of consumers (e.g., an individual, family, village, city, province, state or nation) or producers (e.g., a public organization, private enterprise or economic sector), for a single process (such as growing rice) or for any product or service.</p>
      <p>A water footprint shows the extent of water use in relation to consumption by people. The water footprint of an individual, community or business is defined as the total volume of fresh water used to produce the goods and services consumed by the individual or community or produced by the business. Water use is measured in water volume consumed (evaporated) and/or polluted per unit of time. A water footprint can be calculated for any well-defined group of consumers (e.g., an individual, family, village, city, province, state or nation) or producers (e.g., a public organization, private enterprise or economic sector), for a single process (such as growing rice) or for any product or service.</p>
      <p>A water footprint shows the extent of water use in relation to consumption by people. The water footprint of an individual, community or business is defined as the total volume of fresh water used to produce the goods and services consumed by the individual or community or produced by the business. Water use is measured in water volume consumed (evaporated) and/or polluted per unit of time. A water footprint can be calculated for any well-defined group of consumers (e.g., an individual, family, village, city, province, state or nation) or producers (e.g., a public organization, private enterprise or economic sector), for a single process (such as growing rice) or for any product or service.</p>
      <p>A water footprint shows the extent of water use in relation to consumption by people. The water footprint of an individual, community or business is defined as the total volume of fresh water used to produce the goods and services consumed by the individual or community or produced by the business. Water use is measured in water volume consumed (evaporated) and/or polluted per unit of time. A water footprint can be calculated for any well-defined group of consumers (e.g., an individual, family, village, city, province, state or nation) or producers (e.g., a public organization, private enterprise or economic sector), for a single process (such as growing rice) or for any product or service.</p>
      <p>A water footprint shows the extent of water use in relation to consumption by people. The water footprint of an individual, community or business is defined as the total volume of fresh water used to produce the goods and services consumed by the individual or community or produced by the business. Water use is measured in water volume consumed (evaporated) and/or polluted per unit of time. A water footprint can be calculated for any well-defined group of consumers (e.g., an individual, family, village, city, province, state or nation) or producers (e.g., a public organization, private enterprise or economic sector), for a single process (such as growing rice) or for any product or service.</p>
      <p>A water footprint shows the extent of water use in relation to consumption by people. The water footprint of an individual, community or business is defined as the total volume of fresh water used to produce the goods and services consumed by the individual or community or produced by the business. Water use is measured in water volume consumed (evaporated) and/or polluted per unit of time. A water footprint can be calculated for any well-defined group of consumers (e.g., an individual, family, village, city, province, state or nation) or producers (e.g., a public organization, private enterprise or economic sector), for a single process (such as growing rice) or for any product or service.</p>

      <Footer />
    </div>
  );
}

export default App;
