import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-gray-200 py-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
          <span className="animate-pulse">Get In </span>
          <span className="text-blue-500 italic text-3xl md:text-4xl">
            Touch
          </span>
        </h2>

        <p className="text-center text-gray-700 mb-8 text-sm md:text-base">
          Feel free to reach out for collaborations, freelance work, or just a
          friendly chat!
        </p>

        {/* Card */}
        <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg text-white">

          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8 items-start">

            {/* FORM */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-4 text-blue-500">
                Send a Message
              </h3>

              <form className="space-y-3">

                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full p-2.5 text-sm bg-gray-900 border border-gray-700 rounded focus:border-blue-500 outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-2.5 text-sm bg-gray-900 border border-gray-700 rounded focus:border-blue-500 outline-none"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-2.5 text-sm bg-gray-900 border border-gray-700 rounded focus:border-blue-500 outline-none"
                />

                <textarea
                  rows="3"
                  placeholder="Your Message"
                  required
                  className="w-full p-2.5 text-sm bg-gray-900 border border-gray-700 rounded focus:border-blue-500 outline-none"
                ></textarea>

                <a
                  href="mailto:mhdnansi@gmail.com?subject=Inquiry&body=Hello%2C%20I%20want%20to%20contact%20you."
                  className="block text-center bg-blue-500 hover:bg-blue-600 py-2.5 rounded font-semibold transition text-sm"
                >
                  Send Message
                </a>

              </form>
            </div>

            {/* CONTACT INFO */}
            <div>

              <h3 className="text-base md:text-lg font-semibold mb-4 text-blue-500">
                Contact Info
              </h3>

              <div className="space-y-3 text-gray-300 mb-5 text-sm md:text-base">
                <p>📍 Malappuram, Kerala, India</p>

                <p>📧 mhdnansi@gmail.com</p>

                <p>
                  📞{" "}
                  <a href="tel:+918137829301" className="hover:text-blue-400">
                    +91 81378 29301
                  </a>
                </p>
              </div>

              {/* SOCIALS */}
              <div className="flex flex-wrap gap-4">

                <a
                  href="https://www.linkedin.com/in/muhammed-sinan-pk-5702b6397/"
                  className="border border-gray-600 p-2 rounded hover:bg-blue-500 transition"
                >
                  <FaLinkedin size={16} />
                </a>

                <a
                  href="https://github.com/sinanpk974"
                  target="_blank"
                  className="border border-gray-600 p-2 rounded hover:bg-blue-500 transition"
                >
                  <FaGithub size={16} />
                </a>

                <a
                  href="#"
                  className="border border-gray-600 p-2 rounded hover:bg-blue-500 transition"
                >
                  <FaInstagram size={16} />
                </a>

                <a
                  href="https://wa.me/918137829301"
                  target="_blank"
                  className="border border-gray-600 p-2 rounded hover:bg-blue-500 transition"
                >
                  <FaWhatsapp size={16} />
                </a>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 bg-blue-500 hover:bg-blue-600 p-3 rounded-full shadow-lg transition animate-bounce"
      >
        ↑
      </button>
    </section>
  );
}

export default Contact;