import styled from "styled-components"

export const LinkWrapper = styled.div`
  /* margin-top: 10px; */
  margin: 10px;
  min-width: 140px;
  display: flex;
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.navyBlue};
    svg {
      width: 40px;
      margin-right: 10px;
      fill: ${({ theme }) => theme.colors.navyBlue};
    }
    span {
    }
  }
  a:hover {
    span {
      color: orange;
    }
    svg {
      fill: orange;
      /* stroke: orange; */
    }
  }
`
