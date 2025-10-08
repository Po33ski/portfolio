import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  margin: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.navyBlue};
  @media (max-width: 900px) {
    padding: 0 ${({ theme }) => theme.paddingSize.mediumPadding};
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const ImageWrapper = styled.div`
  width: 30%;
  display: flex;
  img {
    max-height: 100%;
    max-width: 100%;
    height: auto;
  }
  @media (max-width: 1300px) {
    width: 40%;
  }
  @media (max-width: 1000px) {
    width: 50%;
  }
  @media (max-width: 800px) {
    width: 90%;
    img {
      margin: 0 auto;
    }
    margin-bottom: ${({ theme }) => theme.marginSize.xlMargin};
  }
`
export const ContentWrapper = styled.div`
  width: 50%;
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    margin: 0;
  }
  p {
    margin: ${({ theme }) => theme.marginSize.mediumMargin} 0;
    text-align: justify;
    text-justify: inter-word;
  }
  @media (max-width: 800px) {
    width: 90%;
    padding: 30px;
  }
  @media (max-width: 700px) {
    margin: 0 10px;
  }
  @media (max-width: 600px) {
    h1 {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
    padding: 0 ${({ theme }) => theme.paddingSize.mediumPadding};
  }
  @media (max-width: 400px) {
    width: 95%;
  }
`

export const StackContainer = styled.ul`
  padding: 0;
  text-align: center;
  margin: 0;
  li {
    display: inline;
    margin-right: ${({ theme }) => theme.marginSize.smallMargin};
    font-weight: bold;
  }
  @media (max-width: 500px) {
    margin: 5px;
    li {
      margin: 3px;
    }
  }
`

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  button {
    margin: ${({ theme }) => theme.marginSize.bigMargin}
      ${({ theme }) => theme.marginSize.smallMargin} 0 0;
  }
`
