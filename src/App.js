import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ShoppingCardPage from "./Pages/ShoppingCardPage";
import UsersInfoPage from "./Pages/UserInfoPage";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import { AppProviders } from "./Components/Providers/AppProviders";

function App() {
  return (
    <BrowserRouter>
      <AppProviders>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shoppingcard" element={<ShoppingCardPage />} />
          <Route path="/user" element={<UsersInfoPage />} />
        </Routes>
      </AppProviders>
    </BrowserRouter>
  );
}

export default App;
