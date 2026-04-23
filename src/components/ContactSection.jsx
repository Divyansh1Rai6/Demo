import { useState } from 'react';
import { MapPin, Phone, Mail, User } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          We'd love to hear from you
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl mb-8">Contact Details</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="mb-1">Address</h4>
                    <p className="text-gray-600">
                      Excellence Corporation Ltd.<br />
                      123 Business Park, Floor 5<br />
                      Innovation District, Metro City<br />
                      PIN: 123456
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="mb-1">Phone</h4>
                    <p className="text-gray-600">
                      +1 (555) 123-4567<br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="mb-1">Email</h4>
                    <p className="text-gray-600">
                      info@excellencecorp.com<br />
                      sales@excellencecorp.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <User className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="mb-1">Contact Person</h4>
                    <p className="text-gray-600">
                      John Anderson<br />
                      Business Development Manager
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-2xl">
              <h4 className="text-xl mb-3">Business Hours</h4>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl mb-6">Send us a Message</h3>

            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg text-center">
                <p className="mb-2">✓ Thank you for your message!</p>
                <p className="text-sm">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-700">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-700">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-700">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  Submit Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}