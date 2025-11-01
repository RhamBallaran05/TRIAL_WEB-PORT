import { FaFacebook, FaInstagram } from "react-icons/fa";
import img1 from "../../images/mypicture.jpg"; // ✅ fixed path

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-black text-gray-100 relative overflow-hidden"
    >
      {/* Text Content */}
      <div className="max-w-2xl space-y-6 text-center md:text-left animate-fadeIn md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm
          <span className="ml-2 animate-text-gradient">Ramon Ballaran</span>
        </h1>

        <div className="text-animate">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-300">
            3rd Year Student at CVSU Bacoor
          </h3>
        </div>

        <p className="text-gray-400 leading-relaxed">
          Hey there! I'm currently a 3rd-year student at CvSU Bacoor pursuing a
          Bachelor of Science in Computer Science. I'm the type of person who
          loves spreading joy and laughter. You can often catch me singing or
          acting — those are my passions. Nothing makes me happier than seeing a
          smile light up someone's face when I make them laugh. Let's bring some
          happiness into the world together!
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">
          <a
            href="https://m.me/RhamBallaran"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg text-white font-semibold transition-all duration-300"
          >
            Say Hi!
          </a>
          <a
            href="https://m.me/RhamBallaran"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 rounded-full bg-teal-400 hover:bg-teal-500 shadow-lg text-white font-semibold transition-all duration-300"
          >
            Let’s Talk
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-6 mt-6">
          <a
            href="https://www.facebook.com/share/1D9MiRpA9A/"
            target="_blank"
            rel="noreferrer"
            className="text-3xl text-[#1877F2] hover:opacity-80 transition-opacity"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/rhamballaran?igsh=c2hicDI3MG0ya2M0"
            target="_blank"
            rel="noreferrer"
            className="text-3xl text-[#E1306C] hover:opacity-80 transition-opacity"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Profile Image with background circles */}
      <div className="hidden md:flex justify-center md:w-1/2 relative animate-fadeIn delay-200">
        {/* Background Circles */}
        <div className="circle-bg circle-bg-small -z-10" />
        <div className="circle-bg circle-bg-medium -z-10" />

        {/* Profile Image */}
        <img
          src={img1} // ✅ using fixed imported image
          alt="Ramon Ballaran"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
};
