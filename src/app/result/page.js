'use client'; 
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Card from './card.jsx';
import { useRouter } from 'next/navigation';

const ResultContent = () => {
  const searchParams = useSearchParams();
  const animal = searchParams.get('animal');

  return <Card animal={animal} />;
};
export default function Results() {
  const router = useRouter();

  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center bg-[url('/static/Background.png')] bg-cover bg-center bg-no-repeat">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="quiz-container text-black p-4">
          <ResultContent /> 
        </div>
        
      </Suspense>

      <div className="text-black text-center text-sm">
        <div className="share mt-2 text-center">
          <p className="font-bold font-black">SHARE YOUR RESULTS!</p>
          <div className="flex justify-center space-x-4 mt-2">
            <img src="/static/socials/instagram.png" alt="Instagram" className="w-8 h-8" />
            <img src="/static/socials/telegram.png" alt="Telegram" className="w-8 h-8" />
            <img src="/static/socials/twitter.png" alt="Twitter" className="w-8 h-8" />
            <img src="/static/socials/whatsapp.png" alt="Whatsapp" className="w-8 h-8" />
          </div>
          <div className="pb-4">
            <button
              onClick={() => router.push('/')} // Use router here
              className="bg-[#FFB8B8] text-black w-[12em] h-[3em] text-l py-2 px-4 border-2 border-black rounded-lg hover:bg-[#DF9A9A] transition duration-300 mt-6"
            >
              Restart
            </button>
          </div>

        </div>
        <div className='text-black p-4 text-center text-sm'>
        <p>Made by @jing.yunn and @yuxun3696 :)</p> 
        <a href="https://github.com/yuxunn/feesh" className="flex justify-center items-center space-x-2">
          <img src="/static/socials/github.png" alt="GitHub" className="w-6 h-6" />
          <span>GitHub</span>
        </a>
      </div> 
      </div>
    </div>
  );
}