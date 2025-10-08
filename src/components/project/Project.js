import {
  Wrapper,
  ImageWrapper,
  ContentWrapper,
  StackContainer,
  LinksContainer,
} from "components/project/Project.styled"
import { ReactComponent as GithubSvg } from "assetes/svgIcons/githubSVG.svg"
import { ReactComponent as WebsiteSvg } from "assetes/svgIcons/websiteSVG.svg"
import { ReactComponent as GooglePlaySVG } from "assetes/svgIcons/googlePlaySVG.svg"
import CustomButton from "components/CustomButton/CustomButton"

const Project = ({
  title,
  githublink,
  content,
  image,
  video,
  stack,
  websitelink,
  shoplink,
}) => {
  console.log("Project:", title, "image:", image, "video:", video)
  return (
    <Wrapper title={title}>
      <ImageWrapper>
        {image && image.url !== "" && <img src={image.url} alt={title} />}
        {video && video.url !== "" && (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            controls
            preload="auto"
            style={{ width: '100%', height: 'auto', maxHeight: '400px' }}
            onError={(e) => console.error("Video error:", e.target.error)}
            onLoadedData={() => console.log("Video loaded successfully")}
          >
            <source src={video.url} type="video/mp4" />
            Twoja przeglądarka nie obsługuje odtwarzania wideo.
          </video>
        )}
      </ImageWrapper>
      <ContentWrapper>
        <h1>{title}</h1>
        <p>{content}</p>

        <StackContainer>
          {stack.map((element) => (
            <li key={element}>{element}</li>
          ))}
        </StackContainer>
        <LinksContainer>
          {websitelink && (
            <CustomButton
              icon={<WebsiteSvg />}
              adress={websitelink}
              text={"see demo"}
            />
          )}
          {githublink && (
            <CustomButton
              text="check github"
              adress={githublink}
              icon={<GithubSvg />}
            />
          )}
          {shoplink && (
            <CustomButton
              text="show in shop"
              adress={shoplink}
              icon={<GooglePlaySVG />}
            />
          )}
        </LinksContainer>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Project
