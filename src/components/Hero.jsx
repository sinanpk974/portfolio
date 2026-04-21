function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-100">
      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm <span className="text-blue-500">Muhammed Sinan Pk</span>
      </h1>
      <p className="text-2xl mb-6 py-6 px-20">
        MERN Stack Developer crafting scalable and efficient full-stack web applications,
         combining modern frontend design with robust backend architecture using MongoDB, 
         Express.js, React, and Node.js.
      </p>
      <a href="#projects" className="bg-blue-600 px-6 py-2 rounded text-white text-lg">
        View Projects
      </a>
    </section>
  );
}
export default Hero;