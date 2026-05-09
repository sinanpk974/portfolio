

export default function Projects() {
  const projects = [
  {
    title: "Portfolio Website",
    desc: "A personal portfolio built using HTML, CSS, Bootstrap, and JavaScript — fully responsive and optimized for performance.",
    image: "/Projects/portfolio.png",
    link: "https://sinanpk974.github.io/portfolio-demo-1/",
  },
  {
    title: "ToDo App",
    desc: "A To-Do application using HTML, CSS, and JavaScript, featuring real-time task management, including adding, editing, and removing tasks.",
    image: "/Projects/todo.png",
    link: "https://sinanpk974.github.io/To-do/",
  },
  {
    title: "Calculator App",
    desc: "A basic calculator web app built using HTML, CSS, and JavaScript that performs standard arithmetic operations with real-time DOM updates.",
    image: "/Projects/calculator.png",
    link: "https://sinanpk974.github.io/Calculator-Js/",
  },
  {
    title: "Event landing page",
    desc: "An event website built with HTML and CSS, showcasing event details with a clean and user-friendly design and layout.",
    image: "/Projects/tech-fusion.png",
    link: "https://sinanpk974.github.io/techfusion-2026/",
  },
  {
    title: "Starbucks UI Clone",
    desc: "A front-end clone of the Starbucks landing page built using HTML and CSS, focusing on layout structure, styling, and visual design.",
    image: "/Projects/starbucks-clone.png",
    link: "https://sinanpk974.github.io/starbucks-demo/",
  },
  {
    title: "Dynamic Product Page",
    desc: "A product detail page built with HTML, CSS, and JavaScript, featuring API data fetching and dynamic content rendering based on URL parameters.",
    image: "/Projects/product-page.png",
    link: "#",
  },
];
  return (
    <section id="projects" className="bg-gray-900 py-16 px-6 ">
      <div className="max-w-6xl mx-auto">

        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-white">
          My <span className="text-blue-500 italic text-5xl">Projects</span>
        </h2>

      
        <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-2">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-2xl transition"
            >
              
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2 text-blue-600">
                  {project.title}
                </h3>

                <p className="text-gray-800 text-xl mb-4 leading-relaxed">
                  {project.desc}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-gray-700 px-4 py-2 rounded hover:bg-blue-500 hover:border-blue-500 hover:text-white transition text-lg"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}