export default function Projects() {

  const projects = [
    {
      title: "Netflix Clone (MERN Stack)",
      description:
        "A full-stack Netflix-inspired streaming platform with user authentication, categorized movie browsing, and secure backend APIs using JWT authentication.",
      tech: "MongoDB, Express.js, React.js, Node.js, JWT, Axios, Tailwind CSS",
      link: "#"
    },

    {
      title: "Food Delivery Application (React)",
      description:
        "A responsive food ordering platform featuring restaurant listings, dynamic menus, cart functionality, and seamless routing for smooth user experience.",
      tech: "React.js, Tailwind CSS, JavaScript (ES6+), React Router DOM, Axios",
      link: "#"
    },
    {
      title: "Hotel Management System (MERN Stack)",
      description:
        "A complete hotel management solution with room booking, availability tracking, customer management, billing system, and admin dashboard with secure authentication.",
      tech: "MongoDB, Express.js, React.js, Node.js, JWT",
      link: "#"
    },
    {
      title: "Quiz Application (MERN Stack)",
      description:
        "An interactive quiz platform with category-based quizzes, timer functionality, score tracking, and dynamic question management through RESTful APIs.",
      tech: "MongoDB, Express.js, React.js, Node.js, JWT",
      link: "#"
    },
    {
      title: "Banking Management System (MERN Stack)",
      description:
        "A secure banking system with account management, transaction history, balance tracking, income-expense analytics, and JWT-based authentication.",
      tech: "MongoDB, Express.js, React.js, Node.js, Charts.js, JWT",
      link: "#"
    },
    {
      title: "E-Commerce Website (MERN Stack)",
      description:
        "A Flipkart-inspired full-stack e-commerce platform with authentication, product filtering, cart management, checkout system, and payment integration.",
      tech: "MongoDB, Express.js, React.js, Node.js, Tailwind CSS, JWT",
      link: "#"
    },
    {
      title: "YouTube Clone (React.js)",
      description:
        "A real-time video streaming application inspired by YouTube with dynamic video search, category filtering, video player integration, and API-based content rendering.",
      tech: "React.js, Tailwind CSS, Axios, Rapid API, React Router DOM",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="px-6 md:px-12 py-20 scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-cyan-400 text-center">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-900 p-6 rounded-2xl hover:scale-105 transition duration-300 shadow-lg border border-slate-800"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>

            <p className="text-xs text-gray-500 mb-4">
              <span className="text-cyan-400 font-medium">Tech Stack:</span> {project.tech}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-cyan-400 hover:text-cyan-300 hover:underline text-sm font-medium"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
