import './App.css';
import HeaderNav from './Componets/HeaderNav';
import Create from './Componets/Create';
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route exact path="/" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
