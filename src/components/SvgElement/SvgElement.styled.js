import styled from "styled-components"

export const Wrapper = styled.div`
  width: 160px;
  margin: 0 10px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    height: 60px;
    margin: 0;
  }
  p {
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.navyBlue};
  }
  @media (max-width: 1200px) {
    width: 100px;
    p {
      font-size: 16px;
    }
  }
  @media (max-width: 500px) {
    width: 90px;
    svg {
      height: 40px;
    }
    p {
      font-size: 14px;
    }
  }
  @media (max-width: 400px) {
    width: 80px;
  }
`
