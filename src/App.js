import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import infoPanel from './Components/InfoPanel';
import NavBar from './Components/NavBar';
import InfoPanel from './Components/InfoPanel';
import FooterNav from './Components/FooterNav';

function App() {
  
  const screenConfig=useState(0);
  
  return (
    <div >
    <NavBar/>
    <InfoPanel currentScreen={screenConfig[0]}/>
    <FooterNav screenConfig={screenConfig}/>
    </div>
  );
}

export default App;
