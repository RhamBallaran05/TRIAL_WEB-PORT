import img2 from "../../images/mypicture.jpg"; // ✅ fixed path from About.jsx

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 bg-black text-gray-100 relative overflow-hidden"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
        About <span className="text-blue-500">Me</span>
      </h2>

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
        {/* About Image with animated glowing background */}
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-r from-blue-500 via-sky-400 to-blue-700 animate-glowPulse"></div>

          <img
            src={img2}
            alt="Ramon Ballaran"
            className="relative w-full h-full rounded-full object-cover border-4 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.7)]"
          />

          <div className="absolute inset-0 rounded-full border-4 border-blue-400 animate-spin-slow"></div>
        </div>

        {/* About Text */}
        <div className="max-w-xl text-center md:text-left space-y-4 animate-fadeIn delay-200">
          {/* Futuristic moving gradient text */}
          <h3 className="text-2xl md:text-3xl font-semibold animate-text-gradient">
            3rd Year Student at CVSU Bacoor
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Hey there! I'm currently a 3rd-year student at CvSU Bacoor pursuing
            a Bachelor of Science in Computer Science. I'm the type of person
            who loves spreading joy and laughter. You can often catch me singing
            or acting — those are my passions. Nothing makes me happier than
            seeing a smile light up someone's face when I make them laugh.
          </p>

          <div className="mt-6">
            <a href="#" className="btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          My <span className="text-blue-500">Skills</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Professional Skills */}
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Professional Skills</h3>
            <div className="space-y-4">
              <SkillProgress title="Soft Skills" percent={95} />
              <SkillProgress title="Web Design" percent={85} />
              <SkillProgress title="Typing Skills" percent={85} />
              <SkillProgress title="Graphic Design" percent={80} />
            </div>
          </div>

          {/* Coding Skills */}
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Coding Skills</h3>
            <div className="space-y-4">
              <SkillProgress title="HTML" percent={90} />
              <SkillProgress title="CSS" percent={88} />
              <SkillProgress title="Javascript" percent={80} />
              <SkillProgress title="Python" percent={90} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Component for a single skill progress bar
const SkillProgress = ({ title, percent }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-gray-300">
      <span>{title}</span>
      <span>{percent}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-3">
      <div
        className="bg-blue-500 h-3 rounded-full transition-all duration-1000"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  </div>
);
