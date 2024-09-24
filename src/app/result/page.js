'use client'; 
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Card from './Card';

export default function Results() {
  const searchParams = useSearchParams();
  const animal = searchParams.get('animal');

  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center bg-[url('/static/Background.png')] bg-cover bg-center bg-no-repeat">
      <Suspense fallback={<div>Loading...</div>}>
        <Card animal={animal} /> 
      </Suspense>

      <div className="text-black p-1 text-center text-sm">
        <p>Made by @jing.yunn and @yuxun3696 :)</p> 
        <p>github repo link</p>
      </div>
    </div>
  );
}
