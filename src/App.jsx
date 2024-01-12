import Side from './Side';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './style.scss'

const App = () => {
  return ( <>
  <div className="app">
    <div className="container">
      <Side/>
    </div>
  </div>
  </> );
}
 
export default App;