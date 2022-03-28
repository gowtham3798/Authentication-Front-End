import React from 'react';
import { useState} from 'react';

export default function Karat(props) {
  const{karatOptions,Currency,selectedKarat,selectedCurrency,onChangeCurrency,onChangeKarat,onChangeKaratValue,
  displayKarat,amount} = props
  const [quantity,setQuantity] = useState()
  const[karatAmount,setKaratAmount] = useState(1)

  // let quatintyToKarat = quantity * karatAmount ;
  // console.log(quantity)
  return (
    <div>
       {/* Quantity <input type="number" className='input' onChange={(e) => setQuantity(e.target.value)}/>
       <br/><br />
            Karat
            <input type="text" className='input' value={displayKarat}  onChange={onChangeKaratValue}/>
            <select value={selectedKarat} className='input' onChange={onChangeKarat}>
              {karatOptions.map((options) => 
                <option key={options} value={options} >{options}</option>
                )}
            </select>
       <br/><br />
        Currency
        <select value={selectedCurrency} className='input' onChange={onChangeCurrency}>
          {Currency.map((cur,index) => 
          <option key={index} value={cur}>{cur}</option>
          )}
        </select> */}
        <h1>Logged in Successfully!!!</h1>
    </div>
  )
}
