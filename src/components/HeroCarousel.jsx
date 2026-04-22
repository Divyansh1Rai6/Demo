import { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1674981208693-de5a9c4c4f44',
  'https://images.unsplash.com/photo-1662318682624-89652a1c8206'
];

export default function HeroCarousel() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % images.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="h-screen relative">
      <img src={images[i]} className="w-full h-full object-cover" />
      <h1 className="absolute text-white text-4xl top-1/2 left-1/2 -translate-x-1/2">
        Welcome
      </h1>
    </div>
  );
}