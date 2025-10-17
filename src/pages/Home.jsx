import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Loader from "../components/Loder";
import About from "./About";


const Home = () => {
  return (
   <>
   <Loader />
    <Navbar />
    <Hero />
    <About />

   </>
  )
}

export default Home;