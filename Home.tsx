/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { useState } from 'react';

// Define wallpapers outside the component so they are not recreated on every render.
const wallpapers = [
    {
        id: 'toddlerFun',
        backgroundColor: '#f0f8ff',
        pattern: (
             <pattern
              id="wallpaper"
              patternUnits="userSpaceOnUse"
              width="200"
              height="200">
              <rect width="200" height="200" fill="#f0f8ff" />
              {/* Sparkly Star */}
              <g opacity="0.9" transform="translate(40, 40) scale(0.8)">
                <path d="M25,0 L32.5,17.5 L50,25 L32.5,32.5 L25,50 L17.5,32.5 L0,25 L17.5,17.5 Z" fill="url(#sparkleGradient)"/>
              </g>
              {/* Cute Cloud */}
              <g opacity="0.7" transform="translate(130, 140)">
                <circle cx="20" cy="20" r="15" fill="#ffffff" />
                <circle cx="35" cy="25" r="20" fill="#ffffff" />
                <circle cx="50" cy="20" r="15" fill="#ffffff" />
              </g>
              {/* Cute Teddy Bear */}
               <g opacity="0.7" transform="translate(150, 40) scale(0.9)">
                {/* Head and Ears */}
                <circle cx="0" cy="0" r="20" fill="#d2b48c" /> {/* Head */}
                <circle cx="-18" cy="-16" r="10" fill="#d2b48c" /> {/* Left Ear */}
                <circle cx="18" cy="-16" r="10" fill="#d2b48c" /> {/* Right Ear */}
                
                {/* Inner ears */}
                <circle cx="-18" cy="-16" r="6" fill="#f5e1c8" />
                <circle cx="18" cy="-16" r="6" fill="#f5e1c8" />

                {/* Snout */}
                <ellipse cx="0" cy="8" rx="13" ry="10" fill="#f5e1c8" />
                
                {/* Eyes */}
                <circle cx="-7" cy="-2" r="2.5" fill="#5c4033" />
                <circle cx="7" cy="-2" r="2.5" fill="#5c4033" />
                
                {/* Nose */}
                <path d="M -3 6 L 3 6 L 0 9 Z" fill="#5c4033" />
                
                {/* Mouth */}
                <path d="M 0 9 v 3" stroke="#5c4033" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M -4 12 a 4 4 0 0 0 8 0" fill="none" stroke="#5c4033" strokeWidth="1.5" strokeLinecap="round" />
              </g>
               {/* Cute Sun */}
              <g opacity="0.8" transform="translate(40, 150)">
                 <circle cx="0" cy="0" r="20" fill="#ffcc80"/>
              </g>
            </pattern>
        )
    },
    {
        id: 'oceanFriends',
        backgroundColor: '#e0f7fa',
        pattern: (
            <pattern
              id="wallpaper"
              patternUnits="userSpaceOnUse"
              width="200"
              height="200">
                <rect width="200" height="200" fill="#e0f7fa" />
                {/* Whale */}
                <g transform="translate(50, 50) scale(1.2)">
                    <path d="M-20,0 C-20,-15 10,-15 10,0 C20,15 -20,15 -20,0 Z" fill="#81d4fa" />
                    <path d="M10,0 C15,2 15,8 10,10 L-15,5 Z" fill="#b3e5fc" />
                    <circle cx="-12" cy="-3" r="1.5" fill="black" />
                </g>
                {/* Fish */}
                <g transform="translate(150, 120) scale(0.8)">
                    <ellipse cx="0" cy="0" rx="20" ry="12" fill="#ffca28" />
                    <path d="M 15 0 L 30 -10 L 30 10 Z" fill="#ffb300"/>
                    <circle cx="-8" cy="-2" r="2" fill="white" />
                    <circle cx="-7" cy="-2" r="1" fill="black" />
                </g>
                 {/* Bubbles */}
                 <g transform="translate(120, 30)">
                    <circle cx="0" cy="0" r="5" fill="#ffffff" opacity="0.7"/>
                    <circle cx="10" cy="10" r="3" fill="#ffffff" opacity="0.6"/>
                    <circle cx="5" cy="20" r="4" fill="#ffffff" opacity="0.8"/>
                </g>
            </pattern>
        )
    },
    {
        id: 'jungleSafari',
        backgroundColor: '#e8f5e9',
        pattern: (
            <pattern
              id="wallpaper"
              patternUnits="userSpaceOnUse"
              width="200"
              height="200">
                <rect width="200" height="200" fill="#e8f5e9" />
                {/* Monkey face */}
                <g transform="translate(150, 150) scale(0.8)">
                    <circle cx="0" cy="0" r="20" fill="#a1887f" />
                    <path d="M 0,-15 C -15,-15 -20,10 0,10 C 20,10 15,-15 0,-15" fill="#d7ccc8" />
                    <circle cx="-8" cy="-5" r="3" fill="black" />
                    <circle cx="8" cy="-5" r="3" fill="black" />
                    <path d="M -5 5 a 5 5 0 0 0 10 0" fill="none" stroke="black" strokeWidth="2" />
                </g>
                {/* Leaf */}
                <g transform="translate(50, 50) rotate(-45)">
                     <path d="M0,0 C20,-20 40,-10 60,0 C40,10 20,20 0,0 Z" fill="#81c784" />
                     <path d="M0,0 L60,0" stroke="#4caf50" strokeWidth="2" />
                </g>
                {/* Banana */}
                <g transform="translate(40, 130)">
                    <path d="M0,0 C10,-20 30,-20 40,0" fill="#fff176" stroke="#fbc02d" strokeWidth="2" />
                </g>
            </pattern>
        )
    }
];


export default function Home() {

  const [currentWallpaper, setCurrentWallpaper] = useState(wallpapers[0]);

  const handleMainMenuClick = () => {
    // In a real application, this would use a router to navigate.
    // For this example, we'll show an alert.
    alert("Returning to main menu!");
  };

  const handleAddBookClick = () => {
    alert("Adding a book!");
  };

  const handleRemoveBookClick = () => {
    alert("Removing a book!");
  };

  const handleNewWallpaperClick = () => {
      // Get all wallpapers except the current one
      const availableWallpapers = wallpapers.filter(w => w.id !== currentWallpaper.id);
      // Select a random one from the remaining
      const randomIndex = Math.floor(Math.random() * availableWallpapers.length);
      setCurrentWallpaper(availableWallpapers[randomIndex]);
  };


  return (
    <div className="relative min-h-screen text-[#4a3f35] flex flex-col items-center justify-center p-4 sm:p-8 font-sans transition-colors duration-500" style={{ backgroundColor: currentWallpaper.backgroundColor }}>
       <div className="absolute top-4 left-4 sm:top-8 sm:left-8 flex flex-col items-start z-10">
        <button
          onClick={handleMainMenuClick}
          className="bg-[#87cefa] hover:bg-[#67b7e8] text-white font-bold py-2 px-4 rounded-lg shadow-md transition-colors"
          aria-label="Return to Main Menu"
        >
          Main Menu
        </button>
        <button
          onClick={handleAddBookClick}
          className="mt-2 bg-[#a5d6a7] hover:bg-[#81c784] text-white font-bold py-2 px-4 rounded-lg shadow-md transition-colors"
          aria-label="Add a book to the shelf"
        >
          Add Book
        </button>
        <button
          onClick={handleRemoveBookClick}
          className="mt-2 bg-[#ff7f7f] hover:bg-[#e57373] text-white font-bold py-2 px-4 rounded-lg shadow-md transition-colors"
          aria-label="Remove a book from the shelf"
        >
          Remove Book
        </button>
         <button
          onClick={handleNewWallpaperClick}
          className="mt-2 bg-[#f6e05e] hover:bg-[#ecc94b] text-[#4a3f35] font-bold py-2 px-4 rounded-lg shadow-md transition-colors"
          aria-label="Change wallpaper"
        >
          New Wallpaper
        </button>
      </div>
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">StorySpark</h1>
        <p className="text-lg md:text-xl mt-2 text-[#6f6259]">
          Ignite your imagination and fill your shelves.
        </p>
      </header>
      <main className="w-full max-w-6xl aspect-[16/9] shadow-2xl rounded-lg overflow-hidden bg-white">
        <svg
          viewBox="0 0 1600 900"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-labelledby="sceneTitle"
          role="img">
          <title id="sceneTitle">
            A cozy, colorful toddler's bedroom with a brown, empty bookshelf and randomly changing playful wallpaper.
          </title>
          <defs>
             <style>
              {`
                @keyframes fly-by {
                  0% {
                    transform: translateX(-100%);
                  }
                  100% {
                    transform: translateX(450px);
                  }
                }
                .bird-animation {
                  animation: fly-by linear infinite;
                }
              `}
            </style>
             <radialGradient id="sparkleGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#fff59d', stopOpacity: 1}} />
            </radialGradient>
            
            {currentWallpaper.pattern}

            <g id="bird-shape" transform="scale(-1, 1)">
                {/* Body - Blue for Blue Jay */}
                <path d="M 1,6 C -7,2 -7,-10 2,-11 C 5,-12 10,-10 15,-4 L 30,10 L 15,8 C 10,14 2,11 1,6 Z" fill="#6495ED" />
                {/* Wing Detail - Darker Blue */}
                <path d="M 5,2 C 10,-2 18,-2 22,3 L 15,5 C 12,3 8,3 5,2 Z" fill="#4169E1" />
                {/* Eye */}
                <circle cx="2" cy="-5" r="1" fill="black" />
            </g>
            <clipPath id="window-clip">
              <rect x="150" y="150" width="400" height="350" />
            </clipPath>
          </defs>
          {/* Walls and Floor */}
          <rect width="1600" height="900" fill="url(#wallpaper)" />
          <rect y="750" width="1600" height="150" fill="#f5d7a0" />
          <rect y="745" width="1600" height="10" fill="#e5c790" />

          {/* Window */}
          <g>
            <rect x="150" y="150" width="400" height="350" fill="#aeeeee" rx="20"/>
             {/* Sun in window */}
            <circle cx="480" cy="210" r="40" fill="#FFD700" />
            <path
              d="M150 150 L130 130 L570 130 L550 150 Z"
              fill="#ffffff"
            />
            <rect
              x="130"
              y="130"
              width="20"
              height="390"
              fill="#ffffff"
              rx="10"
            />
            <rect
              x="550"
              y="130"
              width="20"
              height="390"
              fill="#ffffff"
              rx="10"
            />
            <rect
              x="130"
              y="500"
              width="440"
              height="20"
              fill="#ffffff"
              rx="10"
            />
            {/* Window panes */}
            <rect
              x="345"
              y="150"
              width="10"
              height="350"
              fill="#ffffff"
              rx="5"
            />
            <rect
              x="150"
              y="320"
              width="400"
              height="10"
              fill="#ffffff"
              rx="5"
            />
          </g>

          {/* Flying Birds */}
          <g clipPath="url(#window-clip)">
            <use href="#bird-shape" x="150" y="220" className="bird-animation" style={{ animationDuration: '7s', animationDelay: '0s' }} />
            <use href="#bird-shape" x="150" y="300" className="bird-animation" style={{ animationDuration: '5s', animationDelay: '3s' }} />
            <use href="#bird-shape" x="150" y="260" className="bird-animation" style={{ animationDuration: '6s', animationDelay: '8s' }} />
          </g>
          
          {/* Bookshelf */}
          <g id="bookshelf">
            <rect
              x="800"
              y="100"
              width="600"
              height="650"
              fill="#c68642"
              rx="20"
              stroke="#a5672f"
              strokeWidth="4"
            />
            <rect x="820" y="260" width="560" height="15" fill="#ad6d2f" rx="5" />
            <rect x="820" y="400" width="560" height="15" fill="#ad6d2f" rx="5" />
            <rect x="820" y="540" width="560" height="15" fill="#ad6d2f" rx="5" />
            <rect x="820" y="680" width="560" height="15" fill="#ad6d2f" rx="5" />
          </g>

          {/* Red Book on Floor */}
          <g transform="translate(600, 680) rotate(-10 50 25)">
            <rect width="100" height="70" fill="#ff7f7f" rx="5"/>
            <rect x="10" y="5" width="80" height="60" fill="#ffe4e1" rx="2"/>
            {/* Sun decoration */}
            <circle cx="50" cy="35" r="15" fill="#ffd700"/>
          </g>
          
          {/* Bed */}
          <g>
            <rect x="100" y="650" width="500" height="100" fill="#f5d7a0" rx="20"/>
            <rect x="120" y="600" width="460" height="100" fill="#ffffff" rx="10"/>
             {/* Duvet with polka dots */}
            <rect x="120" y="650" width="460" height="100" fill="#87cefa" rx="10"/>
            <circle cx="180" cy="690" r="10" fill="#ffffff" />
            <circle cx="250" cy="710" r="10" fill="#ffffff" />
            <circle cx="320" cy="690" r="10" fill="#ffffff" />
            <circle cx="390" cy="710" r="10" fill="#ffffff" />
            <circle cx="460" cy="690" r="10" fill="#ffffff" />
            <circle cx="530" cy="710" r="10" fill="#ffffff" />

            <rect x="140" y="550" width="100" height="50" fill="#fffacd" rx="25" />
          </g>

          {/* Rug */}
          <circle cx="450" cy="830" r="150" fill="#a5d6a7" />
          
           {/* Toys */}
          <g>
             {/* Ball */}
            <circle cx="300" cy="800" r="30" fill="#f44336"/>
            <circle cx="300" cy="800" r="15" fill="#ffffff" opacity="0.5"/>
             {/* Block */}
            <rect x="550" y="780" width="60" height="60" fill="#4dabf5" rx="5" transform="rotate(-15 580 810)"/>
            <rect x="550" y="780" width="60" height="60" fill="rgba(255,255,255,0.2)" rx="5" transform="rotate(-15 580 810)"/>
          </g>

        </svg>
      </main>
    </div>
  );
}