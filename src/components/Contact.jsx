function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-800 text-white">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-4">
          Get In <span className="text-blue-500">Touch</span>
        </h2>

        <p className="text-gray-400 mb-8">
          I’m open to opportunities, collaborations, or just a quick chat.
          Feel free to reach out!
        </p>

        {/* CONTACT FORM */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 p-3 rounded font-semibold transition"
          >
            Send Message
          </button>
        </form>

        {/* OR DIRECT CONTACT */}
        <div className="mt-8 text-gray-400">
          <p>Email: your@email.com</p>
          <p>GitHub: github.com/yourname</p>
          <p>LinkedIn: linkedin.com/in/yourname</p>
        </div>

      </div>
    </section>
  );
}

export default Contact;