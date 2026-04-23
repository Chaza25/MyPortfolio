import Home from "./Home"
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import Contact from "./Contact"

const Landing = () => {
    return (
        <>
            <section id="home" className="scroll-mt-24">
                <Home />
            </section>

            <section id="about" className="scroll-mt-24">
                <AboutMe />
            </section>

            <section id="projects" className="scroll-mt-24">
                <Projects />
            </section>

            <section id="contact" className="scroll-mt-24">
                <Contact />
            </section>
        </>
    )
}

export default Landing