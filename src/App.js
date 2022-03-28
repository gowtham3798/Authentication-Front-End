import React,{ useEffect,useState} from "react";
// import { useEffect,useState} from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import Karat  from './Karat';
import Output from "./Output";
import SignIn from './SignIn';
import SignUp from './SignUp';
import Success from './Success';
import Failed from './Failed';
import Home from './Home';
import EmailVerification from "./emailVerification";
import EmailSuccess from "./emailSuccess";


export default function App() {
  const[karatOptions,setKaratOptions] = useState([])
  const[Currency,setCurrency] = useState([])
  const[KaratPrice,setKaratPrice] = useState()
  const[CurrencyValue,setCurrencyValue] = useState()
  const[exchangeRates,setExchangeRates] = useState()
  const[karatAmount,setKaratAmount] = useState(1)
  const[output,setOutput] = useState()
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  // let toAmount, fromAmount
  // if (amountInFromCurrency) {
  //   fromAmount = karatAmount
  //   toAmount = karatAmount * 2;
  // } 

  
  // // console.log(CurrencyValue.toString())
  
  // const API_KEY ="96v27ger1hrtk5yrkjte3dkvsj29nwk4o00uhz9ody61slfy0aqs9cooj6jo";
  // const Base_URL = `https://www.metals-api.com/api/carat?access_key=${API_KEY}`;
  // const Currency_URL = `https://api.fastforex.io/fetch-all?api_key=c532412f57-f609b6dbda-r8gz7w`;
  // // const Currency_URL = "https://62299cc7be12fc4538a2d624.mockapi.io/currency";


  // const Calaculate_URL=`${Base_URL}&base=${CurrencyValue}`

  // console.log(KaratPrice) 
  // console.log(exchangeRates)
  // // console.log(karatAmount)
  // console.log(karatOptions)
  // // console.log(Currency) 
  // useEffect(() => {
  //   fetch(Base_URL)
  //   .then((res) => res.json())
  //   .then((data) => {
      
  //   const FirstKarat = Object.values(data.rates)[1]
  //   setKaratOptions([data.base,...Object.keys(data.rates)])
  //   setKaratPrice(FirstKarat)
  //   setExchangeRates(FirstKarat)
  //   console.log(FirstKarat)
  //   }
  //   );
  // },[CurrencyValue])

  // useEffect(() => {
  //   fetch(Currency_URL)
  //   .then((res) => res.json())
  //   .then((data) => {
  //   setCurrency([data.base,...Object.keys(data.results)])
  //   setCurrencyValue(data.base)
  //   }
  //   )
  // },[])

  // useEffect(() => {
  //   if (CurrencyValue != null && output != null) {
  //     fetch(`${Base_URL}?base=${CurrencyValue}`)
  //       .then(res => res.json())
  //       .then(data => {setExchangeRates(Object.values(data.rates[output]))
  //                      console.log(CurrencyValue)})
  //   }
  // }, [CurrencyValue,output])

  // useEffect(() => {
  //   fetch(Calaculate_URL)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setAmount(data)
  //   })
  // },[])

  function handleKaratChange(e){
   setKaratAmount(e.target.value)
   setAmountInFromCurrency(true)
  }

  return (
    <div className="App">
      {/* <h1>Convert</h1>
      <Karat 
      karatOptions={karatOptions} 
      Currency={Currency} 
      selectedKarat={KaratPrice} 
      selectedCurrency={CurrencyValue}
      onChangeCurrency={((e) =>setCurrencyValue(e.target.value))}
      onChangeKarat={((e) => setKaratPrice(e.target.value))}
      onChangeKaratValue={handleKaratChange} 
      displayKarat = {exchangeRates}
      // displayKarat = {((e) => setExchangeRates(e.target.value))}
      // displayKarat = {karatAmount}
      // amount = {fromAmount}
      />
      <div className="equals">=</div>
      <Output output={output}/> */}

      <Routes>

        <Route exact path="/" element={<Home/>}></Route>

        <Route exact path="/signup" element={<SignUp/>}></Route>

        <Route exact path="/success" element={<Success />}></Route>
        
        <Route  exact path="/signin" element={<SignIn />}></Route>

        <Route  exact path="/home" element={<Karat />}></Route>

        <Route exact path="/failed" element={<Failed />}></Route>

        <Route exact path="/email" element={<EmailVerification />}></Route>

        <Route exact path="/emailsuccess" element={<EmailSuccess />}></Route>

      </Routes>
    </div>
  );
}


