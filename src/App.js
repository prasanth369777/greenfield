import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Standardized relative imports
import Homepage from "./components/Homepage/Homepage";
import Nav from "./components/pages/Navigation";
import Footer from "./components/pages/Footer";
import Community from "./components/pages/communitypg";
import Projectpage from "./components/pages/Projectpage";
import Aboutus from "./components/pages/Aboutus";
import Whatsapp from "./components/pages/whatsapp"; 
import ContactPage from "./components/pages/Contactpage";


function App() {
  return (
    <Router>
     
        <Nav />

        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
             <Route path="/aboutus" element={<Aboutus />} />
             <Route path="/community" element={<Community />} />
              <Route path="/project" element={<Projectpage />} />
              <Route path="/contactus" element={<ContactPage />} />
          </Routes>
        </main>

        <Whatsapp />
        <Footer />
   
    </Router>
  );
}

export default App;