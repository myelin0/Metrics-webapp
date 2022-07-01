import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <>
     <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
