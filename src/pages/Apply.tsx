import React from 'react';

const Apply: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#2C5364] via-[#203A43] to-[#0F2027] text-white">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold mb-8 text-center">Apply Now</h1>
        <p className="text-lg mb-8 text-center">
          Join our community of tech enthusiasts and innovators!
        </p>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input type="text" id="name" className="w-full p-2 rounded bg-white/10 text-white" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="email" id="email" className="w-full p-2 rounded bg-white/10 text-white" />
          </div>
          <div className="mb-4">
            <label htmlFor="domain" className="block mb-2">Domain</label>
            <select id="domain" className="w-full p-2 rounded bg-white/10 text-white [&>option]:text-[#392D69]">
              <option value="">Select a domain</option>
              <option value="technical">Technical</option>
              <option value="creatives">Creatives</option>
              <option value="events">Events</option>
              <option value="business">Business</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Why do you want to join?</label>
            <textarea id="message" rows={4} className="w-full p-2 rounded bg-white/10 text-white"></textarea>
          </div>
          <button type="submit" className="w-full bg-white text-[#2C5364] py-2 rounded font-bold hover:bg-opacity-90 transition-colors duration-300">Submit Application</button>
        </form>
      </main>
    </div>
  );
};

export default Apply;
