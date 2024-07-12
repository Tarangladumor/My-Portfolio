import './App.css';
import Home from '../src/Pages/Home';
import Contact from '../src/Pages/Contact';
import Background from '../src/Pages/Background'
import HomeLayout from './Pages/HomeLayout';
import Portfolio from '../src/Pages/Portfolio'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <HomeLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/background' element={<Background/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
        </Routes>
      </HomeLayout>
    </BrowserRouter>

  );
}

export default App;