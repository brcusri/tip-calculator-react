import './App.css';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import PercButton from './components/percentButton';
import Display from './components/disp';
import React, { useState } from 'react';
function App(){
    const [tip, setTip] = useState();
    const [totalAmount, setTotal] = useState();

    const  setUpper = (tipAmount,totalAmount) => {
      setTip(tipAmount);
      setTotal(totalAmount);
    }
        return (
            <div className="App">
              <div className="container bg-white rounded justify-content-md-center">
                <div className="row align-items-center">
                  <PercButton setUpper={setUpper}/>
                  <Display tipAmount = {tip} totalAmount={totalAmount}/>
                </div>
              </div>
            </div>
        );
}

export default App;
