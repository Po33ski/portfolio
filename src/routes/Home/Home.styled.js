import styled from "styled-components"

export const SectionWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 200px;
  overflow: hidden;
  svg {
    position: absolute;
    top: -5px;
    left: -5px;
    z-index: 2;
  }
  @media (max-width: 1400px) {
    padding: 200px 100px 0 200px;
    svg {
      height: 200px;
      width: 403px;
    }
  }
  @media (max-width: 1000px) {
    padding: 100px 50px 0 100px;
    svg {
      height: 100px;
      width: 201px;
    }
  }
  @media (max-width: 900px) {
    padding: 100px 50px 0 50px;
  }
  @media (max-width: 800px) {
    min-height: auto;
  }
  @media (max-width: 600px) {
    padding: 0 50px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
  @media (max-width: 400px) {
    padding: 0 25px;
  }
`

export const TextWrapper = styled.div`
  max-width: 550px;
  margin-right: 20px;
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.navyBlue};
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-top: ${({ theme }) => theme.marginSize.xxlMargin};
    text-align: justify;
    text-justify: inter-word;
  }
  h1 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    color: ${({ theme }) => theme.colors.navyBlue};
    font-weight: 700;
  }
  h4 {
    margin: 0;
    font-size: 30px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.myGreen};
  }
  p:nth-of-type(3) {
  }

  @media (max-width: 1100px) {
    h1 {
      font-size: ${({ theme }) => theme.fontSize.xxl};
    }
    h4 {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.m};
      margin-top: 15px;
    }
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 32px;
    }
    h4 {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
  @media (max-width: 600px) {
    margin: 135px 0 20px 0;
    h1 {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
    h4 {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`

export const MyImageWrapper = styled.div`
  position: relative;
  z-index: -1;
  margin: 10px;
  img {
    width: 400px;
    @media (max-width: 1400px) {
      width: 300px;
    }
    @media (max-width: 700px) {
      width: 250px;
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: 17.5%;
    right: -100%;
    height: 65%;
    width: 100%;
    z-index: -1;
    background-color: ${({ theme }) => theme.colors.myGreen};
  }
`
