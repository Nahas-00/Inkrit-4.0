import '../styles/ComingSoon.css';
import Navbar from '../components/Navbar';

const Events = () => {
     return (
   <div className="flex items-center justify-center h-screen bg-black">
    <Navbar />
      <h1
        className="text-6xl md:text-8xl font-extrabold tracking-widest  neon-text"
        data-text="COMING SOON"
      >
        COMING SOON
      </h1>
    </div>
  );
}

export default Events;