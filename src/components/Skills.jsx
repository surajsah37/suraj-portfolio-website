export default function Skills() {
  const skills = {
    Languages: ["C", "C++", "JavaScript"],
    "Frontend": ["HTML", "CSS", "React.js", "Tailwind CSS","HTML5 & CSS3","JavaScript (ES6+)"],
    "Backend": ["Node.js", "Express","Node.js & Express","REST APIs"],
    "Database": ["MySQL", "MongoDB","Cloudinary"],
    "Core & Tools":["C++ (DSA)","Git & GitHub","VS Code","Postman"]
  };

  return (
    <section id="skills" className="px-10 py-24 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-12 text-cyan-400 text-center">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-slate-900 rounded-xl p-6 border border-slate-800
                       hover:border-cyan-400 hover:shadow-cyan-400/20
                       hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-4 text-cyan-300">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-slate-800 rounded-full text-sm
                             hover:bg-cyan-400 hover:text-black
                             transition cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
