import Navbar from "../components/navbar";
import Content from "../components/content";
import Tangram from "../components/tangram";

function Home() {
  return (
    <>
      <Navbar />
      <Content>
        <Tangram />
      </Content>
    </>
  );
}

export default Home;
