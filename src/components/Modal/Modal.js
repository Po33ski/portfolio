import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { BacgroundShadow, PopUpWrapper } from "./Modal.styled"
import CustomButton from "components/CustomButton/CustomButton"

const modalContainer = document.getElementById("modal-container")

const Modal = ({ handleCloseModal, icon, text }) => {
  const [popUpClasActive, setPopUpClasActive] = useState("active")
  const modalNode = document.createElement("div")

  const handleCloseWithAnimation = () => {
    setPopUpClasActive("disActive")
    setTimeout(handleCloseModal, 300)
  }

  useEffect(() => {
    modalContainer.appendChild(modalNode)

    return () => {
      modalContainer.removeChild(modalNode)
    }
  }, [modalNode])

  return ReactDOM.createPortal(
    <BacgroundShadow className={popUpClasActive}>
      <PopUpWrapper className={popUpClasActive}>
        {icon}
        <p>{text}</p>
        <CustomButton onClick={handleCloseWithAnimation} text="CLOSE" />
      </PopUpWrapper>
    </BacgroundShadow>,
    modalNode
  )
}

export default Modal
