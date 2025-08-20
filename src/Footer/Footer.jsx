import React, { useState } from "react";
import emailjs from "emailjs-com";

function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_3rxmznj",   // 🔹 Replace with your EmailJS Service ID
        "template_4nhm07y",  // 🔹 Replace with your Template ID
        form,
        "RHkH8_mU2tPhsPNZw"    // 🔹 Replace with your Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setForm({ name: "", email: "", subject: "", message: "" }); // reset form
        },
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="bg-black text-white py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-blue-500 text-lg font-bold uppercase mb-2">Contact</h2>
        <h1 className="text-3xl font-bold mb-4">I'd Love To Hear From You.</h1>
        <p className="text-gray-400 mb-8">
          Whether you have a question, want to discuss a potential collaboration, or just want to say hello,
          feel free to reach out. Please use the form below to send me a message, and I will get back to
          you as soon as possible.
        </p>

        {/* Contact Form */}
        <form onSubmit={sendEmail} className="space-y-4 max-w-lg mx-auto">
          <input
            className="w-full px-4 py-2 bg-gray-800 text-white border-none outline-none focus:ring-2 focus:ring-blue-500 rounded"
            type="text"
            name="name"
            placeholder="Name"
            required
            value={form.name}
            onChange={handleChange}
          />
          <input
            className="w-full px-4 py-2 bg-gray-800 text-white border-none outline-none focus:ring-2 focus:ring-blue-500 rounded"
            type="email"
            name="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
          />
          <input
            className="w-full px-4 py-2 bg-gray-800 text-white border-none outline-none focus:ring-2 focus:ring-pink-500 rounded"
            type="text"
            name="subject"
            placeholder="Subject"
            required
            value={form.subject}
            onChange={handleChange}
          />
          <textarea
            className="w-full h-32 px-4 py-2 bg-gray-800 text-white border-none outline-none focus:ring-2 focus:ring-pink-500 rounded"
            name="message"
            placeholder="Message"
            required
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-2 px-4 rounded border border-white transition-all duration-300 hover:bg-blue-500"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Footer Contact Info */}
      <div className="mt-16 flex flex-col md:flex-row justify-around text-center px-4">
        <div className="mb-8 md:mb-0 flex flex-col items-center">
          <div className="text-[#48CFCB] mb-2 text-3xl">
            {/* Location Icon */}
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
              strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <h4 className="text-blue-500 mb-1 font-bold uppercase">Where to find me</h4>
          <p className="text-white text-center">Lahore, Punjab, Pakistan</p>
        </div>

        <div className="mb-8 md:mb-0 flex flex-col items-center">
          <div className="text-[#48CFCB] mb-2 text-3xl">
            {/* Email Icon */}
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
              strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <h4 className="text-blue-500 mb-1 font-bold uppercase">Email me at</h4>
          <p className="text-white text-center">usamabadar.finance@gmail.com</p>
        </div>

        <div className="mb-8 md:mb-0 flex flex-col items-center">
          <div className="text-[#48CFCB] mb-2 text-3xl">
            {/* Phone Icon */}
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
              strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <h4 className="text-blue-500 mb-1 font-bold uppercase">Call me at</h4>
          <p className="text-white text-center">Phone: (+92) 331 4052004</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
