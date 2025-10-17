import { Routes, Route } from "react-router-dom";
import Home from "./pages/homeome";
import Login from "./pages/loginogin";
import Message from "./pages/messageessage";
import Payment from "./pages/paymentayment";
import Profile from "./pages/profilerofile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/message" element={<Message />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
