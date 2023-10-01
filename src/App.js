import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      {/* <BrowserRouter>
        <HashRouter basename="/"> */}
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <div className="container">
            {/* <Routes> */}
              {/* <Route exact path="/about" element={<About />}/> */}
              {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} /> */}
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
            {/* </Routes> */}
          </div>
        {/* </HashRouter>
      </BrowserRouter> */}
    </>
  );
}

export default App;
