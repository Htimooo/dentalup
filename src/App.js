import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (

    <div className="App">
      <Router>
      <ScrollToTop />
           
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
        <Footer />
      </Router>      
    </div>
        
  );
}

export default App;
