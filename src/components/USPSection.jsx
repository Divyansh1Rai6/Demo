import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function USPSection() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    <section className="relative py-20 text-white bg-blue-900">
      {init && <Particles options={{ particles: { number: { value: 50 } } }} />}

      <div className="relative z-10 text-center">
        <h2 className="text-4xl mb-6">Why Choose Us</h2>
        <p>Top quality, fast delivery, trusted by clients.</p>
      </div>
    </section>
  );
}