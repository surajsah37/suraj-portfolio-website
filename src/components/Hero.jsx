import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen scroll-mt-24 flex items-center
                 bg-gradient-to-br from-slate-950 to-slate-900 px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Hi, I'm <span className="text-cyan-400">Suraj</span>
            <br />
            Kumar
          </h1>
{
          <motion.h2
  className="mt-4 text-2xl md:text-3xl font-semibold text-cyan-300"
  initial={{ opacity: 0 }}
  animate={{ opacity: [0, 1, 1, 0] }}
  transition={{
    duration: 2,
    times: [0, 0.3, 0.7, 1],
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  Full Stack Developer
</motion.h2>
}

          <p className="mt-6 text-gray-400 max-w-lg leading-relaxed">
            I build scalable web applications with clean user interfaces and
            efficient backend systems. Passionate about problem-solving and
            real-world projects.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg
                         hover:bg-cyan-400 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border-2 border-cyan-400 text-cyan-400
                         rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-cyan-400 overflow-hidden shadow-2xl">
            <img
              src={profile}
              alt="Suraj Kumar"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
