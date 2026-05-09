import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-gray-200 py-16 px-6 ">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-blue-500 italic text-5xl">Touch</span>
        </h2>

        <p className="text-center text-gray-700 mb-12 font-bold">
          Feel free to reach out for collaborations, freelance work, or just a
          friendly chat!
        </p>

        {/* SINGLE BOX */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-xl text-white">
          <div className="grid md:grid-cols-[1.7fr_1fr] gap-10 items-start">
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-500">
                Send a Message
              </h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded focus:border-blue-500 outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded focus:border-blue-500 outline-none"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded focus:border-blue-500 outline-none"
                />

                <textarea
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded focus:border-blue-500 outline-none"
                ></textarea>

                <a
                  href="mailto:mhdnansi@gmail.com?subject=Inquiry&body=Hello%2C%20I%20want%20to%20contact%20you."
                  className="block text-center bg-blue-500 hover:bg-blue-600 py-3 rounded font-semibold transition w-full"
                >
                  Send Message
                </a>
              </form>
            </div>

            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-500">
                Contact Info
              </h3>

              <div className="space-y-4 text-gray-300 mb-6 mt-20">
                <p>📍 Malappuram, Kerala, India</p>

                <p>📧 mhdnansi@email.com</p>

                <p>
                  📞{" "}
                  <a href="tel:+918137829301" className="hover:text-blue-400">
                    +91 81378 29301
                  </a>
                </p>
              </div>

              
              <div className="flex flex-wrap gap-6">
                <a
                  href="https://www.linkedin.com/in/muhammed-sinan-pk-5702b6397/"
                  className="border border-gray-600 p-2 rounded hover:bg-blue-500 transition"
                >
                  <FaLinkedin size={18} />
                </a>

                <a
                  href="https://github.com/sinanpk974"
                  target="_blank"
                  className="border border-gray-600 p-2 rounded hover:bg-blue-500 transition"
                >
                  <FaGithub size={18} />
                </a>
                <a
                href="#" 
                className="border border-gray-600 p-2 rounded hover:bg-blue-500 transition">
                  <FaInstagram size={18} />
                </a>

                <a
                  href="https://wa.me/918137829301"
                  target="_blank"
                  className="border border-gray-600 p-2 rounded hover:bg-blue-500 transition"
                >
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 p-3 rounded-full shadow-lg transition "
      >
        ↑
      </button>
    </section>
  );
}

export default Contact;
