'use client'; 
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
export const dynamic = 'force-dynamic';

export default function Results() {
  const searchParams = useSearchParams();
  const animal = searchParams.get('animal');
  const compatible = searchParams.get('compatible');
  const incompatible = searchParams.get('incompatible');

  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center bg-[url('/static/Background.png')] bg-cover bg-center bg-no-repeat">
      <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>

      <div className="text-black p-1 text-center text-sm">
        <p>Made by @jing.yunn and @yuxun3696 :)</p> 
        <p>github repo link</p>
      </div>
    </div>
  );
}
