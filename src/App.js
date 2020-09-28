import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './component/main'
import { BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    
     <Main style={{height:"100% !important"}}/>
    </BrowserRouter>
    </>
  );
}

export default App;
