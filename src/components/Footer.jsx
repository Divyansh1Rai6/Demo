import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-10">
      <div className="flex justify-between flex-wrap gap-6">
        <h2>Excellence Corp</h2>

        <div className="flex gap-4">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>

      <p className="text-center mt-6 text-gray-400">
        © 2026 All rights reserved
      </p>
    </footer>
  );
}