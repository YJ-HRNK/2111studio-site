import React from 'react';
import emailjs from 'emailjs-com';

export default function Home() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_xxx', 'template_3z85yxt', e.target, 'YOUR_PUBLIC_KEY')
      .then(result => {
        alert('Message sent!');
      }, error => {
        alert('Failed to send message');
      });
  };

  return (
    <div>
      <section className="text-center py-10 bg-blue-100">
        <h1 className="text-4xl font-bold text-blue-700">Welcome to 2111 Studio</h1>
        <p className="text-lg mt-2">Creative Content Agency</p>
      </section>

      <section className="py-10 px-6 bg-white text-black">
        <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
        <p className="max-w-xl mx-auto text-center">We are a social media content studio passionate about creativity, storytelling, and innovation. Based in Yokohama, Japan.</p>
      </section>

      <section className="py-10 px-6 bg-gray-100 text-black">
        <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><p className="font-semibold">G U</p><p>Director</p></div>
          <div><p className="font-semibold">Member A</p><p>Editor</p></div>
          <div><p className="font-semibold">Member B</p><p>Writer</p></div>
          <div><p className="font-semibold">Member C</p><p>Producer</p></div>
        </div>
      </section>

      <section className="py-10 px-6 bg-white text-black">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form onSubmit={sendEmail} className="max-w-md mx-auto flex flex-col gap-4">
          <input type="text" name="user_name" placeholder="Your Name" className="p-2 border" required />
          <input type="email" name="user_email" placeholder="Your Email" className="p-2 border" required />
          <textarea name="message" placeholder="Your Message" className="p-2 border" required />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Submit</button>
        </form>
      </section>
    </div>
  );
}