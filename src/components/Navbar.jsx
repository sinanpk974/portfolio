function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-black sticky top-0 text-white">
      <h1 className="text-3xl font-bold">Muhammed Sinan</h1>
      <ul className="flex gap-10 text-xl">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;