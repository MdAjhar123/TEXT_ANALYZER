
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  const [mode, setMode]= useState ('light'); // Weather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null)
    }, 1500)
  }

  //Toggle Dark Mode
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() =>{
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setInterval(() =>{
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
      
    }
  }
  
  return (
  <>

  {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
  {/* <Navbar/> */}
  <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path="/about" element = {<About mode={mode} />}/>
      </Routes>
      <Routes>
         <Route exact path="/" element = {
          <TextForms showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/> } /> 
      </Routes>
    </div>
  </BrowserRouter>
  </>
  );
}

export default App;
