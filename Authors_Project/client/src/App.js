import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Main from './Views/Main';
import Create from './Views/Create';
import Update from './Views/Update';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="" element={<Main/>}/>
        <Route path="/new" element={<Create/>}/>
        <Route path="/edit/:id" element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
