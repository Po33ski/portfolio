import styled from "styled-components"

export const MenuBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  height: 55px;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;
  @media (max-width: 800px) {
    display: none;
  }
`

export const MenuWrapper = styled.div`
  .menu-transition-on {
    transition: 1s;
  }
  ul {
    position: fixed;
    z-index: 3;
    margin: 0;
    right: 100px;
    top: 10px;
    overflow: hidden;
    padding: 8px;
    @media (max-width: 800px) {
      visibility: hidden;
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 100vw;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.colors.backgroundColor};
      top: 0;
      right: -100vw;
      padding-top: 60px;
    }
    li {
      text-decoration: none;
      display: inline;
      margin: 20px 20px;
      padding: 0 5px 5px 5px;
      font-weight: 700;
      font-size: large;
      border-bottom: 0px solid ${({ theme }) => theme.colors.myGreen};
      cursor: pointer;
      @media (max-width: 800px) {
        display: block;
      }
    }
    li:hover {
      color: ${({ theme }) => theme.colors.myGreen};
      border-width: 1px;
    }
    .active {
      color: ${({ theme }) => theme.colors.myGreen};
      border-width: 1px;
    }
  }
  .menu-active {
    right: 0;
    visibility: visible;
  }
`

export const HamburgerMenu = styled.div`
  flex-direction: column;
  align-items: space-around;
  justify-content: space-around;
  display: none;
  position: fixed;
  z-index: 3;
  top: 16px;
  right: 16px;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.colors.navyBlue};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ isMenuOpen }) => (isMenuOpen ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${({ isMenuOpen }) => (isMenuOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
  @media (max-width: 800px) {
    display: flex;
  }
`
