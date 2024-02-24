
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './components/Signin';
import Register from './components/Register';
import Netflix from './components/MainPage/Netflix';

function App() {
  return (
    
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/sign-in' element={<Signin/>}></Route>
        <Route path='/sign-in' element={<Signin/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/netflix-home' element={<Netflix/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
