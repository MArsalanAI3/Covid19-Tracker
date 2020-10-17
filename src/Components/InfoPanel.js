import React  from 'react';
import AllCountries from './AllCountries';
import GlobalStats from './GlobalStats';


export default function InfoPanel({currentScreen}) {
    
    if(currentScreen === 0)
    return  <GlobalStats/>
    else if(currentScreen === 1)
    return  <AllCountries/>
    else return   <GlobalStats/>

    
}
