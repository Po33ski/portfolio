import useModal from "components/Modal/useModal"
import CvFile from "assetes/files/Jaroslaw_Popardowski_CV.pdf"
import {
  Wrapper,
  TextWrapper,
  ExperienceWrapper,
  ExperienceContainer,
} from "./ProjectExperience.styled"
import ExperienceItem from "components/ExperienceItem/ExperienceItem"
import CustomButton from "components/CustomButton/CustomButton"
import { ReactComponent as DownloadSVG } from "assetes/svgIcons/downloadIcon.svg"
import { useRef, useEffect, useState } from "react"

const ProjectExperience = ({
  setDropDownExperience,
  dropDownExperience,
  experienceProjects,
}) => {
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal()
  const [experienceConteinterHeight, setExperienceContainerHeight] = useState(0)
  const experienceContainerRef = useRef(null)

  const handleExperienceWrapperHeight = () => {
    setExperienceContainerHeight(experienceContainerRef.current.offsetHeight)
  }
  useEffect(() => {
    window.addEventListener("resize", handleExperienceWrapperHeight)
    return () => {
      window.removeEventListener("resize", handleExperienceWrapperHeight)
    }
  }, [])

  return (
    <Wrapper>
      {isOpen ? (
        <Modal
          icon={<DownloadSVG />}
          handleCloseModal={handleCloseModal}
          text="Thank you for downloading my CV. I hope my qualifications meet your expectations, and we will be in touch soon!"
        />
      ) : null}
      <TextWrapper>
        <h1>Experience</h1>
        <div>
          <p>
            <span>05.2024-now</span>
          </p>
          <p> Senior Cloud DND Engineer at Microsoft</p>
        </div>
        <div>
          <p>
            <span>11.2021-04.2024</span>
          </p>
          <p> IT Analyst at HCL Technologies</p>
        </div>
        <div>
          <p>
            <span>08.2021-10.2021</span>
          </p>
          <p>Junior IT Agent at Capgemini</p>
        </div>
        <h1>Education</h1>
        <div>
          <p>
            <span>09.2024-06.2025</span>
          </p>
          <p> Postgraduate studies in Engineering of AI Systems Engineering at AGH University of Science and Technology</p>
        </div>
      </TextWrapper>
      <CustomButton
        text="DOWNLOAD MY CV"
        download="Jaroslaw Popardowski CV"
        onClick={handleOpenModal}
        adress={CvFile}
      />
      <ExperienceContainer
        dropDownExperience={dropDownExperience}
        experienceConteinterHeight={experienceConteinterHeight}
      >
        <ExperienceWrapper
          dropDownExperience={dropDownExperience}
          ref={experienceContainerRef}
        >
          {experienceProjects.map(
            ({ title, date, role, aboutProject, technologies }) => {
              return (
                <ExperienceItem
                  title={title}
                  date={date}
                  role={role}
                  aboutProject={aboutProject}
                  technologies={technologies}
                  key={title}
                />
              )
            }
          )}
        </ExperienceWrapper>
      </ExperienceContainer>
    </Wrapper>
  )
}

export default ProjectExperience
