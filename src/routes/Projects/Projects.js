import { SectionWrapper } from "routes/Projects/Projects.styled"
import ProjectsContainer from "components/ProjectsContainer/ProjectsContainer"
import weatherChat from "../../assetes/pictures/weatherChat.png"
import shop from "../../assetes/pictures/shopClothes.png"
import terraform from "../../assetes/pictures/terraform.png"

// Tablica projektów - wypełnij swoimi danymi
const projects = [
  {
    id: "1",
    title: "Full-Stack AI Weather Application",
    content: "Weather application that uses AI to provide weather information. The core feature of the application is an AI Chatbot developed with the Google ADK framework. This chatbot is designed to answer all weather-related queries by fetching and verifying information against real-time data obtained from an external weather service/API. The application also features robust authentication, implemented using both Google OAuth and Time-based One-Time Passwords (TOTP) via QR code.",
    stack: ["Next.js,", "TypeScript,", "React,", "Tailwind CSS,", "Google ADK,", "FastAPI,", "Docker,", "Python,", "SQL,", "CI/CD,", "Git,", "Google Cloud Platform"],
    githublink: "https://github.com/Po33ski/weather-chat",
    websitelink: "https://weather-chat-6g4p.onrender.com/",
    shoplink: "",
    image: {
      url: `${weatherChat}`
    },
    video: {
      url: "" // Plik musi być w folderze public/
    }
  },
  {
    id: "2",
    title: "E-commerce Application",
    content: "It is a web application that allows users to browse and purchase products. It conatins a frontend and a backend. The frontend is built with Vite+React and the backend is built with simple REST API. It contains routing to Women, Men, Kids, and Accessories categories. The application also contains a shopping cart, and favorites list.",
    stack: ["Vite,", "React,", "Tailwind CSS,", "REST API,", "JavaScript,", "HTML,", "CSS"],
    githublink: "https://github.com/Po33ski/Shop-Project.git",
    websitelink: "",
    shoplink: "",
    image: {
      url: `${shop}`
    },
    video: {
      url: "" // Link do zdjęcia projektu
    }
  },
  {
    id: "3",
    title: "Terraform Project",
    content: "This repository is a conceptual showcase designed to help understand the basics of Terraform-managed infrastructure. It features a hands-on example of deploying an S3 bucket, demonstrating the integration of both AWS and GitHub providers. This project is ideal for those looking to grasp fundamental Terraform concepts.",
    stack: ["Terraform,", "AWS,", "Git"],
    githublink: "https://github.com/Po33ski/terraform-managed-repo.git",
    websitelink: "",
    shoplink: "",
    image: {
      url: `${terraform}`
    },
    video: {
      url: "" // Link do zdjęcia projektu
    }
  }
]

const Projects = ({ projectsRef }) => {
  return (
    <SectionWrapper ref={projectsRef}>
      <ProjectsContainer projects={projects} />
    </SectionWrapper>
  )
}

export default Projects
