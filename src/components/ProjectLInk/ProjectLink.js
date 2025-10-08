import { LinkWrapper } from "./ProjectLink.styled"

const StackLink = ({ adress, icon, text }) => {
  return (
    <LinkWrapper>
      <a target="_blank" rel="noreferrer" href={adress}>
        {icon}
        <span>{text}</span>
      </a>
    </LinkWrapper>
  )
}

export default StackLink
