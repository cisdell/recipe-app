import { BrowserRouter, Routes, Route, navLink } from "react-router-dom";

//Styles
import "./App.css";
//components
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'

function App() {
  return <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/create" element={<Create/>} />
      <Route path="/recipes/:id" element={<Recipe/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="*" element={<Home />} />
    </Routes>
    </BrowserRouter>

  </div>;
}

export default App;
