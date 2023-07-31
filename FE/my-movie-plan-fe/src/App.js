import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import AddMovie from "./components/AddMovie";
import AdminLogin from "./components/AdminLogin";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import EditMovie from "./components/EditMovie";
import MovieDetail from "./components/MovieDetail";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import OrderDetail from "./components/OrderDetail";
import OrderSummary from "./components/OrderSummary";
import Profile from "./components/Profile";
import Register from "./components/Register";
import UserLogin from './components/UserLogin';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:mid" element={<MovieDetail/>}></Route>
        <Route path="/movies/add" element={<AddMovie />}></Route>
        <Route path="/movies/edit/:mid" element={<EditMovie />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/summary/:pid" element={<OrderSummary />}></Route>
        <Route path="/profile/:name" element={<Profile />}></Route>
        <Route path="/order/:pid" element={<OrderDetail />}></Route>
        <Route path="/login/admin" element={<AdminLogin />}></Route>
        <Route path="/login/user" element={<UserLogin />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
