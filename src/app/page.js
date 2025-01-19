import Header from './components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 items-center pt-20">
        <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* Kiri: Tulisan dan Foto */}
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start md:w-1/2 space-y-4">
            {/* Tulisan */}
            <div className="bg-white shadow-lg p-6 rounded-lg text-center md:text-left">
              <h1 className="text-4xl font-bold text-blue-500">
                Halo, saya Ficky Chikara Julivano
              </h1>
              <p className="mt-2 text-gray-700 text-lg">
                Seorang Web Developer yang berfokus pada pembuatan website modern dan responsif.
              </p>
            </div>

            {/* Foto */}
            <div className="flex justify-center items-center w-full">
              <img
                src="/profile.jpg"
                alt="Foto Ficky"
                className="w-[362px] h-[362px] rounded-full shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Kanan: Perkenalan */}
          <div className="bg-white shadow-lg p-6 rounded-lg md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800">Tentang Saya</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Saya adalah mahasiswa D3 Rekayasa Perangkat Lunak Aplikasi (RPLA) di Telkom University dengan minat besar dalam pengembangan aplikasi web dan mobile. Berbekal pemahaman dasar yang kuat tentang HTML, CSS, Laravel, dan React, saya terus mengembangkan keterampilan untuk menciptakan solusi yang sederhana, responsif, dan berfokus pada pengalaman pengguna.
              Saya terbiasa bekerja secara kolaboratif dalam tim untuk menyelesaikan proyek, memanfaatkan alat bantu seperti AI guna meningkatkan efisiensi. Komitmen saya adalah memberikan aplikasi yang intuitif, mudah digunakan, dan relevan dengan kebutuhan pengguna.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
