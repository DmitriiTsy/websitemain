import React, {useState} from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import FirstUseCase from './components/FirstUseCase'
import SecondUseCase from './components/SecondUseCase'
import ThirdUseCase from "./components/ThirdUseCase";


const App = () =>  {
  const [mode, setMode] = useState('dark')

  const changeColor = () => {
  if (mode === 'dark') {
    setMode('white')
    } else {
    setMode('dark')
    }
  }
    return (
    <div>
      <Navbar mode={mode}
      changeColor={changeColor}
      />
      <Home mode={mode} />
      <About mode={mode}/>
      <Skills mode={mode}/>
      <Work mode={mode}/>
      <FirstUseCase mode={mode}/>
      <SecondUseCase mode={mode}/>
      <ThirdUseCase mode={mode}/>
      <Contact mode={mode} />
    </div>
    )
}

export default App;
