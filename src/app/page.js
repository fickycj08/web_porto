import Header from './components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      </main>
    </>
  );
}
