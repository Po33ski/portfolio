import { useState, useEffect } from "react"
import mySecondPicture from "../../assetes/pictures/mySecondPicture.jpg"
import axios from "axios"
import {
  SectionWrapper,
  AboutWrapper,
  TextWrapper,
  MyImageWrapper,
} from "routes/About/About.styled"
import ProjectsStack from "components/ProjectsStack/ProjectsStack"
import ProjectExperience from "components/ProjectsExperience/ProjectExperience"

const API_TOKEN = "1ab3a70712337882e49d01c85666d9"

const About = ({ aboutRef }) => {
  const [experienceProjects, setExperienceProjects] = useState([])
  const [dropDownExperience, setDropDownExperience] = useState(false)
  useEffect(() => {
    axios
      .post(
        "https://graphql.datocms.com/",
        {
          query: `
          {
            allExperiences{
              date
              title
              aboutProject
              role
              technologies
            }
                          }
      `,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setExperienceProjects(data.allExperiences.reverse())
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <SectionWrapper ref={aboutRef}>
      <AboutWrapper>
        <MyImageWrapper>
          <img src={mySecondPicture} />
        </MyImageWrapper>

        <TextWrapper>
          <h1>Jarek Popardowski</h1>
          <p>
            In my work, I enjoy creating and testing application logic and solving advanced software problems. 
            My current position involves resolving issues with Windows OS machines hosted in the cloud and analyzing the source code of Windows components.
          </p>
          <p>
            I also have skills as a full-stack developer, using technologies such as Next.js, FastAPI, and TypeScript to build my applications.
            I've been interested in DevOps and MLOps for a long time. 
            I developed these skills extensively during my studies at AGH in a field related to AI solutions and Software Architecture, which confirmed my knowledge in this area.
          </p>
          <p>
            I combine my programming skills with strong communication abilities and can work with clients in Polish, English, and German.
          </p>
          <p>
            In my free time, I also deal with reading books, drawing, watching automotive
            and technology news, exercising or enjoying a computer games or series.
          </p>
        </TextWrapper>
      </AboutWrapper>
      <ProjectsStack />
      <ProjectExperience
        experienceProjects={experienceProjects}
        setDropDownExperience={setDropDownExperience}
        dropDownExperience={dropDownExperience}
      />
    </SectionWrapper>
  )
}

export default About
