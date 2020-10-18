import React from 'react';
import HeroPage from './HeroPage'
import NewsNavigation from './NewsNavigation';
import WaterUsageNavigation from './WaterUsageNavigation';


const MainPage = ({ onHeightChanged }) => (
  <>
    <HeroPage onHeightChanged={onHeightChanged} />
    <NewsNavigation />
    <WaterUsageNavigation />
  </>

)

export default MainPage;