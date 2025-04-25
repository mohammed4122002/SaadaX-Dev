import Projects from "../components/main/Projects";
import About from "../components/main/About";
import Hero from "../components/main/Hero";
import Footer from "../components/main/Footer";
import Contact from "../components/main/Contact";
import A1 from "../components/main/A";

import style from "../styles/home.module.css";

const Home = () => {
  return (
  
  <main>
  <Hero/>
    <About/>
    <Projects/>
  </main>
  
  );
};
export default Home;
