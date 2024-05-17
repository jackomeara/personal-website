import Navbar from "../components/navbar";
import Content from "../components/content";
import AutoScrollText from "../components/autoScrollText";

type Project = {
  title: string;
  link: string;
};

const projects: Project[] = [
  {
    title:
      "SMART TRAINER: MOBILE APP FOR SPORTS TECHNIQUE LEARNING - BSC FINAL YEAR PROJECT",
    link: "https://github.com/jackomeara/fyp",
  },
  {
    title:
      "BLENDIFY - CREATE CUSTOM SPOTIFY PLAYLISTS BASED ON SELECTED TRACKS, ARTISTS OR GENRES",

    link: "https://github.com/jackomeara/blendify",
  },
  {
    title:
      "PARALLEL COMPUTING - IMPLEMENTATION AND EVALUATION OF A VARIETY OF PARALLEL SORTING ALGORITHMS",
    link: "https://github.com/jackomeara/parallel-sorts",
  },
  {
    title:
      "VARIOUS MACHINE LEARNING PROJECTS INCLUDING IMAGE CLASSIFICATION, GENETIC ALGORITHMS, REGRESSION TASKS",

    link: "https://github.com/jackomeara/ml",
  },
];

function Projects() {
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <Navbar />
        <Content>
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              className="h-1/4 flex-row items-center flex border-black border-b-2 hover:bg-emerald-100"
              key={project.link}
            >
              {/* <p className="text-6xl text-nowrap overflow-clip">{project}</p> */}
              <AutoScrollText text={project.title} reverse={index % 2 == 0} />
            </a>
          ))}
        </Content>
      </div>
    </>
  );
}

export default Projects;
