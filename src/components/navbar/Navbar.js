import {
  MenuWrapper,
  HamburgerMenu,
  MenuBackground,
} from "components/navbar/NavBar.styled"

import { useRef, useState, useEffect } from "react"

const Navbar = ({
  toggleScrollToSection,
  homeRef,      
  aboutRef,
  projectsRef,
  contactRef,
}) => {
  const menuRef = useRef(null)

  const getCurrentWidth = () => {
    return { width: window.innerWidth }
  }
  const [screenWidth, setScreenWidth] = useState(getCurrentWidth())
  const [menuTransition, setMenuTransition] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scroll, setScroll] = useState(window.scrollY)

  document.addEventListener("scroll", () => {
    const currentPagePosition = window.scrollY
    setScroll(currentPagePosition)
  })

  useEffect(() => {
    const aboutSectionPosition = aboutRef.current.offsetTop - 700
    const projectsSectionPosition = projectsRef.current.offsetTop - 700
    const contactSectionPosition = contactRef.current.offsetTop - 700
    const isItHomeSection = scroll < aboutSectionPosition && activeSection != "home"
    const isItAboutSection =
      scroll >= aboutSectionPosition &&
      scroll < projectsSectionPosition &&
      activeSection != "about"
    const isItProjectsSection =
      scroll >= projectsSectionPosition &&
      scroll < contactSectionPosition &&
      activeSection != "projects"
    const isItContactSection =
      scroll >= contactSectionPosition && activeSection != "contact"
    if (isItHomeSection) {
      setActiveSection("home")
    } else if (isItAboutSection) {
      setActiveSection("about")
    } else if (isItProjectsSection) {
      setActiveSection("projects")
    } else if (isItContactSection) {
      setActiveSection("contact")
    }
  }, [scroll])

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(getCurrentWidth())
    }
    window.addEventListener("resize", updateScreenWidth)

    return () => {
      window.removeEventListener("resize", updateScreenWidth)
    }
  }, [screenWidth])

  if (screenWidth.width <= 800) {
    setTimeout(() => {
      setMenuTransition(true)
    }, 1000)
  } else if (menuTransition === true && screenWidth.width >= 800) {
    setMenuTransition(false)
    setIsMenuOpen(false)
  }

  const handleToggleMenuStyle = () => {
    menuRef.current.classList.toggle("menu-active")
    setIsMenuOpen(!isMenuOpen)
  }
  const handleRemoveMenuStyle = () => {
    menuRef.current.classList.remove("menu-active")
  }

  return (
    <MenuWrapper>
      <MenuBackground />
      <ul ref={menuRef} className={menuTransition ? "menu-transition-on" : ""}>
        <li
          className={activeSection === "home" ? "active" : ""}
          onClick={() => {
            toggleScrollToSection(homeRef)
            handleRemoveMenuStyle()
            setIsMenuOpen(false)
          }}
        >
          Home
        </li>
        <li
          className={activeSection === "about" ? "active" : ""}
          onClick={() => {
            toggleScrollToSection(aboutRef)
            handleRemoveMenuStyle()
            setIsMenuOpen(false)
          }}
        >
          About
        </li>
        <li
          className={activeSection === "projects" ? "active" : ""}
          onClick={() => {
            toggleScrollToSection(projectsRef)
            handleRemoveMenuStyle()
            setIsMenuOpen(false)
          }}
        >
          Projects
        </li>
        <li
          className={activeSection === "contact" ? "active" : ""}
          onClick={() => {
            toggleScrollToSection(contactRef)
            handleRemoveMenuStyle()
            setIsMenuOpen(false)
          }}
        >
          Contact
        </li>
      </ul>
      <HamburgerMenu
        onClick={handleToggleMenuStyle}
        togleTransition={false}
        isMenuOpen={isMenuOpen}
      >
        <div></div>
        <div></div>
        <div></div>
      </HamburgerMenu>
    </MenuWrapper>
  )
}

export default Navbar
