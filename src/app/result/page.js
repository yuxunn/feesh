"use client"; 
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Results() {
  const searchParams = useSearchParams();
  const animal = searchParams.get('animal');
  const compatible = searchParams.get('compatible');
  const incompatible = searchParams.get('incompatible');

  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center bg-[url('/static/Background.png')] bg-cover bg-center bg-no-repeat">

    <div className="quiz-container text-black">
      <h3>Results</h3>
      <p>Your aquatic animal is: {animal}</p>
      <p>Compatible Animal: {compatible}</p>
      <p>Incompatible Animal: {incompatible}</p>
      <Link href="/">
        <button className="bg-[#FFB8B8] text-black w-[12em] h-[3em] text-l py-2 px-4 border-2 border-black rounded-lg hover:bg-[#DF9A9A] transition duration-300">
          Restart Quiz
        </button>
      </Link>
    </div>
    </div>
  );
}
