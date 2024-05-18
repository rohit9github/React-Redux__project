import './App.css';
import HeaderNav from './Componets/HeaderNav';
import Create from './Componets/Create';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Read from './Componets/Read';
import Update from './Componets/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read/>} />
          <Route exact path="/update/:id" element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
