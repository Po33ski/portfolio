import styled from "styled-components"

export const ExperienceItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px 0;
`

export const Title = styled.div`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.l};
  display: flex;
  color: ${({ theme }) => theme.colors.myGreen};
  p:first-of-type {
    margin-right: ${({ theme }) => theme.marginSize.mediumMargin};
  }
  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media (max-width: 400px) {
    flex-direction: column;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 50px;
  span {
    font-weight: 700;
    margin-right: ${({ theme }) => theme.marginSize.smallMargin};
  }
  p {
    margin: 0;
    overflow-wrap: break-word;
  }
  p:nth-of-type(2) {
    margin: ${({ theme }) => theme.marginSize.mediumMargin} 0;
  }
  @media (max-width: 800px) {
    margin: 0 0 0 20px;
  }
  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`
