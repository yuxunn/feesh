import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[url('/static/Background.png')] bg-cover bg-center font-sans bg-no-repeat p-4">
      <div className="container max-w-md  mx-auto text-center p-8 border-2 border-black bg-white shadow-lg rounded-lg">
        <div className=''>
          <img src="static/home-img.png" alt="Story" className="object-cover rounded-md mb-4 border-2 border-black rounded" />
        </div>
        <h1 className="py-2 text-3xl mx-2 font-bold mb-8 text-[#5359FF]">Which marine creature are you?</h1>
        <Link href="/quiz">
          <button className="bg-[#FFB8B8] text-black w-[12em] h-[3em] text-l py-2 px-4 border-2 border-black rounded-lg hover:bg-[#DF9A9A] transition duration-300">
            Start Quiz
          </button>
        </Link>
      </div>
      <div className='text-black p-4 pt-8 text-center text-sm'>
        <p>Made by @jing.yunn and @yuxun3696 :)</p> 
        <p>github repo link</p>
      </div>
    </main>
  );
}
