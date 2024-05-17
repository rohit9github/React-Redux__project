import './App.css';
import HeaderNav from './Componets/HeaderNav';
import Create from './Componets/Create';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Read from './Componets/Read';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
