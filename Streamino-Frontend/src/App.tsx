import React from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import Stream from './pages/Stream';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import VideoPlayer from './components/VideoPlayer';




const App:React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <VideoPlayer/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/stream' element={<Stream/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  )
}


export default App;