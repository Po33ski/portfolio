import { Wrapper } from "./SvgElement.styled"

const SvgElement = ({ svg, title }) => {
  return (
    <Wrapper>
      {svg}
      <p>{title}</p>
    </Wrapper>
  )
}

export default SvgElement
