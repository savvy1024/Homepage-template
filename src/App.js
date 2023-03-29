import AboutUs from "./components/AboutUs.js";
import Bestselling from "./components/Bestselling.js";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Tesimonials from "./components/Testimonials.js";


function App() {
  return (
    <div>
      <Header title='Hello World' />
      <Hero />
      <Bestselling />
      <Tesimonials />
      <AboutUs />
      
    </div>
  );
}

export default App;
