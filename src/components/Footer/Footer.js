import {
  FooterContainer,
  FooterContent,
  FooterIcons,
  FooterMenu,
} from "./Footer.styled"

import { ReactComponent as GithubSvg } from "../../assetes/svgIcons/githubSVG.svg"
import { ReactComponent as LinkedinSvg } from "../../assetes/svgIcons/linkedinSVG.svg"

const Footer = ({ toggleScrollToSection, homeRef, aboutRef, projectsRef }) => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterIcons>
          <a target="_blank" rel="noreferrer" href="https://github.com/Po33ski">
            <GithubSvg />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jaroslaw-popardowski-21463a202"
          >
            <LinkedinSvg />
          </a>
        </FooterIcons>
        <FooterMenu>
          <li
            onClick={() => {
              toggleScrollToSection(homeRef)
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              toggleScrollToSection(aboutRef)
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              toggleScrollToSection(projectsRef)
            }}
          >
            Projects
          </li>
          <li>Contact</li>
        </FooterMenu>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
