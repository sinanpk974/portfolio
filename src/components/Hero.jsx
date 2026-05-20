export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center 
      px-6 py-16 overflow-hidden bg-gradient-to-br from-gray-100 via-blue-50 to-gray-200"
    >

      {/* Blur Effects */}
      <div className="absolute w-56 h-56 bg-blue-300 rounded-full blur-3xl opacity-20 top-10 left-0"></div>

      <div className="absolute w-56 h-56 bg-purple-300 rounded-full blur-3xl opacity-20 bottom-10 right-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Hi, I'm{" "}
          <span className="text-blue-500 italic">
            Muhammed Sinan PK
          </span>
        </h1>

        <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto text-gray-700 leading-relaxed px-2">
          MERN Stack Developer crafting scalable and efficient full-stack web
          applications, combining modern frontend design with robust backend
          architecture using MongoDB, Express.js, React, and Node.js.
        </p>

        <a
          href="#projects"
          className="inline-block bg-blue-500 hover:bg-blue-600 px-5 py-2.5 
          rounded-lg text-white text-base font-semibold transition shadow-md"
        >
          View Projects
        </a>

      </div>
    </section>
  );
}