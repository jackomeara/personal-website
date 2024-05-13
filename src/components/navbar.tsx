function Navbar() {
  return (
    <>
      <nav
        style={{
          padding: "0 2vw",
        }}
        className="items-center flex flex-row w-full h-24"
      >
        <a href="/" style={{ flexGrow: 1 }}>
          <h1 className="sm:text-2xl lg:text-3xl">Jack O'Meara</h1>
        </a>
        <a href="/about" className="lg:text-xl sm:text-lg">
          About
        </a>
        <a href="/projects" className="lg:text-xl sm:text-lg pl-6">
          Projects
        </a>
      </nav>
    </>
  );
}

export default Navbar;
