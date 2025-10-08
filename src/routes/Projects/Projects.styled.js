import styled from "styled-components"

export const SectionWrapper = styled.div`
  min-height: 100vh;
  margin-top: ${({ theme }) => theme.marginSize.sectionMargin};
  padding: 0 ${({ theme }) => theme.paddingSize.sectionPadding};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
  @media (max-width: 1000px) {
    margin-top: ${({ theme }) => theme.marginSize.containerBigMargin};
  }
  @media (max-width: 900px) {
    padding: 0 10px 0 0;
  }
  @media (max-width: 800px) {
    align-items: center;
  }
  @media (max-width: 600px) {
    min-height: auto;
  }
`
