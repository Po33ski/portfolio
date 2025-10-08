import styled from "styled-components"

export const ButtonWrapper = styled.button`
  min-width: ${({ buttonMinWidth }) => buttonMinWidth};
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  display: flex;
  position: relative;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.myGreen};
  border-radius: 30px;
  position: relative;
  transition: color 300ms ease-in-out;
  z-index: 0;
  overflow: hidden;
  p {
    padding: 11px 22px;
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.myGreen};

    transition: color 300ms ease-in-out;
  }
  a {
    text-decoration: none;
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.myGreen};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 11px 22px;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 0%;
    z-index: -1;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.myGreen};
    transition: width 300ms ease-in-out;
    transform-origin: left;
  }
  a svg {
    height: 25px;
    margin-right: 22px;
    fill: ${({ theme }) => theme.colors.myGreen};
    transition: fill 300ms ease-in-out;
  }
  a span {
    transition: color 300ms ease-in-out;
  }

  &:hover {
    p {
      color: ${({ theme }) => theme.colors.backgroundColor};
    }
    &::before {
      width: 100%;
    }
    a svg {
      fill: ${({ theme }) => theme.colors.backgroundColor};
    }
    a span {
      color: ${({ theme }) => theme.colors.backgroundColor};
    }
  }
`
