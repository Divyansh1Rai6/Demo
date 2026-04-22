import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const submit = (e) => {
    e.preventDefault();
    alert("Submitted!");
  };

  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl text-center mb-10">Contact</h2>

      <form onSubmit={submit} className="max-w-xl mx-auto space-y-4">
        <input className="w-full p-3 border" placeholder="Name"
          onChange={e => setForm({ ...form, name: e.target.value })} />

        <input className="w-full p-3 border" placeholder="Email"
          onChange={e => setForm({ ...form, email: e.target.value })} />

        <textarea className="w-full p-3 border" placeholder="Message"
          onChange={e => setForm({ ...form, message: e.target.value })} />

        <button className="bg-blue-600 text-white px-6 py-3">Submit</button>
      </form>
    </section>
  );
}