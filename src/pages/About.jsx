import '../styles/style.css';
import Masonry from '../components/ui/Masonry/Masonry';
import Navbar from '../components/Navbar'

const About = () => {
  const items = [
    { id: "1", img: "https://picsum.photos/id/1015/600/900?grayscale", url: "https://example.com/one", height: 400 },
    { id: "2", img: "https://picsum.photos/id/1011/600/750?grayscale", url: "https://example.com/two", height: 250 },
    { id: "3", img: "https://picsum.photos/id/1020/600/800?grayscale", url: "https://example.com/three", height: 600 },
  ];

  return (
    <>
      
    <div className="p-5 w-full h-auto min-h-screen flex flex-col items-center bg-gray-900 text-white space-y-16">
      <Navbar />
      {/* Main Heading */}
      <h1 className="mt-20 relative font-poppins mt-3 text-5xl font-bold mb-10 before:content-[''] before:absolute before:left-0 before:-bottom-2 before:h-1 before:w-32 before:bg-purple-500 before:rounded-full">
        About Us
      </h1>

      {/* Info Sections */}
      <div className="w-full max-w-4xl flex flex-col space-y-12 mb-3">
        
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-purple-400 border-l-4 border-purple-500 pl-3">Inkrit 4.0</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            INKRIT 3.0 is the technical fest hosted by the Department of Computer Applications, MES College Marampally. It promotes the ideas and concepts developed by young techies and strives to be a platform where you can showcase your true potential.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-purple-400 border-l-4 border-purple-500 pl-3">Department of Computer Applications</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            The Department of Computer Applications was established in 1995 to meet the demand for well-qualified computer professionals. It offers BCA, MSc. Computer Science, and PhD programs. Most students are well-placed or pursue higher studies.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-purple-400 border-l-4 border-purple-500 pl-3">MES College Marampally</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            MES College Marampally is an established institution for the past 30 years with nearly 3000 students and over 145 faculty and staff members, offering undergraduate and postgraduate courses.
          </p>
        </div>

      </div>

      {/* Masonry Section Below Text */}
      <div className="w-full max-w-6xl bg-gray-800 mt-5">
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>


    </div>

  </>
  )
}

export default About;
