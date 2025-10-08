import styled from "styled-components"

export const MainTemplateWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 50px 1fr;
  @media (max-width: 500px) {
    > div:nth-of-type(2) {
      height: 100%;
    }
    grid-template-columns: auto;
    display: flex;
    flex-direction: column;
  }
`
