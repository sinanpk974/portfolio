export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden 
    bg-gradient-to-br from-gray-100 via-blue-50 to-gray-200">

      
      <div className="absolute w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-25 top-20 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-25 bottom-20 right-10"></div>

      
      <div className="relative z-10">

        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Hi, I'm{" "}
          <span className="text-blue-500 italic">
            Muhammed Sinan PK
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-6 px-6 md:px-0 max-w-2xl mx-auto text-gray-700 leading-relaxed">
          MERN Stack Developer crafting scalable and efficient full-stack web applications,
          combining modern frontend design with robust backend architecture using MongoDB,
          Express.js, React, and Node.js.
        </p>

        <a
          href="#projects"
          className="inline-block bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg text-white text-lg font-semibold transition shadow-md hover:shadow-lg"
        >
          View Projects
        </a>

      </div>
    </section>
  );
}