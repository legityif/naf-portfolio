import { useEffect } from "react";
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

  useEffect(() => {
    const selector = [".timeline-item", ".card", ".education-card", ".tile", ".contact-form"].join(
      ", "
    );
    const targets = Array.from(document.querySelectorAll(selector));
    if (!targets.length) return;

    targets.forEach((el, index) => {
      el.classList.add("reveal-on-scroll");
      el.style.setProperty("--reveal-delay", `${Math.min(index * 45, 260)}ms`);
    });

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    // Ensure hidden style is painted before any element can be marked visible.
    targets.forEach((el) => el.getBoundingClientRect());

    let observer;
    let startTimer;
    let hasUserScrolled = false;
    const pending = new Set();

    const revealIfInViewport = () => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      pending.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const inViewport = rect.top < viewportHeight * 0.9 && rect.bottom > viewportHeight * 0.12;
        if (!inViewport) return;
        el.classList.add("is-visible");
        pending.delete(el);
        if (observer) observer.unobserve(el);
      });
      if (!pending.size) {
        window.removeEventListener("scroll", onFirstScroll);
      }
    };

    const onFirstScroll = () => {
      if (hasUserScrolled) return;
      hasUserScrolled = true;
      revealIfInViewport();
    };

    window.addEventListener("scroll", onFirstScroll, { passive: true });
    const raf = window.requestAnimationFrame(() => {
      startTimer = window.setTimeout(() => {
        observer = new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              if (entry.target.matches(".tile, .education-card") && !hasUserScrolled) {
                pending.add(entry.target);
                return;
              }
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            });
          },
          {
            threshold: 0.22,
            rootMargin: "0px 0px -12% 0px",
          }
        );

        targets.forEach((el) => observer.observe(el));
      }, 120);
    });

    return () => {
      window.cancelAnimationFrame(raf);
      if (startTimer) window.clearTimeout(startTimer);
      window.removeEventListener("scroll", onFirstScroll);
      if (observer) observer.disconnect();
    };
  }, []);

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
