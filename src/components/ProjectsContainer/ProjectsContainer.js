import Project from "../project/Project"
import { Wrapper, ProjectsWrapper } from "./ProjectsContainer.styled"

const ProjectsContainer = ({ projects }) => {
  return (
    <Wrapper>
      <h1>Projects</h1>
      <ProjectsWrapper>
        {projects.map(
          ({
            title,
            githublink,
            content,
            image,
            video,
            stack,
            websitelink,
            shoplink,
            id,
          }) => (
            <Project
              image={image}
              video={video}
              title={title}
              content={content}
              githublink={githublink}
              stack={stack}
              websitelink={websitelink}
              shoplink={shoplink}
              key={id}
            />
          )
        )}
      </ProjectsWrapper>
    </Wrapper>
  )
}

export default ProjectsContainer
