import React from 'react';
import HeroPage from './HeroPage'
import NewsNavigation from './NewsNavigation';
import WaterUsageNavigation from './WaterUsageNavigation';
import DonateBox from '../donatebox/DonateBox'


const MainPage = ({ onHeightChanged }) => (
  <>
    <HeroPage onHeightChanged={onHeightChanged} />
    <NewsNavigation />
    <WaterUsageNavigation />
    <DonateBox />
  </>

)

export default MainPage;