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
          In my current role, I am primarily responsible for resolving issues related to the Azure Cloud and Window Server systems.
          </p>
          <p>
          Privately, I am a dedicated programming enthusiast, interested in this field for many years. 
          I am familiar with a range of programming languages at different proficiency levels, but recently, I have been most focused on Machine Learning and implementing AI solutions using Python and TypeScript.
          </p>
          <p>
          I'm currently focused on a career transition into an AI Engineer role.
          I am very eager to work as a full-time programmer because I know that writing code and designing applications is something that brings me great joy.
          </p>
          <p>
          My current role has taught me not only how to thoroughly analyze code and logs but also how to react effectively in critical situations. Every day, I am involved in problem-solving and testing new solutions. 
          These skills are very beneficial to my programming efforts as they have instilled patience and critical thinking.
          </p>
          <p>
          Additionally, I hold a postgraduate degree from the Faculty of Computer Science at AGH University of Science and Technology in Krakow. 
          The specialization I studied there provided me with many practical skills related to implementing AI systems, software architecture, MLOps, as well as some fundamentals of DevOps.
          </p>
          <p>
          In my free time, I enjoy reading books, watching automotive and technology-related content, working out, and spending time with my family and friends.
          </p>
          <p>
          Below is more information about me and my technical skills.
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
