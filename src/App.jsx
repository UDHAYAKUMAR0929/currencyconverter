import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';


function App() {
const [amt,setAmt]=useState(1);
const [fromcur,setFromcur]=useState("USD");
const [tocur,setTocur]=useState("JPY");
const [converter,setConverter]=useState(null);
const [exchange,setExchange]=useState(null);

useEffect(()=>{
  const getall=async()=>{
    const url=`https://api.exchangerate-api.com/v4/latest/${fromcur}`;
  const response=await axios.get(url);
  console.log(response);
  console.log(response.data.rates[tocur]);
  setExchange(response.data.rates[tocur]);
  }
  getall();
},[fromcur,tocur])

useEffect(()=>{
if(exchange !==null){
setConverter((amt*exchange).toFixed(2));
}
},[amt,exchange])

const handlechanges1=(e)=>{
  const values=parseFloat(e.target.value)
  setAmt(isNaN(values) ? 0:values )
};

  return (
    <>
      <div className='card'>
        <h1>CURRENCY COVERTER</h1>
       <div className="input-container">
        <label htmlFor="inputt">AMOUNT :</label>
        <input type="NUMBER" id='inputt' value={amt} onChange={handlechanges1}/>
       </div>
       <div className="input-container">
        <label htmlFor="inputt">FROM CURRENCY :</label>
        <select  id="inputt" value={fromcur} onChange={(e)=>setFromcur(e.target.value)}>
          <option value="USD">USD-UNITED STATES DOLLERS</option>
          <option value="EUR">EUR-EURO</option>
          <option value="GBP">GBP-BRITISH POUND STERLING</option>
          <option value="JPY">JPY-JAPAESE YEN</option>
          <option value="AUD">AUD-AUSTRALIAN DOLLAR</option>
          <option value="CAD">CAD-CANADIAN DOLLLAR</option>
          <option value="CNY">CNY-CHINES DOLLAR</option>
          <option value="INR">INR-INDIAN RUPEE</option>
          <option value="BRL">BRL-BRAZILIAN REAL</option>
          <option value="ZAR">ZAR-SOUTH AFRICAN RAND</option>
        </select>
       </div>
       <div className="input-container">
        <label htmlFor="inputt">TO CURRENCY :</label>
        <select  id="inputt" value={tocur} onChange={(e)=>setTocur(e.target.value)}>
        <option value="USD">USD-UNITED STATES DOLLERS</option>
          <option value="EUR">EUR-EURO</option>
          <option value="GBP">GBP-BRITISH POUND STERLING</option>
          <option value="JPY">JPY-JAPAESE YEN</option>
          <option value="AUD">AUD-AUSTRALIAN DOLLAR</option>
          <option value="CAD">CAD-CANADIAN DOLLLAR</option>
          <option value="CNY">CNY-CHINES DOLLAR</option>
          <option value="INR">INR-INDIAN RUPEE</option>
          <option value="BRL">BRL-BRAZILIAN REAL</option>
          <option value="ZAR">ZAR-SOUTH AFRICAN RAND</option>
        </select>
       </div>
       <div className="result">
        <p>{amt} {fromcur} equal to {converter} {tocur}</p>
       </div>
      </div>
    </>
  )
}

export default App
