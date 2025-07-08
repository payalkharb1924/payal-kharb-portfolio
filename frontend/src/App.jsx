import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { Toaster } from "react-hot-toast";
import ExitIntentPopup from "./components/ExitIntentPopup";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Match Loader timeout (3s)
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {!isLoaded && <Loader />}
      {isLoaded && (
        <>
          <ExitIntentPopup />
          <Toaster position="top-center" reverseOrder={false} />
          <Navbar />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
