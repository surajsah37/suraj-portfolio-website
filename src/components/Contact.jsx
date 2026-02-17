export default function Contact() {
  return (
    <section
      id="contact"
      className="px-10 py-24 bg-slate-900 text-center  scroll-mt-24"
    >
      <h2 className="text-3xl font-bold mb-4 text-cyan-400">
        Contact Me
      </h2>

      <p className="text-gray-400 mb-10 max-w-xl mx-auto">
        I am open to internships, full-time roles, and collaborative
        opportunities. Feel free to reach out if you'd like to connect
        or discuss potential projects.
      </p>

      <div className="flex flex-col items-center gap-5 mb-10">
        {/* Email */}
        <div className="flex items-center gap-4">
          <span className="text-cyan-400 text-xl">📧</span>
          <a
            href="mailto:surajsah45037@gmail.com"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            surajsah45037@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4">
          <span className="text-cyan-400 text-xl">📞</span>
          <a
            href="tel:8804284845"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            +91 8804284845
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-8">
        <a
          href="https://github.com/surajsah37"
          target="_blank"
          className="px-6 py-2 border border-slate-700 rounded-lg
                     text-gray-300 hover:text-cyan-400 hover:border-cyan-400
                     transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/suraj-sah-43092b1a0/"
          target="_blank"
          className="px-6 py-2 border border-slate-700 rounded-lg
                     text-gray-300 hover:text-cyan-400 hover:border-cyan-400
                     transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
