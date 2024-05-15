import Navbar from "../components/navbar";
import Content from "../components/content";
import Tangram from "../components/tangram";

function Home() {
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <Navbar />
        <Content>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Tangram size={550} />
          </div>
        </Content>
      </div>
    </>
  );
}

export default Home;
