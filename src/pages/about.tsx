import Navbar from "../components/navbar";
import Content from "../components/content";

function About() {
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <Navbar />
        <Content>
          <div className="w-full flex flex-col mt-24 items-center">
            <p className="text-xl text-center">
              My name is Jack O'Meara. I am a full-stack software developer from
              Cork, Ireland.
            </p>
            <br />
            <p className="text-xl text-center">
              I am primarily interested in web development and AI.
            </p>
            <br />
            <p className="text-xl text-center">
              You can view some of my projects or connect with me below.
            </p>
            <br />
            <div className="flex gap-12">
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
          </div>
        </Content>
      </div>
    </>
  );
}

export default About;
