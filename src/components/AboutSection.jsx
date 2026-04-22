import { useEffect, useRef, useState } from 'react';
import { Building2, Target, Lightbulb, Calendar, Award, FileCheck } from 'lucide-react';

export default function AboutSection() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        setScrollY(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { icon: Building2, title: 'The Promoter', content: 'Founded by industry veterans with 25+ years of combined experience.' },
    { icon: Target, title: 'Our Company', content: 'Serving 500+ clients across 30 countries.' },
    { icon: Lightbulb, title: 'Mission & Vision', content: 'Deliver excellence through innovation.' },
    { icon: Calendar, title: 'Our Inception', content: 'Established in 2015.' },
    { icon: Award, title: 'Certifications', content: 'ISO certified organization.' },
    { icon: FileCheck, title: 'Statutory Certifications', content: 'Fully compliant with regulations.' }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 px-4 bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-cover"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1634547487344-c3aa2e1aacdf)' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl text-center mb-10">About Us</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i}
                style={{ transform: `translateY(${50 - scrollY * 100}px)` }}
                className="bg-white/10 p-6 rounded-xl">
                <Icon className="w-10 h-10 mb-3 text-blue-400" />
                <h3 className="text-xl mb-2">{s.title}</h3>
                <p className="text-gray-300">{s.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}