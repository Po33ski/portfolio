import styled, { keyframes } from "styled-components"

const openBackgroundAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const closeBackgroundAnimation = keyframes`
  0% {
    opacity: 1;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`

const elementsOpacityAnimation = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`

const showPopUp = keyframes`
0% {
  transform: scale(.7);
  opacity: 0;
}
45% {
  transform: scale(1.05);
}
80% {
  transform: scale(.95);
}
100% {
  transform: scale(1);
  opacity: 1;
  
}
`
const hidePopup = keyframes`
0%{
  opacity: 1;
  transform: scale(1);
}
100% {
  opacity: 0;
  transform: scale(.5);
}
`

export const BacgroundShadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(87, 87, 87, 0.5);
  z-index: 3;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active {
    animation: 0.3s ${openBackgroundAnimation} forwards;
  }
  &.disActive {
    animation: 0.3s ${closeBackgroundAnimation} forwards;
  }
`

export const PopUpWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  padding: 70px 100px;
  box-shadow: -8px 8px 25px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  &.active {
    animation: 0.3s ${showPopUp} forwards;
  }
  &.disActive {
    animation: 0.3s ${hidePopup} forwards;
  }

  p,
  svg,
  button {
    animation-delay: 0.3s;
    animation: 0.3s ${elementsOpacityAnimation} forwards;
  }

  > p {
    color: ${({ theme }) => theme.colors.navyBlue};
    font-size: 18px;
    max-width: 400px;
    margin: 40px 0;
  }
  @media (max-width: 800px) {
    margin: 50px;
    padding: 60px;
    > P {
      margin: 60px 0;
      max-width: 300px;
    }
  }
  @media (max-width: 600px) {
    padding: 60px 30px;
    p {
      font-size: 16px;
    }
  }
  @media (max-width: 400px) {
    margin: 20px;
  }
`
