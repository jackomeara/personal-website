import Navbar from "../../components/navbar";
import Content from "../../components/content";

function SmartTrainer() {
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <Navbar />
        <Content>
          <h1>Smart Trainer</h1>
        </Content>
      </div>
    </>
  );
}

export default SmartTrainer;
