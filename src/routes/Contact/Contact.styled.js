import styled from "styled-components"

export const SectionWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.navyBlue};
  margin-top: ${({ theme }) => theme.marginSize.containerBigMargin};
  @media (max-width: 1000px) {
    margin-top: ${({ theme }) => theme.marginSize.containerMargin};
  }
  @media (max-width: 600px) {
    min-height: auto;
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    margin: 0 0 ${({ theme }) => theme.marginSize.xxlMargin} 0;
  }
  > p {
    text-align: center;
    font-size: 26px;
    max-width: 500px;
    font-weight: 600;
    border-bottom: 2px solid ${({ theme }) => theme.colors.myGreen};

    padding: 0 10px;
    @media (max-width: 500px) {
      font-size: 20px;
    }
  }

  @media (max-width: 1100px) {
    h1 {
      font-size: ${({ theme }) => theme.fontSize.xxl};
    }
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 32px;
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
  @media (max-width: 600px) {
    h1 {
      font-size: ${({ theme }) => theme.fontSize.xl};
      margin: 0 0 ${({ theme }) => theme.marginSize.xlMargin} 0;
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
`
