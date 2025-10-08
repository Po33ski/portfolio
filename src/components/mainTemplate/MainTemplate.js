import { MainTemplateWrapper } from "./MainTemplate.styled"
import Navbar from "components/Navbar/Navbar"

const MainTemplate = ({ children }) => {
  return (
    <MainTemplateWrapper>
      <Navbar />

      {children}
      <SocialMediaBar />
    </MainTemplateWrapper>
  )
}

export default MainTemplate
