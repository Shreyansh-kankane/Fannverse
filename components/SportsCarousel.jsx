// components/SportsCarousel.jsx
'use client'
import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const sportsData = [
  {
    id: 1,
    title: 'Fantasy Cricket',
    icon: '🏏',
    description: 'Play premier cricket leagues like TATA IPL 2024, Big Bash League, and Caribbean Premier League. Create your dream team and compete with millions of players.',
  },
  {
    id: 2,
    title: 'Fantasy Football',
    icon: '⚽',
    description: 'Build your ultimate football team from top leagues worldwide. Score points based on real player performances in live matches.',
  },
  {
    id: 3,
    title: 'Fantasy Kabaddi',
    icon: '🤼',
    description: 'Experience India\'s beloved sport in fantasy format. Create your Pro Kabaddi League dream team and compete for glory.',
  },
  {
    id: 4,
    title: 'Fantasy Tennis',
    icon: '🎾',
    description: 'Select players from Grand Slams and major tennis tournaments. Earn points based on real match performances.',
  },
  {
    id: 5,
    title: 'Fantasy Basketball',
    icon: '🏀',
    description: 'Create your basketball dream team from domestic leagues. Compete and win based on real game statistics.',
  },
  {
    id: 6,
    title: 'Fantasy NBA',
    icon: '🏀',
    description: 'Draft your ultimate NBA roster from the world\'s premier basketball league. Win big with your strategic picks.',
  },
  {
    id: 7,
    title: 'Fantasy MMA',
    icon: '🥊',
    description: 'Pick your fighters and earn points based on their performance in the octagon.',
  },
  {
    id: 8,
    title: 'Fantasy F1',
    icon: '🏎️',
    description: 'Build your dream F1 team with drivers and constructors from the current season.',
  },
  {
    id: 10,
    title: 'Fantasy Cricket',
    icon: '🏏',
    description: 'Play premier cricket leagues like TATA IPL 2024, Big Bash League, and Caribbean Premier League. Create your dream team and compete with millions of players.',
  },
  {
    id: 11,
    title: 'Fantasy Kabaddi',
    icon: '🤼',
    description: 'Experience India\'s beloved sport in fantasy format. Create your Pro Kabaddi League dream team and compete for glory.',
  }
];

const SportsCard = ({ title, icon, description }) => (
  <div className="flex-none w-full md:w-1/2 lg:w-1/3 p-4">
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 h-full">
      <div className="flex items-center mb-4">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-xl font-bold ml-3 text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const SportsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [totalSlides, setTotalSlides] = useState(sportsData.length / 3)

  useEffect(() => {
    // Function to check screen width
    const checkScreenSize = () => {
      if (window.innerWidth <= 768) {
        setTotalSlides( Math.ceil(sportsData.length)  )
      } else {
        setTotalSlides( Math.ceil(sportsData.length) / 3 );
      }
    };
    // Call function initially to set device type
    checkScreenSize();
    // Add event listener to handle resizing
    window.addEventListener('resize', checkScreenSize);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const moveCarousel = (direction) => {
    setCurrentSlide((prev) => {
      const nextSlide = (prev + direction) % totalSlides;
      return nextSlide < 0 ? totalSlides - 1 : nextSlide;
    });
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      moveCarousel(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);


  // check if the page is 

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
      {/* Navigation Arrows */}
      <button
        className="hidden md:absolute left-[-40px] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg text-gray-800 hover:text-gray-900 transition-all"
        onClick={() => moveCarousel(-1)}
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      
      <button
        className="hidden md:absolute right-[-40px] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg text-gray-800 hover:text-gray-900 transition-all"
        onClick={() => moveCarousel(1)}
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      {/* Carousel Content */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {sportsData.map((sport) => (
            <SportsCard key={sport.id} {...sport} />
          ))}
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              currentSlide === index ? 'bg-purple-800' : 'bg-gray-300 hover:bg-purple-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SportsCarousel;