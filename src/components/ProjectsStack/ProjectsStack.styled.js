import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.marginSize.containerMargin};
  h1 {
    margin: 0 0 ${({ theme }) => theme.marginSize.xxlMargin} 0;
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    color: ${({ theme }) => theme.colors.navyBlue};
  }

  @media (max-width: 1100px) {
    h1 {
      font-size: ${({ theme }) => theme.fontSize.xxl};
    }
  }
  @media (max-width: 1000px) {
    margin-top: ${({ theme }) => theme.marginSize.constainerSmallMargin};
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 32px;
    }
  }
  @media (max-width: 600px) {
    margin-top: ${({ theme }) => theme.marginSize.constainerXsMargin};
    h1 {
      margin: 0 0 ${({ theme }) => theme.marginSize.xlMargin} 0;
    }
  }
  @media (max-width: 400px) {
    h1 {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
`

export const SvgsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`
