import React from 'react';
import { getAnimalInfo } from './data.js'; 
import { useRouter } from 'next/navigation';

const Card = ({ animal }) => {
    const router = useRouter(); 

  const { writeUp, bulletPoints, compatible, incompatible, image } = getAnimalInfo(animal);

  const compatibleAnimalInfo = compatible.map(animal => getAnimalInfo(animal));
  const incompatibleAnimalInfo = incompatible.map(animal => getAnimalInfo(animal));

  return (
    <div className="result-card text-black bg-white border-2 border-black rounded-lg p-6 max-w-md mx-auto mt-10">

      <h2 className="text-xl font-bold text-center text-black">YOU GOT...</h2>
      <h1 className="text-4xl font-bold text-center text-black ">{animal}</h1>



      <div className="flex justify-center items-center my-4 space-x-4">
        <img src={image} alt={`${animal} image`} className="w-32 h-32" />
        
        <ul className="list-disc text-left">
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="writeup mt-4 space-y-2  text-black ">
        {writeUp.map((line, index) => (
          <p key={index} className="bg-yellow-200 p-2 rounded-lg text-center  text-black ">{line}</p>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <div className="attraction">
          <h4 className="font-bold">STRONG ATTRACTION</h4>
          <div className="flex space-x-2 mt-2">
            {compatibleAnimalInfo.map((animalInfo, index) => (
              <div key={index} className="text-center">
                <p>{animalInfo.animal}</p>
                <img src={animalInfo.image} alt={`${animalInfo.animal} image`} className="w-16 h-16" />
              </div>
            ))}
          </div>
        </div>
        <div className="attraction">
          <h4 className="font-bold">WEAK ATTRACTION</h4>
          <div className="flex space-x-2 mt-2">
            {incompatibleAnimalInfo.map((animalInfo, index) => (
              <div key={index} className="text-center  text-black">
                <p>{animalInfo.animal}</p>
                <img src={animalInfo.image} alt={`${animalInfo.animal} image`} className="w-16 h-16" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="share mt-8 text-center">
        <p className="font-bold font-black">SHARE YOUR RESULTS!</p>
        <div className="flex justify-center space-x-4 mt-2">
          <img src="/static/socials/instagram.png" alt="Instagram" className="w-8 h-8" />
          <img src="/static/socials/telegram.png" alt="Telegram" className="w-8 h-8" />
          <img src="/static/socials/twitter.png" alt="Twitter" className="w-8 h-8" />
          <img src="/static/socials/whatsapp.png" alt="Whatsapp" className="w-8 h-8" />

        </div>
        <button
        onClick={() => router.push('/')} 
        className="bg-[#FFB8B8] text-black w-[12em] h-[3em] text-l py-2 px-4 border-2 border-black rounded-lg hover:bg-[#DF9A9A] transition duration-300 mt-6"
      >
        Restart
      </button>
      </div>

    </div>
  );
};

export default Card;
