import { SectionWrapper, TextWrapper, MyImageWrapper } from "routes/Home/Home.styled"

import { ReactComponent as BackgroundSVG } from "../../assetes/svgIcons/backgroundIcon/backgroundSVG.svg"
import myImage from "../../assetes/pictures/aboutMyPicture.jpg"

const HomePage = ({ homeRef }) => {
  return (
    <SectionWrapper ref={homeRef}>
      <BackgroundSVG />
      <TextWrapper>
        <h1>Hi, my name is Jarek</h1>
        <h4>I am software developer</h4>
        <p>
          I am a programmer and a Cloud DND engineer with experience working for Microsoft.
        </p>
        <p>
          I am also a DevOps and MLOps engineer with experience gained at AGH University of Science and Technology. 
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
