import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import Particle from "../Components/Particles/Particle";

function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Project</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some personal projects I’ve worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card" >
            <ProjectCards
              imgPath="/images/Screenshot_8.png"
              title="Social Media App"
              description="This project is a feature-rich social platform designed to enhance user engagement and personalization. It includes secure authentication with JWT, account management through sign-up and password recovery, and profile updates. Users can interact via likes, comments, and real-time chats, with privacy ensured through block functionality. Additional features include theme customization, a 7-day activity timeline, bookmarking, and Instagram-style stories with close friends sharing and archiving options. Together, these features deliver a dynamic and user-friendly experience."
              tech="Tech-Stacks"
              techD="ReactJs | MUI | NodeJs Tailwind | MongoDb | Express | MERN Stack"
              link="https://social-media-app-tawny.vercel.app/"
              a="https://github.com/kunalBari5557/sociolmedia_app"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/Screenshot_3.png"
              title="Memories App"
              description="The Memories App is a user-friendly platform where individuals can capture, share, and engage with their cherished moments. It features a secure login and signup system, allowing users to create accounts and manage their personal profiles. Users can post their memories by adding titles, descriptions, and images, preserving meaningful moments in a visually appealing way. The app includes an efficient pagination system for seamless browsing of posts, ensuring smooth performance even with large volumes of data. A powerful search functionality enables users to quickly find specific memories by using keywords, while the commenting feature fosters engagement by allowing users to leave feedback and share perspectives on each post."
              tech="Tech-Stacks"
              techD="React Js | Node Js | MongoDB | Html | CSS | Javascript"
              link="https://github.com/kunalBari5557/memories_mern_app"
              a="https://github.com/kunalBari5557/memories_mern_app"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/Screenshot_1.png"
              title="Youtube clone"
              description="This YouTube clone project leverages third-party APIs to provide core functionalities of a video-sharing platform. Users can browse and search for videos, view trending content, and access video details such as titles, descriptions, and comments. With a focus on simplicity and integration, the platform offers a seamless video consumption experience without the need for direct content uploads or hosting. Additional features like a user-friendly interface and dark mode enhance the overall user experience."
              tech="Tech-Stacks"
              techD="React Js | MUI | Javascript | HTML | CSS"
              link="https://youtube-clone-lyart-two.vercel.app/"
              a="https://github.com/kunalBari5557/Youtube-clone"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/Screenshot_2.png"
              title="User Panel"
              description="This project utilizes the FakeStore API to create a feature-rich dashboard for managing users and products. The platform provides an intuitive interface for performing CRUD operations on products, allowing users to add, edit, view, and delete product details."
              tech="Tech-Stacks"
              techD="React Js | React-Router | Html | CSS | Javascript"
              link="https://admin-demo-gamma.vercel.app/"
              a="https://github.com/RaojiPatil/Healthmug-clone-cw-project"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}
export default Projects;



