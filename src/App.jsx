import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Offer from "./components/Offer";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Services />
      <Offer />
       <Testimonials />
      <Newsletter />
      <Footer />

    </>
  );
}

export default App;