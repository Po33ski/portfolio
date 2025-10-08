import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > h1 {
    color: ${({ theme }) => theme.colors.navyBlue};
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    margin: 0 0 ${({ theme }) => theme.marginSize.xxlMargin} 0;
  }
  @media (max-width: 1100px) {
    > h1 {
      font-size: ${({ theme }) => theme.fontSize.xxl};
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 800px) {
    > h1 {
      font-size: 32px;
    }
  }
  @media (max-width: 600px) {
    > h1 {
      font-size: ${({ theme }) => theme.fontSize.xl};
      margin: 0 0 ${({ theme }) => theme.marginSize.xlMargin} 0;
    }
  }
`

export const ProjectsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  > div:nth-child(even) {
    flex-direction: row-reverse;
    div:nth-child(2) {
      justify-content: flex-end;
      align-items: flex-end;
    }
  }
  > div:nth-child(odd) {
    div:nth-child(1) {
      justify-content: flex-end;
    }
  }
  @media (max-width: 800px) {
    > div:nth-child(even) {
      flex-direction: column;
      div:nth-child(2) {
        justify-content: flex-start;
        align-items: flex-start;
      }
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`
