import React from 'react';
import {  useEffect,useState } from "react";

function Display(props){
    const [tipAmount,setTip] = useState();
    const [totalAmount,setTotal] = useState();
    useEffect(()=>{
        setTip(sessionStorage.getItem("tipAmount"));
        setTotal(sessionStorage.getItem("totalAmount"))
      },[props.tipAmount,props.totalAmount]);
  
    
    const resetbtn = (e)=>{
        sessionStorage.clear();
        
    }

        return(
            <div className="col">
                <div className="output-div m-5 p-4">
                <div className="row">
                    <div className="col" >
                        <h6 className="p-3">Tip Amount<br/> <span>/Person</span></h6>
                    </div>
                    <div className="col">
                        <h1 className="p-3">{tipAmount  && isNaN(tipAmount) ? "$ 0.00"  : "$" + Number(tipAmount).toFixed(2)}</h1> {/*Buraya başka bişey gelebilir?*/}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h6 className="p-3">Total Amount<br/><span>/Person</span></h6>
                    </div>
                    <div className="col">
                        <h1 className="p-3">{totalAmount && isNaN(tipAmount) ?  "$ 0.00" :  "$" +  Number(totalAmount).toFixed(2)}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className = "col">
                    <button className="btn w-100" type="button" id="reset-btn" onClick={(e)=>resetbtn(e)}>RESET</button>
                    </div>
                </div>
                </div>
            </div>
        
    
        );
}
export default Display;