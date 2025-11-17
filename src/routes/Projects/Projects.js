import { SectionWrapper } from "routes/Projects/Projects.styled"
import ProjectsContainer from "components/ProjectsContainer/ProjectsContainer"
import weatherChat from "../../assetes/pictures/weatherChat.png"
import ragService from "../../assetes/pictures/ragService.png"
// Tablica projektów - wypełnij swoimi danymi
const projects = [
  {
    id: "1",
    title: "Full-Stack AI Weather Application",
    content: "An AI-powered weather application designed to deliver real-time weather information. Its core feature is an AI Chatbot, developed using the Google ADK framework. This chatbot answers all weather-related queries by fetching and verifying data against an external weather API. The application also features robust authentication, implemented via Google OAuth and Time-based One-Time Passwords (TOTP) using a QR code",
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
    title: "RAG Chatbot",
    content: "This repository hosts a chatbot implementing Retrieval-Augmented Generation (RAG). It contains two distinct services: The first service is a chatbot that uses Milvus vector database to answer questions related to fundamental knowledge of AI. The second service is another chatbot utilizing PostgreSQL (with the pgvector extension), designed for searching through games available on Steam. The project is currently in progress, but you can clone the repository and run both services locally.",
    stack: ["Python,", "Postgres,", "Milvus,", "Machine Learning,", "Docker"],
    githublink: "https://github.com/Po33ski/similarity_service/tree/main",
    websitelink: "",
    shoplink: "",
    image: {
      url: `${ragService}`
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
