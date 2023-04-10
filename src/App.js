
import './App.css';
import { useContext } from 'react';
import { Store } from './Context';
import { useState,useEffect } from 'react';
import SideButtons from './SideButton';
import ErrorBarChart from './ErrorBarChart';
import Footers from './Footer';
import BottomButtons from './BottomButtons';





function App() {
  const { Button1, setButton1, Button2, setButton2, Button3, setButton3 } = useContext(Store)

  useEffect(()=>{

  },[Button1, setButton1, Button2, setButton2, Button3, setButton3])
  return (
    <div className="App">
      <div className='topTitleContainer'>
        <h2>{`CLINICAL TRIALS`}</h2>
        <h1>ARTEMIS - EFFICACY</h1>
        <h2>{`Mean IOP and Mean Change in IOP`}</h2>
        <h3>Mean Change in IOP From Baseline Through Week 12 (ITT Population)<sup>20</sup></h3>
      </div>
      <div className='dataContainer'>
        <ErrorBarChart/>
         <SideButtons/> 
      </div>
      <div className='weeks'>
        <div>Week 2</div>
        <div style={{marginLeft:"375px"}}>Week 6</div>
        <div  style={{marginLeft:"330px"}}>Week 12</div>
      </div>
      <BottomButtons/>
    </div>
  );
}

export default App;


