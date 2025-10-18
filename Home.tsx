/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const animals = [
  { name: 'Dog', emoji: '🐶' },
  { name: 'Cat', emoji: '🐱' },
  { name: 'Lion', emoji: '🦁' },
  { name: 'Tiger', emoji: '🐯' },
  { name: 'Eagle', emoji: '🦅' },
  { name: 'Mouse', emoji: '🐭' },
  { name: 'Squirrel', emoji: '🐿️' },
  { name: 'Shark', emoji: '🦈' },
  { name: 'Alligator', emoji: '🐊' },
  { name: 'Cow', emoji: '🐮' },
  { name: 'Bear', emoji: '🐻' },
  { name: 'Frog', emoji: '🐸' },
];

export default function Home() {
  const [selectedAnimal, setSelectedAnimal] = useState<string | null>(null);

  return (
    <div 
      className="min-h-screen text-white flex flex-col items-center justify-center p-4 selection:bg-yellow-500 selection:text-yellow-900"
      style={{ background: 'radial-gradient(ellipse at center, #6b4f42 0%, #4a372f 70%)' }}
    >
      <div className="w-full max-w-5xl mx-auto text-center">
        <h1 className="text-5xl sm:text-7xl font-bold text-yellow-100 mb-2" style={{fontFamily: "'Playfair Display', serif"}}>
          Choose Your Hero
        </h1>
        <p className="text-lg sm:text-xl text-yellow-200/80 mb-10">
          Select an animal to start reading your magical story.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {animals.map((animal) => (
            <button
              key={animal.name}
              onClick={() => setSelectedAnimal(animal.name)}
              className={`group flex flex-col items-center justify-center p-4 rounded-2xl border-4 transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-4 focus:ring-yellow-400/50 ${
                selectedAnimal === animal.name
                  ? 'bg-yellow-400/20 border-yellow-400 scale-110 shadow-2xl'
                  : 'bg-black/20 border-transparent hover:border-yellow-300/50 hover:scale-105'
              }`}
              aria-pressed={selectedAnimal === animal.name}
              aria-label={`Select ${animal.name}`}
            >
              <div className="text-6xl sm:text-7xl transition-transform duration-300 group-hover:scale-110">
                {animal.emoji}
              </div>
              <p className="mt-2 text-base sm:text-lg font-semibold text-yellow-100">
                {animal.name}
              </p>
            </button>
          ))}
        </div>

        {selectedAnimal && (
          <div className="mt-12 flex justify-center">
            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-green-600 rounded-full text-xl font-bold text-white shadow-lg hover:bg-green-700 transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400/50">
              Let's Start the Adventure!
              <ArrowRight className="w-7 h-7" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}