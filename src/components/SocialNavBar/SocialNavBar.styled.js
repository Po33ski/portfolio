import styled from "styled-components"

export const SocialNavBarContainer = styled.div`
  position: fixed;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background-color: ${({ theme }) => theme.colors.myGreen};
  border-radius: 0 30px 30px 0;
  a {
    margin: 15px 0;
    transition: all 0.4s linear;
    svg {
      height: 30px;
      fill: ${({ theme }) => theme.colors.backgroundColor};
    }
  }
  a:hover {
    scale: 1.4;
  }
  @media (max-width: 900px) {
    display: none;
  }
`
