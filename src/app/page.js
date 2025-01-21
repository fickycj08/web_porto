import { FaGithub, FaInstagram, FaLinkedin, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaLaravel, FaPhp } from "react-icons/fa";
import { SiFigma, SiCanva, SiAndroidstudio, SiUnity, SiBlender, SiVscode } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaUser, FaProjectDiagram, FaBriefcase, FaServicestack, FaCogs } from "react-icons/fa";

import Header from './components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0F182D] pt-20 px-4 sm:px-6 lg:px-12">
        {/* Hero Section */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-16">

          {/* Kiri: Tulisan dan Foto */}
          <div className="flex flex-col lg:w-1/2 space-y-6">
            <div className="bg-[#1A2238] shadow-lg p-8 rounded-lg text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Halo, saya Ficky Chikara Julivano
              </h1>
              <p className="mt-4 text-gray-300 text-base sm:text-lg lg:text-xl">
                Seorang Web Developer yang berfokus pada pembuatan website modern dan responsif.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/profile.jpg"
                alt="Foto Ficky"
                className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[362px] lg:h-[362px] rounded-full shadow-lg object-cover border-4 border-gradient-to-r from-pink-500 to-purple-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Kanan: Perkenalan */}
          <div className="bg-[#1A2238] shadow-lg p-8 rounded-lg lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Tentang Saya
            </h2>
            <p className="mt-6 text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
              Saya adalah mahasiswa D3 Rekayasa Perangkat Lunak Aplikasi (RPLA) di Telkom University yang memiliki minat besar dalam pengembangan aplikasi berbasis web dan mobile. Dengan pemahaman dasar yang kuat tentang alur kerja coding dan penggunaan teknologi seperti HTML, CSS, Laravel, serta PHP, saya terus berusaha untuk mengembangkan keterampilan saya di bidang ini.
              <br />
              <br />
              Saya terbiasa bekerja secara kolaboratif dalam tim untuk menyelesaikan proyek, serta mampu memanfaatkan alat bantu seperti AI untuk menyempurnakan efisiensi pekerjaan saya. Komitmen saya adalah menciptakan solusi aplikasi yang sederhana, responsif, dan mudah digunakan, dengan fokus utama pada pengalaman pengguna.
            </p>
          </div>
        </div>

        {/* Menu Navigasi Desktop */}
        <div className="mt-16">
          <div className="container mx-auto flex justify-center">
            <nav className="hidden lg:flex space-x-8">
              {["About Me", "Projects", "Experience", "Services", "Skill"].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="text-gray-300 hover:text-white text-lg font-semibold transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Menu Navigasi Mobile */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#1A2238] shadow-t md:hidden">
          <nav className="container mx-auto flex justify-around items-center py-2">
            {[
              { name: "About Me", icon: <FaUser /> },
              { name: "Projects", icon: <FaProjectDiagram /> },
              { name: "Experience", icon: <FaBriefcase /> },
              { name: "Services", icon: <FaServicestack /> },
              { name: "Skill", icon: <FaCogs /> },
            ].map((item, index) => (
              <a
                key={index}
                href={`#${item.name.toLowerCase().replace(' ', '')}`}
                className="flex flex-col items-center text-gray-300 hover:text-white transition-colors duration-300"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-xs">{item.name}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Social Media */}
        <div className="mt-16">
          <div className="container mx-auto flex justify-center gap-8">
            <a
              href="https://github.com/fickycj08"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex justify-center items-center bg-gray-800 text-white rounded-full hover:bg-blue-500 transition-transform transform hover:scale-110 duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://instagram.com/fickyjulifano"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex justify-center items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:opacity-80 transition-opacity duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com/in/ficky-chikara-julivano-300694250"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex justify-center items-center bg-blue-700 text-white rounded-full hover:bg-blue-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Bahasa Pemrograman */}
        <div className="mt-16">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12">
              Bahasa Pemrograman yang Dikuasai
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">
              {[
                { icon: <FaHtml5 size={80} className="text-orange-500 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300" />, label: "HTML" },
                { icon: <FaCss3Alt size={80} className="text-blue-500 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300" />, label: "CSS" },
                { icon: <FaJs size={80} className="text-yellow-400 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300" />, label: "JavaScript" },
                { icon: <FaBootstrap size={80} className="text-purple-600 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300" />, label: "Bootstrap" },
                { icon: <FaLaravel size={80} className="text-red-600 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300" />, label: "Laravel" },
                { icon: <FaPhp size={80} className="text-indigo-500 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300" />, label: "PHP" },
              ].map((item, index) => (
                <div key={index} className="group flex flex-col items-center">
                  {item.icon}
                  <p className="text-gray-300 mt-4 text-lg font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools yang Dikuasai */}
        <div className="mt-16">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12">
              Tools yang Dikuasai
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">
              {[
                { icon: <SiFigma size={80} className="text-pink-600 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300" />, label: "Figma" },
                { icon: <SiCanva size={80} className="text-blue-400 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300" />, label: "Canva" },
                { icon: <SiAndroidstudio size={80} className="text-green-500 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300" />, label: "Android Studio" },
                { icon: <SiUnity size={80} className="text-gray-500 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300" />, label: "Unity" },
                { icon: <SiBlender size={80} className="text-orange-500 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300" />, label: "Blender" },
                { icon: <VscVscodeInsiders size={80} className="text-blue-500 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300" />, label: "VS Code" },
                { icon: <FaGithub size={80} className="text-gray-300 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300" />, label: "GitHub" },
              ].map((item, index) => (
                <div key={index} className="group flex flex-col items-center">
                  {item.icon}
                  <p className="text-gray-300 mt-4 text-lg font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 py-8 bg-[#1A2238]">
          <div className="container mx-auto text-center">
            <p className="text-gray-400 text-sm sm:text-base">
              © {new Date().getFullYear()} Ficky Chikara Julivano. All rights reserved.
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="mailto:ficky@example.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                Email
              </a>
              <a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
