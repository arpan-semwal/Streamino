import React from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import Stream from './pages/Stream';
import Register from './pages/Register';
import Login from './pages/Login';
import StreamSetup from './pages/StreamSetup';
import WatchStream from './components/WatchStream';
 




const App:React.FC = () => {
  return (
    <Router>
      
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/stream' element={<Stream/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/stream/create" element={<StreamSetup />} />
        <Route path="/watch/:streamKey" element={<WatchStream/>} />
      </Routes>
    </Router>
  )
}


export default App;