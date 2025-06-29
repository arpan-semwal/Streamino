import React from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import Stream from './pages/Stream';
import Navbar from './components/Navbar';




const App:React.FC = () => {
  return (
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/stream' element={<Stream/>}/>
      </Routes>
    </Router>
  )
}


export default App;