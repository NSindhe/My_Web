import React from "react";
import MainScreen from "../../components/MainScreen";
import styled from "styled-components";
import myPic from "../../images/n.jpg";

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 100px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Project = styled.div``;

const LeftPart = styled.div`
  flex: 30%;
  margin-top: 30px;
`;

const ProjectList = styled.div`
  flex: 100%;
  margin-top: 30px;
`;

const ProjectTitle = styled.span`
  font-size: 30px;
  font-color: black;
  font-weight: 400;
`;

const SkillList = styled.p`
  background-color: #b6b7f1b3;
  padding: 10px;
  margin-right: 20px;
`;

// const RightPart = styled.div`
//   flex: 30%;
//   margin-top: 30px;
// `;

const Image = styled.div`
  background-image: url("${myPic}");
`;

const Home = () => {
  return (
    <MainScreen title="Projects and Experience">
      <p>
        I am a web developer with 7+ years of experience, I have 5+ years of
        experience in React(UI) developements and 2 years of experence in
        testing. I started my career in Amazon as a Test Engineer, got chance to
        work as UI developer. Currently working as developent lead(IC) in
        People10 Bangalore.
      </p>

      <Box>
        <LeftPart>
          Skills
          <SkillList>
            HTML, CSS, JavaScript ReactJS, Redux, NextJS NodeJS, Express,
            Mongodb Graphql
          </SkillList>
          <img src={myPic} alt="" />
        </LeftPart>
        <ProjectList>
          <Project>
            <ProjectTitle>Portfolio</ProjectTitle>
            <p>
              In this project I have developed my portfolio, where you can see
              the information related my portfolio. This is developed using
              NextJS. Its a practice basic NextJS project where you can know how
              the folder structure is added.
            </p>
            <p>
              <a
                style={{ color: "#0556f3" }}
                href="https://github.com/NSindhe/nextPortfolio"
              >
                Redirect to repo
              </a>
            </p>
          </Project>
          <hr />
          <Project>
            <ProjectTitle>My Web</ProjectTitle>
            <p>
              This project has the details related to me and my experience and
              some of the project that I learned, worked and practiced upon.
              Listed the project and each project is linked to the github
            </p>
            <p>
              <a
                style={{ color: "#0556f3" }}
                href="https://github.com/NSindhe/My_Web"
              >
                Redirect to repo
              </a>
            </p>
          </Project>
          <hr />
          <Project>
            <ProjectTitle>Notebook</ProjectTitle>
            <p>
              This is MERN stack project, it is basically a todo list app where
              you can do CRUD operations. In this project I have created the
              server wwith NodeJS that connected to mongo. Used redux as well.
              The authentication and autorization is also included where logged
              in person can modify the list.
            </p>
            <p>
              <a
                style={{ color: "#0556f3" }}
                href="https://github.com/NSindhe/MERN_Notebook"
              >
                Redirect to repo
              </a>
            </p>
          </Project>
          <hr />
          <Project>
            <ProjectTitle>Sketch Gallery</ProjectTitle>
            <p>This project is under progress.</p>
            <p>
              <a
                style={{ color: "#0556f3" }}
                href="https://github.com/NSindhe/sketch-gallery"
              >
                Redirect to repo
              </a>
            </p>
          </Project>
          <hr />
          <Project>
            <ProjectTitle>Sample node service</ProjectTitle>
            <p>A basic nodejs application to run a server locally</p>
            <p>
              <a
                style={{ color: "#0556f3" }}
                href="https://github.com/NSindhe/SampleNodeJS"
              >
                Redirect to repo
              </a>
            </p>
          </Project>
          <hr />
        </ProjectList>
        {/* <RightPart>
          Right
          <p>
            Focused Programmer Analyst with problem solving and troubleshooting
            skills. Resourceful with the ability to thrive in challenging,
            fast-paced environments.
          </p>
        </RightPart> */}
      </Box>
    </MainScreen>
  );
};

export default Home;
