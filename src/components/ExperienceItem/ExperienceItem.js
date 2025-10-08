import {
  ExperienceItemWrapper,
  Title,
  ContentWrapper,
} from "./ExperienceItem.styled"

const ExperienceItem = ({ date, title, aboutProject, role, technologies }) => {
  return (
    <ExperienceItemWrapper>
      <Title>
        <p>{date}</p>
        <p>{title}</p>
      </Title>
      <ContentWrapper>
        <p>
          <span>About project:</span>
          {aboutProject}
        </p>
        <p>
          <span>My role:</span>
          {role}
        </p>
        <p>
          <span>Tech:</span>
          {technologies}
        </p>
      </ContentWrapper>
    </ExperienceItemWrapper>
  )
}

export default ExperienceItem
