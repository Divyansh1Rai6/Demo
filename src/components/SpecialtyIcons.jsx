import { Award, Zap, Shield } from 'lucide-react';

const items = [
  { icon: Award, title: 'Quality', desc: 'Best quality products' },
  { icon: Zap, title: 'Fast', desc: 'Quick delivery' },
  { icon: Shield, title: 'Secure', desc: 'Trusted services' }
];

export default function SpecialtyIcons() {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <h2 className="text-4xl text-center mb-10">Specialties</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((i, idx) => {
          const Icon = i.icon;
          return (
            <div key={idx} className="bg-white p-6 text-center rounded">
              <Icon className="mx-auto mb-4" />
              <h3>{i.title}</h3>
              <p>{i.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}