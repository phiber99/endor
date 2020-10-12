import React from 'react';
import HeroPage from './HeroPage'
import InfoIcons from './InfoIcons'


const MainPage = ({onHeightChanged}) => (
  <>
    <HeroPage  onHeightChanged ={onHeightChanged}/>
    <InfoIcons />
  </>
  
)

export default MainPage;