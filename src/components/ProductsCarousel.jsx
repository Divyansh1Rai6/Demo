import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    title: 'Product Suite A',
    description: 'Comprehensive solutions for enterprise needs',
    image: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82',
    price: 'Custom Pricing'
  },
  {
    title: 'Product Suite B',
    description: 'Scalable solutions for growing businesses',
    image: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788',
    price: 'Starting at $999'
  },
  {
    title: 'Product Suite C',
    description: 'Innovative tools for modern workflows',
    image: 'https://images.unsplash.com/photo-1455165814004-1126a7199f9b',
    price: 'Contact for Quote'
  }
];

export default function ProductsCarousel() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -400 : 400,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 px-4 bg-white">
      <h2 className="text-4xl text-center mb-10">Products</h2>

      <div className="relative">
        <button onClick={() => scroll('left')} className="absolute left-0">←</button>

        <div ref={scrollRef} className="flex gap-6 overflow-x-auto">
          {products.map((p, i) => (
            <div key={i} className="min-w-[300px] bg-gray-100 p-4 rounded">
              <img src={p.image} className="h-40 w-full object-cover" />
              <h3 className="text-xl">{p.title}</h3>
              <p>{p.description}</p>
              <p className="text-blue-600">{p.price}</p>
            </div>
          ))}
        </div>

        <button onClick={() => scroll('right')} className="absolute right-0">→</button>
      </div>
    </section>
  );
}