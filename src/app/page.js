import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="container max-w-lg mx-auto text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">Quiz App</h1>
        <Link href="/quiz">
          <button className="bg-blue-500 text-black font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
            Start Quiz
          </button>
        </Link>
      </div>
    </main>
  );
}
