import { SectionWrapper, TextWrapper, MyImageWrapper } from "routes/Home/Home.styled"

import { ReactComponent as BackgroundSVG } from "../../assetes/svgIcons/backgroundIcon/backgroundSVG.svg"
import myImage from "../../assetes/pictures/aboutMyPicture.jpg"

const HomePage = ({ homeRef }) => {
  return (
    <SectionWrapper ref={homeRef}>
      <BackgroundSVG />
      <TextWrapper>
        <h1>Hi, my name is Jarek</h1>
        <h4>I am a software developer</h4>
        <p>
          I am also an Azure Cloud engineer with experience working for Microsoft.
        </p>
        <p>
          I also have skills as an AI and Software Architecture engineer with experience gained at AGH University of Science and Technology and working sporadically as a freelance developer. 
        </p>
        <p>
          Currently I am looking for an opportunity to change my career path and become an AI software developer.
        </p>
        <p>
          Below you can find more information about me and my work.
        </p>
      </TextWrapper>
      <MyImageWrapper>
        <img src={myImage} />
      </MyImageWrapper>
    </SectionWrapper>
  )
}

export default HomePage
