import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Single from "./Pages/Singlemeal";
import Error from "./Pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-md">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/meal/:mealId" element={<Single />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
