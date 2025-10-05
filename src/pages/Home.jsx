import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Loader from "../components/Loder";

const Home = () => {
  return (
   <>
   <Loader />
    <Navbar />
    <Hero />
   </>
  )
}

export default Home;