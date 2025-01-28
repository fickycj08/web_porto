// pages/experience.jsx
import { FaGithub, FaInstagram, FaLinkedin, FaUser, FaProjectDiagram, FaBriefcase, FaServicestack, FaCogs } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import Header from '../components/Header';
import ExperienceCard from '../components/ExperienceCard';
import { experiences } from '../data/experience'; // Import data pengalaman

export default function Experience() {
  const navigation = [
    { name: 'About Me', href: '/', icon: <FaUser /> },
    { name: 'Projects', href: '/projects', icon: <FaProjectDiagram /> },
    { name: 'Experience', href: '/experience', icon: <FaBriefcase /> },
    { name: 'Services', href: '/services', icon: <FaServicestack /> },
    { name: 'Contact Me', href: '/contact', icon: <GrContactInfo /> },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0F182D] pt-20 px-4 sm:px-6 lg:px-12 pb-24">
        <div className="container mx-auto flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Sidebar Menu */}
          <aside className="hidden lg:block lg:w-1/4">
            <ul className="space-y-6">
              {navigation.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div
                    className={`h-[2px] ${item.name === 'Experience' ? 'w-12 bg-white' : 'w-6 bg-gray-500'} transition-all duration-300`}
                  ></div>
                  <a
                    href={item.href}
                    className={`ml-4 flex items-center text-lg font-medium transition-colors duration-300 ${
                      item.name === 'Experience' ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media Links */}
            <div className="mt-8 flex space-x-4">
              <a
                href="https://github.com/fickycj08"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex justify-center items-center bg-gray-800 text-white rounded-full hover:bg-blue-500 transition-transform transform hover:scale-110 duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://instagram.com/fickyjulifano"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex justify-center items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:opacity-80 transition-opacity duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com/in/ficky-chikara-julivano-300694250"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex justify-center items-center bg-blue-700 text-white rounded-full hover:bg-blue-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </aside>

          {/* Main Content */}
          <section className="flex-1 bg-[#1A2238] p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-white mb-8">Experience</h1>
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} isLeft={index % 2 === 0} />
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Menu Navigasi Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1A2238] shadow-md lg:hidden">
        <nav className="container mx-auto flex justify-around items-center py-2">
          {navigation.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`flex flex-col items-center text-gray-300 hover:text-white transition-colors duration-300 ${
                item.name === 'Experience' ? 'text-white font-bold' : ''
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
