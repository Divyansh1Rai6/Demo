import { FaInstagram } from 'react-icons/fa';

const posts = [
  { image: 'https://images.unsplash.com/photo-1758691737543', caption: 'Team work' },
  { image: 'https://images.unsplash.com/photo-1758518731457', caption: 'Innovation' },
];

export default function InstagramFeed() {
  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl text-center mb-10 flex justify-center gap-2">
        <FaInstagram /> Instagram
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {posts.map((p, i) => (
          <img key={i} src={p.image} className="w-full h-40 object-cover" />
        ))}
      </div>
    </section>
  );
}