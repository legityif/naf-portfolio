import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { education, experience, metaItems, navItems, projects, skills } from "./data/portfolioData";

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="page">
      <Header navItems={navItems} />

      <main className="main">
        <Hero metaItems={metaItems} />
        <About strengths={skills.strengths} recentFocus={skills.recentFocus} />
        <Experience roles={experience} />
        <Education {...education} />
        <Projects projects={projects} />
        <Contact />
      </main>

      <footer className="footer">
        <span>{`© ${year} Yifan Yang`}</span>
      </footer>
    </div>
  );
}

export default App;
