function Skills() {
  const skills = [
    {
      title: "Frontend",
      items: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "SCSS",
      ],
    },
    {
      title: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
      ],
    },
    {
      title: "Database",
      items: ["MongoDB", "Mongoose"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "Postman", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="py-14 px-6 bg-gray-200">
      
      <div className="max-w-6xl mx-auto text-center px-4 md:px-6">

        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          <span className="animate-pulse">
            My
          </span>{" "}
          
          <span className="text-blue-500 italic text-3xl md:text-4xl">
            Skills
          </span>
        </h2>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">

          {skills.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition max-w-sm mx-auto w-full"
            >

              <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-500">
                {category.title}
              </h3>

              <ul className="space-y-2 text-gray-300 text-sm md:text-base">

                {category.items.map((skill, i) => (
                  <li key={i} className="hover:text-white transition">
                    • {skill}
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

        {/* Soft Skills */}
        <div className="mt-14 text-center">

          <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-4">
            Soft Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-gray-700 text-sm md:text-base">

            <span className="hover:text-gray-900 transition">
              Communication
            </span>

            <span className="hover:text-gray-900 transition">
              Problem Solving
            </span>

            <span className="hover:text-gray-900 transition">
              Teamwork
            </span>

            <span className="hover:text-gray-900 transition">
              Time Management
            </span>

            <span className="hover:text-gray-900 transition">
              Adaptability
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;