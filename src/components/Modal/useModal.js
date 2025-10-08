import { useState } from "react"
import Modal from "./Modal"

const useModal = (inicialState = false) => {
  const [isOpen, setModalState] = useState(inicialState)

  const handleOpenModal = () => setModalState(true)
  const handleCloseModal = () => setModalState(false)

  return {
    Modal,
    isOpen,
    handleOpenModal,
    handleCloseModal,
  }
}

export default useModal
