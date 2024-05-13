import Navbar from "../components/navbar";
import Content from "../components/content";
import AutoScrollText from "../components/autoScrollText";
const projects = [
  "SMART TRAINER: MOBILE APP FOR SPORTS TECHNIQUE LEARNING - BSC FINAL YEAR PROJECT - SWIFT, SWIFTUI, ACTION CLASSIFICATION",
  "BLENDIFY - CREATE CUSTOM SPOTIFY PLAYLISTS BASED ON SELECTED TRACKS, ARTISTS OR GENRES - REACTJS, OAUTH2.0, SPOTIFY API",
  "PARALLEL COMPUTING - IMPLEMENTATION AND EVALUATION OF A VARIETY OF PARALLEL SORTING ALGORITHMS - C, MPICH, CUDA",
  "VARIOUS MACHINE LEARNING PROJECTS INCLUDING IMAGE CLASSIFICATION, GENETIC ALGORITHMS, REGRESSION TASKS - PYTHON, KERAS, TENSORFLOW",
];

function Projects() {
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <Navbar />
        <Content>
          {projects.map((project, index) => (
            <a
              href="/projects/smart-trainer"
              className="h-1/4 flex-row items-center flex border-black border-b-2 hover:blur-sm"
            >
              {/* <p className="text-6xl text-nowrap overflow-clip">{project}</p> */}
              <AutoScrollText text={project} reverse={index % 2 == 0} />
            </a>
          ))}
        </Content>
      </div>
    </>
  );
}

export default Projects;
