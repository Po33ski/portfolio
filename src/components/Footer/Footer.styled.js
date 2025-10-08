import styled from "styled-components"

export const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.myGreen};
  color: white;
  width: 100%;
  justify-content: center;
  p {
    color: white;
  }
`
export const FooterContent = styled.div`
  display: flex;
  width: 60%;
  margin: 100px auto;
  justify-content: space-between;
  border-bottom: 2px solid white;
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 800px) {
    justify-content: center;
  }
`

export const FooterIcons = styled.div`
  a {
    svg {
      transition: all 0.4s linear;
      height: 30px;
      fill: ${({ theme }) => theme.colors.backgroundColor};
      margin: 10px;
      @media (max-width: 900px) {
        height: 25px;
        margin: 5px;
      }
    }
  }
  a:hover {
    svg {
      scale: 1.2;
    }
  }
`

export const FooterMenu = styled.ul`
  @media (max-width: 800px) {
    display: none;
  }
  li {
    text-decoration: none;
    display: inline;
    padding: 20px 20px;
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;
  }
`
