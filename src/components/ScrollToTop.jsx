import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setShow(window.scrollY > 200));
  }, []);

  if (!show) return null;

  return (
    <button onClick={() => window.scrollTo({ top: 0 })}
      className="fixed bottom-5 right-5 bg-blue-500 text-white p-3">
      ↑
    </button>
  );
}