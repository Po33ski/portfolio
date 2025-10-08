import styled from "styled-components"

export const SectionWrapper = styled.div`
  padding: 0 ${({ theme }) => theme.paddingSize.sectionPadding};
  @media (max-width: 1400px) {
    margin-top: ${({ theme }) => theme.marginSize.sectionMargin};
  }

  @media (max-width: 1000px) {
    margin-top: ${({ theme }) => theme.marginSize.containerBigMargin};
  }
  @media (max-width: 900px) {
    padding: 0 50px;
  }
  @media (max-width: 600px) {
    margin-top: ${({ theme }) => theme.marginSize.containerMargin};
  }
  @media (max-width: 500px) {
    padding: 0 ${({ theme }) => theme.paddingSize.bigPadding};
  }
`

export const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TextWrapper = styled.div`
  max-width: 800px;
  color: ${({ theme }) => theme.colors.navyBlue};
  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    margin: 0;
  }
  P {
    font-size: ${({ theme }) => theme.fontSize.l};
    text-align: justify;
    text-justify: inter-word;
  }
  p:nth-of-type(1) {
    margin: ${({ theme }) => theme.marginSize.xxlMargin} 0;
  }
  @media (max-width: 1100px) {
    h1 {
      font-size: ${({ theme }) => theme.fontSize.xxl};
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
    font-size: 18px;
    p:nth-of-type(1) {
      margin: ${({ theme }) => theme.marginSize.bigMargin} 0;
    }
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 32px;
    }
    p:nth-of-type(1) {
      margin: ${({ theme }) => theme.marginSize.mediumMargin} 0;
    }
  }
  @media (max-width: 600px) {
    h1 {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`

export const MyImageWrapper = styled.div`
  position: relative;
  z-index: -1;
  margin: 10px 150px 10px 10px;
  height: auto;
  img {
    width: 300px;
  }
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: -30%;
    height: 50%;
    width: 100%;
    z-index: -1;
    background-color: ${({ theme }) => theme.colors.myGreen};
    @media (max-width: 1100px) {
      right: -15%;
    }
  }
  @media (max-width: 1100px) {
    margin: 10px 80px 10px 10px;
    img {
      width: 250px;
    }
  }
  @media (max-width: 1000px) {
    img {
      width: 200px;
    }
  }
  @media (max-width: 800px) {
    display: none;
  }
`
