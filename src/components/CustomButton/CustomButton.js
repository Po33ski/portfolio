import { ButtonWrapper } from "./CustomButton.styled"

const CustomButton = ({
  icon,
  text,
  adress,
  download = "",
  onClick = () => {},
  buttonMinWidth = "auto",
}) => {
  return (
    <ButtonWrapper onClick={onClick} buttonMinWidth={buttonMinWidth}>
      {adress ? (
        <a target="_blank" rel="noreferrer" href={adress} download={download}>
          {icon}
          <span>{text}</span>
        </a>
      ) : (
        <p>{text}</p>
      )}
    </ButtonWrapper>
  )
}

export default CustomButton
