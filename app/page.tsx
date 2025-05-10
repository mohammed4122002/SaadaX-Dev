import FullscreenVideo from "@/components/FullscreenVideo";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Hero , About , Contact , Projects } from "@/components/sections";



const Home = () => {
  return (

  <main>
  <FullscreenVideo/>
  <Hero/>
  <About/>
  <Projects/>
  <Contact/>
  <ScrollToTopButton/>
  </main>
  
  );
};
export default Home;
