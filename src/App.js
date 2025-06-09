import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ShoppingCard from "./Components/ShoppingCard/ShoppingCard";
import UsersInfo from "./Components/Users/UsersInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/shoppingcard" element={<ShoppingCard />} />
        <Route  path="/user" element={<UsersInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
