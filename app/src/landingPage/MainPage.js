import React from 'react';
import HeroPage from './HeroPage'
import InfoIcons from './InfoIcons'
import NewsNavigation from './NewsNavigation';


const MainPage = ({onHeightChanged}) => (
  <>
    <HeroPage  onHeightChanged ={onHeightChanged}/>
    <NewsNavigation/>
    <InfoIcons />
  </>
  
)

export default MainPage;