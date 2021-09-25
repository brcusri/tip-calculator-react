import {  useState,useRef, useEffect } from "react";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Icond from "./images/icon-dollar.svg";
import Iconp from "./images/icon-person.svg";


function PercButton (props){
    const [billvalue, setBill] = useState();
    const [NumofPeople, setNop] = useState();
    const [customval,setCustom] = useState();
    const [total,setTotal] = useState(0);
    const inputRef = useRef();

    useEffect(()=>{
        if(!total)
        {
            setTotal(0);
        }
        inputRef.current = 'cant be zero';
    },[total,billvalue,NumofPeople])
    
    const handleOnClick= (tipperc) => {
        let tipAmount = (billvalue*tipperc)/NumofPeople;
        let sum =total+tipAmount;
        setTotal(sum);
        sessionStorage.setItem("tipAmount",tipAmount);
        sessionStorage.setItem("totalAmount",sum);
        props.setUpper(tipAmount,sum);
        
    }

        return(
            <div className="col">
               <form className="p-5"> 
                <div className="col-12" >
                    <label>Bill</label>
                    <br/>
                    {!billvalue || billvalue === "0" ?  <span className="alert" ref = {inputRef}>{inputRef.current}</span>   : null}
                    <input type="number" 
                        value = {billvalue} 
                        placeholder=" 0.0"
                        className="form-control col-md-4" 
                        onChange={(e) => setBill(e.target.value)} 
                        style={{backgroundImage:'url('+Icond+')',}}/>
                </div>
                <div className="col-12">
                    <label className="my-3">Select Tip %</label>
                    <div className="clearfix"></div>
                    <div className="row">
                        <div className="col-sm-4">
                            <button type="button" className="btn w-100" onClick={() =>handleOnClick(0.05)}>5%</button>
                        </div>
                        <div className="col-sm-4">
                            <button type ="button" className="btn w-100" onClick={() => handleOnClick(0.10)}>10%</button>
                        </div>
                        <div className="col-sm-4">
                            <button type = "button" className="btn w-100" onClick={() => handleOnClick(0.15)}>15%</button>
                        </div>
                        <div className="col-sm-4">
                            <button type = "button" className="btn w-100" onClick={() =>handleOnClick(0.25)}>25%</button>
                        </div>
                        <div className="col-sm-4">
                            <button type ="button" className="btn w-100" onClick={() => handleOnClick(0.50)}>50%</button>
                        </div>
                        <div className="col-sm-4">
                            <input type="number" 
                            className="form-control" 
                            value = {customval} 
                            placeholder = "Custom" 
                            onChange={(e) => setCustom(e.target.value)} 
                            onKeyPress={()=>handleOnClick((customval/100))}/>
                        </div>
                    </div>
                </div>
              <div className="col-12" >
                <label >Number of People</label>
                <br/>
                    {!NumofPeople || NumofPeople ==="0" ? <span className="alert" ref = {inputRef}>{inputRef.current}</span> : null}
                        <input type="number"
                        value = {NumofPeople} 
                        className="form-control p-1" 
                        placeholder="0" onChange={(e) => setNop(e.target.value)} 
                        style={{backgroundImage:'url('+Iconp+')',}}/>
              </div>
                </form>
               </div>               
        );
}
export default PercButton;