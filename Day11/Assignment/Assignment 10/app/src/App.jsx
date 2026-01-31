import { Routes, Route} from "react-router-dom";
 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


function App(){
    return(
        <>
       
        <Navbar />
        <div className="container mt-4">
        <Routes>
            <Route path="/" element ={<Home />} />
            <Route path="/about" element ={<About />} />
            <Route path="/contact" element ={<Contact />} />
            <Route path="/services" element ={<Services />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
        <Footer/>
        </>
      
    );
}

export default App;