import React, {useState} from "react";
import Alert from "./components/Alert";
import Navabr from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message,type)=> {
    setalert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setalert(null);
    },1500)
  }
  
  const toggleMode = () => {
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor = '#4f3174';
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "Text Utils - Dark Mode";
      // setInterval(()=> {
      //   document.title = "Text Util is Amazing";
      // },1300)
      // setInterval(()=> {
      //   document.title = "Text Util is Best";
      // },1800)
    }
    else
    {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
      document.title = "Text Utils - Light Mode";
    }
  }

  return (
    // <Router>
    <div className="App">
      <Navabr mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
            <TextForm alert={showAlert} heading="Enter Text to Analyze" mode={mode}/>
          {/* </Route>
        </Switch> */}
      </div>
    </div>
    // </Router>
  );
}

export default App;
