import React from "react"
import { SectionWrapper, ContentWrapper } from "routes/Contact/Contact.styled"
import useModal from "components/Modal/useModal"
import Footer from "components/Footer/Footer"
import CustomButton from "components/CustomButton/CustomButton"
import { ReactComponent as EmailIcon } from "assetes/svgIcons/emailIcon.svg"

const Contact = ({
  contactRef,
  toggleScrollToSection,
  homeRef,
  aboutRef,
  projectsRef,
}) => {
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal()
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jaroslaw.popardowski@outlook.com")
    handleOpenModal()
  }
  return (
    <SectionWrapper ref={contactRef}>
      {isOpen ? (
        <Modal
          icon={<EmailIcon />}
          handleCloseModal={handleCloseModal}
          text="You have successfully copied the email address. I will respond as soon as possible."
        />
      ) : null}
      <ContentWrapper>
        <h1>Contact</h1>
        <p>Don't be shy, send a message!</p>
        <CustomButton text="CLICK TO COPY E-MAIL" onClick={handleCopyEmail} />
      </ContentWrapper>
      <Footer
        toggleScrollToSection={toggleScrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
      />
    </SectionWrapper>
  )
}

export default Contact
