
function Skills() {
  const skills = [
  {
    title: "Frontend",
    items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "SCSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
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
    <section id="skills" className="py-20 px-6 bg-gray-200 ">
      <div className="max-w-7xl mx-auto text-center px-15">
        
        <h2 className="text-3xl font-bold mb-12">
          <span className="animate-pulse">
          My </span><span className="text-blue-500 italic text-4xl">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-20 text-white">
          {skills.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 p-10 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-5 text-blue-500">
                {category.title}
              </h3>

              <ul className="space-y-2 text-gray-300 text-lg">
                {category.items.map((skill, i) => (
                  <li key={i} className="hover:text-white transition">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
         
<div className="mt-20 text-center">
  <h3 className="text-xl font-bold text-blue-600 my-4">
    Soft Skills
  </h3>

  <div className="flex flex-wrap justify-center gap-14 text-gray-700 text-lg">
    <span className="hover:text-gray-900 transition">Communication</span>
    <span className="hover:text-gray-900 transition">Problem Solving</span>
    <span className="hover:text-gray-900 transition">Teamwork</span>
    <span className="hover:text-gray-900 transition">Time Management</span>
    <span className="hover:text-gray-900 transition">Adaptability</span>
  </div>
</div>
      </div>
    </section>
  );
}

export default Skills;