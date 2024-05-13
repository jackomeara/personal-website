import Navbar from "../components/navbar";
import Content from "../components/content";

function About() {
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <Navbar />
        <Content>
          <div>
            <ul>
              <li>Full-Stack Software Developer</li>
              <li>Cork, Ireland</li>
            </ul>
            <br />
            <a href="https://www.linkedin.com/in/jack-omeara" target="_blank">
              LinkedIn
            </a>
            <a
              href="http://www.github.com/jackomeara"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </Content>
      </div>
    </>
  );
}

export default About;
