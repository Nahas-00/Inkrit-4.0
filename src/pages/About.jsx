import '../styles/style.css';
import Masonry from '../components/ui/Masonry/Masonry';
import Mes from '../../public/mes-college.jpeg';
import Footer from '../components/Footer';

const About = () => {
  const items = [
    { id: "1", img: "https://picsum.photos/id/1015/600/900?grayscale", url: "https://example.com/one", height: 400 },
    { id: "2", img: "https://picsum.photos/id/1011/600/750?grayscale", url: "https://example.com/two", height: 250 },
    { id: "3", img: "https://picsum.photos/id/1020/600/800?grayscale", url: "https://example.com/three", height: 600 },
    { id: "4", img: "https://picsum.photos/id/1015/600/900?grayscale", url: "https://example.com/one", height: 400 },
    { id: "5", img: "https://picsum.photos/id/1011/600/750?grayscale", url: "https://example.com/two", height: 250 },
    { id: "6", img: "https://picsum.photos/id/1020/600/800?grayscale", url: "https://example.com/three", height: 600 },
  ];

  return (
    <>
      <div className="p-8 w-full min-h-screen flex flex-col items-center bg-black text-white space-y-20">

        {/* Main Heading */}
        <h1 className="mt-16 text-5xl md:text-6xl font-orbitron font-bold text-red-500 relative">
          About Us
          <span className="absolute left-0 -bottom-2 h-1 w-32 bg-red-600 rounded-lg"></span>
        </h1>

        {/* Info Sections */}
        <div className="w-full max-w-5xl flex flex-col space-y-16">

          {/* Inkrit 4.0 */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-orbitron text-red-400 border-l-4 border-red-600 pl-4 tracking-wider">
              INKRIT 4.0
            </h2>
            <p className="text-white text-lg md:text-xl font-exo2 leading-relaxed">
              INKRIT 4.0 is the cutting-edge technical fest hosted by the Department of Computer Applications, MES College Marampally. It fosters innovative ideas, tech experiments, and provides a futuristic platform for students to showcase their potential.
            </p>
          </div>

          {/* Department */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-orbitron text-red-400 border-l-4 border-red-600 pl-4 tracking-wider">
              Department of Computer Applications
            </h2>
            <p className="text-white text-lg md:text-xl font-exo2 leading-relaxed">
              Established in 1995, the Department of Computer Applications delivers world-class education through BCA, MSc. Computer Science, and PhD programs. Students gain strong technical foundations and excel in placements or higher studies.
            </p>
          </div>

          {/* College */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-orbitron text-red-400 border-l-4 border-red-600 pl-4 tracking-wider">
              MES College Marampally
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="text-white text-lg md:text-xl font-exo2 leading-relaxed md:flex-1">
                MES College Marampally has been shaping young minds for over 30 years, hosting nearly 3000 students and 145 faculty members. The campus offers state-of-the-art infrastructure for UG and PG courses.
              </p>
              <img 
                src={Mes}
                alt="MES College" 
                className="md:w-[400px] md:h-[250px] w-full h-64 object-cover rounded-3xl border-2 border-red-500 shadow-red-600 shadow-lg"
              />
            </div>
          </div>

        </div>

        {/* Masonry Section */}
        

        <Footer />

      </div>
    </>
  );
}

export default About;
