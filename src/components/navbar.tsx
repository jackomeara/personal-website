function Navbar() {
  return (
    <>
      <nav
        style={{
          height: "12vh",
          display: "flex",
          width: "100%",
          alignItems: "center",
          padding: "0 2vw",
        }}
      >
        <h1 style={{ flexGrow: 1 }} className="text-3xl">
          Jack O'Meara
        </h1>
        <a href="/about" className="text-xl">
          About
        </a>
        <a href="/projects" className="text-xl pl-6">
          Projects
        </a>
      </nav>
    </>
  );
}

export default Navbar;
