

import { Typewriter } from "react-simple-typewriter";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black">
      <div className="flex justify-between items-center px-10 py-5 max-w-7xl mx-auto">

        {/* Typing Name */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          <Typewriter
            words={["Suraj Kumar"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </h1>

        {/* Menu */}
        <ul className="flex gap-6 text-white">
          <li>
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}
