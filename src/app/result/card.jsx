import React from 'react';
import Image from 'next/image'; 
import { getAnimalInfo } from './data.js'; 
import { useRouter } from 'next/navigation';

const Card = ({ animal }) => {
    const router = useRouter(); 

    const { writeUp, bulletPoints, compatible, incompatible, image } = getAnimalInfo(animal);

    const compatibleAnimalInfo = compatible.map(animal => getAnimalInfo(animal));
    const incompatibleAnimalInfo = incompatible.map(animal => getAnimalInfo(animal));

    return (
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto text-left font-sans border-2 border-black shadow-md rounded">
        <h2 className="text-xl text-center text-black">YOU GOT...</h2>
        <h1 className="text-4xl font-bold text-center text-black">{animal}</h1>

        <div className="flex justify-center items-center my-4 space-x-4">
          <Image
            src={image} 
            alt={`${animal} image`} 
            width={128} 
            height={128} 
            className="rounded-full" 
            priority 
          />
          <ul className="list-disc text-left text-sm">
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="writeup mt-4 space-y-2 text-black text-sm">
          {writeUp.map((line, index) => (
            <p key={index} className="bg-yellow-200 p-3 rounded-lg text-center text-black">{line}</p>
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <div className="attraction">
            <h4 className="text-center">STRONG ATTRACTION</h4>
            <div className="flex space-x-2 px-2 mt-2 border-2 border-black rounded m-1">
              {compatibleAnimalInfo.map((animalInfo, index) => (
                <div key={index} className="text-center">
                  <p>{animalInfo.animal}</p>
                  <Image
                    src={animalInfo.image} 
                    alt={`${animalInfo.animal} image`} 
                    width={64} 
                    height={64} 
                    className="rounded-full" 
                    loading="lazy" 
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="attraction">
            <h4 className="text-center">WEAK ATTRACTION</h4>
            <div className="flex space-x-2 px-2 mt-2 border-2 border-black rounded m-1">
              {incompatibleAnimalInfo.map((animalInfo, index) => (
                <div key={index} className="text-center text-black">
                  <p>{animalInfo.animal}</p>
                  <Image
                    src={animalInfo.image} 
                    alt={`${animalInfo.animal} image`} 
                    width={64} 
                    height={64} 
                    className="rounded-full" 
                    loading="lazy" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Card;
