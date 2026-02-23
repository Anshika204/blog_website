import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import SingleBlog from "./pages/SingleBlog";

function App() {
  console.log('hiii')
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;