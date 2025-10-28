import { SectionWrapper } from "routes/Projects/Projects.styled"
import ProjectsContainer from "components/ProjectsContainer/ProjectsContainer"
import weatherChat from "../../assetes/pictures/weatherChat.png"
import shop from "../../assetes/pictures/shopClothes.png"
import terraform from "../../assetes/pictures/terraform.png"
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
    title: "E-commerce Application",
    content: "This is a web application that allows users to browse and purchase products. It contains both a frontend and a backend. The frontend is built with Vite + React, and the backend uses Node.js and MongoDB. Image storage is handled by Azure Storage. The application features routing for Women's, Men's, Kids', and Accessories categories. It includes an admin panel for managing products and orders, as well as standard features like a shopping cart and a favorites list. While the application is currently not deployed due to budget constraints for full deployment, you can clone the repository and run it locally.",
    stack: ["Vite,", "React,", "Tailwind CSS,", "REST API,","NodeJS,", "MongoDB,","Azure Storage,", "JavaScript,", "HTML,", "CSS"],
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
  },
  {
    id: "4",
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
