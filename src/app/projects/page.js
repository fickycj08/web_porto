import { FaGithub, FaInstagram, FaLinkedin, FaUser, FaProjectDiagram, FaBriefcase, FaServicestack, FaCogs } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import Header from '../components/Header';

export default function Projects() {
  const projects = [
    {
      name: 'NugasYuk - Aplikasi Mobile Manajemen Tugas',
      description:
        'Aplikasi mobile berbasis Android yang dirancang untuk membantu pelajar dan mahasiswa mengelola tugas secara individu maupun kolaboratif. Dengan fitur penjadwalan tugas bersama melalui kelas yang dibuat oleh ketua kelas, aplikasi ini mempermudah perencanaan dan penyelesaian tugas secara terorganisir.',
      technologies: ['Kotlin', 'Golang', 'REST API', 'Azure'],
      github: 'https://github.com/fickycj08/nugasyuk',
      demo: 'https://nugasyuk.example.com',
      image: '/projects/nugasyuk.png', // Pastikan gambar proyek tersedia di folder public/projects/
    },
    {
      name: 'Catering Planner - Web Aplikasi Manajemen Catering',
      description:
        'Web aplikasi berbasis Laravel dan Filament yang dirancang untuk memudahkan manajemen catering, mulai dari pengelolaan menu, pesanan, pelanggan, staf, hingga inventaris bahan baku. Aplikasi ini memberikan solusi untuk pengelolaan tugas sehari-hari dalam bisnis catering secara lebih efisien dan terintegrasi.',
      technologies: ['Laravel', 'Filament', 'MySQL', 'Cloud Hosting'],
      github: 'https://github.com/fickycj08/catering-planner',
      demo: 'https://cateringplanner.example.com',
      image: '/projects/cateringplanner.png',
    },
    {
      name: 'Telwash - Web Kasir Laundry',
      description:
        'Sebuah aplikasi berbasis web yang membantu mengelola operasional bisnis laundry, termasuk manajemen transaksi, pelanggan, layanan, dan pembayaran. Menggunakan Laravel dan PHP untuk backend, serta Bootstrap untuk tampilan frontend.',
      technologies: ['Laravel', 'Bootstrap', 'Midtrans API'],
      github: 'https://github.com/fickycj08/telwash',
      demo: 'https://telwash.example.com',
      image: '/projects/telwash.png',
    },
    {
      name: 'Portfolio Website',
      description:
        'Sebuah website portofolio pribadi untuk menampilkan pengalaman, karya, dan keahlian. Dibangun dengan teknologi modern untuk memastikan tampilan responsif dan interaktif.',
      technologies: ['React', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/fickycj08/portfolio',
      demo: 'https://fickyjulivano.com',
      image: '/projects/portfolio.png',
    },
    {
      name: 'The Royal Contest',
      description:
        'Mengembangkan game hack and slash bertema samurai dengan mekanisme pertarungan yang responsif. Fitur utama meliputi desain mekanik bertarung yang cepat dan penuh aksi, serta visual efek dan animasi bertema Jepang untuk menambah estetika game.',
      technologies: ['Unity', 'C#'],
      github: 'https://github.com/fickycj08/the-royal-contest',
      demo: 'https://theroyalcontest.example.com',
      image: '/projects/theroyalcontest.png',
    },
  ];

  // Definisikan navigasi
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
      <main className="min-h-screen bg-[#0F182D] pt-20 px-4 sm:px-6 lg:px-12 pb-24"> {/* Tambahkan pb-24 untuk memberikan ruang di bawah navigasi mobile */}
        <div className="container mx-auto flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Sidebar Menu */}
          <aside className="hidden lg:block lg:w-1/4"> {/* Sembunyikan sidebar pada layar di bawah lg */}
            <ul className="space-y-6">
              {navigation.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div
                    className={`h-[2px] ${item.name === 'Projects' ? 'w-12 bg-white' : 'w-6 bg-gray-500'} transition-all duration-300`}
                  ></div>
                  <a
                    href={item.href}
                    className={`ml-4 flex items-center text-lg font-medium transition-colors duration-300 ${
                      item.name === 'Projects' ? 'text-white font-bold' : 'text-gray-400'
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
            <h1 className="text-3xl font-bold text-white mb-8">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-[#2A334D] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                  {/* Gambar Proyek */}
                  {project.image && (
                    <img
                      src={project.image}
                      alt={`${project.name} Screenshot`}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                  )}
                  <h2 className="text-2xl font-semibold text-white">{project.name}</h2>
                  <p className="text-gray-300 mt-2 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-[#1A2238] text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                        aria-label={`${project.name} GitHub Repository`}
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                        aria-label={`${project.name} Live Demo`}
                      >
                        {/* Ikon Panah Keluar sebagai representasi Live Demo */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
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
                item.name === 'Projects' ? 'text-white font-bold' : ''
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
