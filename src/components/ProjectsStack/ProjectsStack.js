import SvgElement from "components/SvgElement/SvgElement"
import { ReactComponent as JsSVG } from "assetes/svgIcons/stackIcons/JS.svg"
import { ReactComponent as TsSVG } from "assetes/svgIcons/stackIcons/TS.svg"
import { ReactComponent as ReactSVG } from "assetes/svgIcons/stackIcons/react.svg"
import { ReactComponent as NextJSSVG } from "assetes/svgIcons/stackIcons/nextJs.svg"
import { ReactComponent as PythonSVG } from "assetes/svgIcons/stackIcons/python.svg"
import { ReactComponent as CppSVG } from "assetes/svgIcons/stackIcons/cpp.svg"
import { ReactComponent as SqlSVG } from "assetes/svgIcons/stackIcons/sql.svg"
import { ReactComponent as FastAPISVG } from "assetes/svgIcons/stackIcons/fastapi.svg"
import { ReactComponent as DockerSVG } from "assetes/svgIcons/stackIcons/docker.svg"
import { ReactComponent as CIcdSVG } from "assetes/svgIcons/stackIcons/cicd.svg"
import { ReactComponent as TerraformSVG } from "assetes/svgIcons/stackIcons/terraform.svg"
import { ReactComponent as GitSVG } from "assetes/svgIcons/stackIcons/git.svg"
import { ReactComponent as AzureSVG } from "assetes/svgIcons/stackIcons/azure.svg"
import { ReactComponent as JenkinsSVG } from "assetes/svgIcons/stackIcons/jenkins.svg"
import { ReactComponent as AwsSVG } from "assetes/svgIcons/stackIcons/aws.svg"
import { ReactComponent as NodeJSSVG } from "assetes/svgIcons/stackIcons/nodejs.svg"
import { Wrapper, SvgsWrapper } from "./ProjectsStack.styled"

const ProjectsStack = () => {
  return (
    <Wrapper>
      <h1>Programming Languages</h1>
      <SvgsWrapper>
        <SvgElement svg={<PythonSVG />} title={"Python"} />
        <SvgElement svg={<JsSVG />} title={"JavaScript"} />
        <SvgElement svg={<TsSVG />} title={"TypeScript"} />
        <SvgElement svg={<CppSVG />} title={"C++"} />
        <SvgElement svg={<SqlSVG />} title={"SQL"} />
      </SvgsWrapper>
      <h1>Full Stack Technologies</h1>
      <SvgsWrapper>
        <SvgElement svg={<ReactSVG />} title={"React"} />
        <SvgElement svg={<NextJSSVG />} title={"Next.js"} />
        <SvgElement svg={<FastAPISVG />} title={"FastAPI"} />
        <SvgElement svg={<NodeJSSVG />} title={"Node"} />
      </SvgsWrapper>
      <h1>DevOps and MLOps Technologies</h1>
      <SvgsWrapper>
        <SvgElement svg={<DockerSVG />} title={"Docker"} />
        <SvgElement svg={<CIcdSVG />} title={"CI/CD"} />
        <SvgElement svg={<GitSVG />} title={"Git"} />
        <SvgElement svg={<AzureSVG />} title={"Azure"} />
      </SvgsWrapper>
      <h1>Already learning</h1>
      <SvgsWrapper>
        <SvgElement svg={<JenkinsSVG />} title={"Jenkins"} />
        <SvgElement svg={<AwsSVG />} title={"AWS"} />
        <SvgElement svg={<TerraformSVG />} title={"Terraform"} />
      </SvgsWrapper>
    </Wrapper>
  )
}

export default ProjectsStack
