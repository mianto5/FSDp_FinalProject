import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import AddMovie from "./components/AddMovie";
import AdminLogin from "./components/AdminLogin";
import Contact from "./components/Contact";
import MovieDetail from "./components/MovieDetail";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path='/movies/:mid' element={<MovieDetail/>}></Route>
        <Route path="/movies/add" element={<AddMovie />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/admin" element={<AdminLogin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
