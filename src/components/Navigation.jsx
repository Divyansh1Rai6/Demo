import { useState } from 'react';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow">
      <div className="flex justify-between p-4">
        <h1>Excellence</h1>
        <button onClick={() => setOpen(!open)}>Menu</button>
      </div>

      {open && (
        <div className="flex flex-col p-4">
          <a href="#home">Home</a>
          <a href="#about">About</a>
        </div>
      )}
    </nav>
  );
}