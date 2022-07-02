import {  Route, Routes } from 'react-router-dom';
import './App.css';
// import NavBar from './components/NavBar';
import Home from './components/Home';
import Detail from './components/Detail';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <>
     
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
