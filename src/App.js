import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alerts from './components/Alerts';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
  // tells whether darkmode is enabled or not
  const [mode ,setMode] = useState('light');

  // toggle mode with radio button
  const toggleMode = () =>{
    if (mode==='light'){
          setMode('dark');
          document.body.style.backgroundColor = '#042743';
          showAlert("Dark Mode has been enabled","success");
          document.title = "TextUtils - DarkMode";
          setInterval(() => {
            // setting the title
            document.title = "TextItils is amazing";
          }, 2000);
          setInterval(()=>{
            document.title = "Install TextUtils now";
          }, 1500);
    }else{
          setMode('light');
          document.body.style.backgroundColor = 'white';
          showAlert("Light mode has been enabled","success");
          document.title = "TextUtils - LightMode";
    }
  }

  // creating alert state 
  const [alert, setAlert] = useState(null);

  // creating function to show alert
  const showAlert = (message,type) =>{
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }
  return (
    <> 

       {/* <Navbar title="TextUtils"  aboutText="About Us" /> */}
      <Navbar  title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About Us" />

      <Alerts alert={alert} />

      {/* <Router> */}
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route path="/" element={<TextForm heading = "Enter the text to analyze" mode={mode} showAlert={showAlert}/>} />  */}
          <TextForm heading = "Enter the text to analyze" mode={mode} showAlert={showAlert}/>
          {/* <Route path="/about" element={<About />} /> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}

    </>
  );
}

export default App;
