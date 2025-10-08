import Navbar from "./components/navbar/Navbar"
import SocialNavBar from "components/SocialNavBar/SocialNavBar"
import Home from "./routes/Home/Home"
import About from "./routes/About/About"
import Contact from "./routes/Contact/Contact"
import Projects from "./routes/Projects/Projects"
import { GloballStyle } from "assetes/styles/globalStyles"
import { theme } from "assetes/styles/theme"
import { ThemeProvider } from "styled-components"
import { useRef } from "react"

function App() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const toggleScrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  }
  return (
    <ThemeProvider theme={theme}>
      <GloballStyle />
      <div>
        <Navbar
          toggleScrollToSection={toggleScrollToSection}
          homeRef={homeRef}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <SocialNavBar />
        <Home homeRef={homeRef} />
        <About aboutRef={aboutRef} />
        <Projects projectsRef={projectsRef} />
        <Contact
          contactRef={contactRef}
          toggleScrollToSection={toggleScrollToSection}
          homeRef={homeRef}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
        />
      </div>
    </ThemeProvider>
  )
}

export default App
