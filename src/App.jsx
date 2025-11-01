import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/NavBar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Section observer
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div className={`min-h-screen ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        {/* Navbar */}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* Main Sections */}
        <main className="flex flex-col gap-0">
          {["home", "about", "projects", "contact"].map((id) => {
            const SectionComponent =
              id === "home"
                ? Home
                : id === "about"
                ? About
                : id === "projects"
                ? Projects
                : Contact;

            return (
              <section
                key={id}
                id={id}
                className={`transition-all duration-700 ${
                  activeSection === id
                    ? "blur-none opacity-100"
                    : "blur-sm opacity-50"
                }`}
              >
                <SectionComponent />
              </section>
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
