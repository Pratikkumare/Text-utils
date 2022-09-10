import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
// import Alert from './components/Alert'; 
import React, { useState } from 'react';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  //   const showAlert = (message, type) => {
  //     setAlert({
  //         msg: message,
  //         Type: type
  //     })
  // }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // showAlert("Dark mode has been enable", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert("Light mode has been enable", "success")
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Alert alert={alert}/> */}
      <div className="container my-3">
            {/* <About /> */}        
          <TextForm heading="Enter the text to analyze below" mode={mode}/>


      </div>
      
    </>
  );
}

export default App;