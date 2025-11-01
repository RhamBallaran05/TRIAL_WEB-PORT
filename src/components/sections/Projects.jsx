import landingImg from "../../images/landing.jpg";
import typoImg from "../../images/typo.jpg";
import tableImg from "../../images/table.jpg";
import jumboImg from "../../images/jumbo.jpg";

export const Projects = () => {
  const works = [
    {
      title: "Landing Page",
      description:
        "A modern, responsive landing page built with HTML and CSS showcasing elegant layout and smooth navigation.",
      img: landingImg, // ✅ imported
      link: "https://rhamballaran05.github.io/Ballaran_Ramon_FINAL_PROJECT/",
    },
    {
      title: "Typography",
      description:
        "A creative display of text styling and hierarchy, exploring the power of fonts, spacing, and readability in design.",
      img: typoImg, // ✅ imported
      link: "https://rhamballaran05.github.io/Ballaran_BSCS-1-1_My_Typography/",
    },
    {
      title: "Responsive Table",
      description:
        "An adaptive and interactive data table that stays clear and functional on any device screen size.",
      img: tableImg, // ✅ imported
      link: "https://rhamballaran05.github.io/Ballaran_Responsive_Table/",
    },
    {
      title: "Jumbotron",
      description:
        "A visually appealing Jumbotron section designed to highlight key information with balance and aesthetic focus.",
      img: jumboImg, // ✅ imported
      link: "https://rhamballaran05.github.io/Ballaran_Ramon_Jumbotron/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-gray-100 py-20 px-6 md:px-16 scroll-mt-24"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        <b className="text-white">My</b>{" "}
        <span className="text-blue-500">Works</span>
      </h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {works.map((work, index) => (
          <a
            key={index}
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl shadow-lg hover:shadow-blue-600/40 transition-all duration-300"
          >
            {/* Project Image */}
            <img
              src={work.img}
              alt={work.title}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-500"
            />

            {/* Overlay with description */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 group-hover:opacity-100 flex flex-col items-center justify-end p-6 text-center transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {work.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{work.description}</p>
              <p className="text-blue-400 underline hover:text-blue-300">
                Click to View
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
