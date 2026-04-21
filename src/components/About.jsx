function About() {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-18 items-center">
        
        
        <div>
          <h2 className="text-5xl font-bold mb-6">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-300 mb-4 leading-relaxed text-xl">
            I'm a passionate <span className="text-white font-semibold">MERN Stack Developer</span> 
             who enjoys building scalable, efficient, and user-friendly web applications. 
            I specialize in creating full-stack solutions using 
            <span className="text-white"> MongoDB, Express.js, React, and Node.js</span>.
          </p>

          <p className="text-gray-300 mb-4 leading-relaxed text-xl">
            I focus on writing clean, maintainable code and building seamless user experiences. 
            From designing responsive frontends to developing robust backend APIs, 
            I love turning ideas into real-world applications.
          </p>

          <p className="text-gray-300 leading-relaxed text-xl">
            Currently, I’m improving my skills by working on real-world projects 
            and exploring modern technologies to become a better full-stack developer.
          </p>

          <a
            href="/resume.pdf"
            className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded transition text-lg"
          >
            Download Resume
          </a>
        </div>

        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-800 p-5 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-blue-500">10+</h3>
            <p className="text-gray-300 text-lg">Projects Built</p>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-blue-500">MERN</h3>
            <p className="text-gray-300 text-lg">Specialized Stack</p>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-blue-500">Clean</h3>
            <p className="text-gray-300 text-lg">Code Practice</p>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-blue-500">Fast</h3>
            <p className="text-gray-300 text-lg">Learning & Adapting</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;