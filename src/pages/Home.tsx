import React from 'react';
import { ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Alexa Developers SRM
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl">
            Voices United, Tech Amplified
          </p>
          <div className="mt-10">
            <a
              href="/apply"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Join Us
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Alexa Developers SRM is a vibrant community of tech enthusiasts, innovators, and future leaders. We're dedicated to fostering growth in various domains including technical skills, creative pursuits, event management, and business acumen.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Domains
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">Technical</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Dive deep into cutting-edge technologies and enhance your coding skills.
                  </p>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">Creatives</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Unleash your creativity through design, content creation, and multimedia projects.
                  </p>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">Events</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Organize and participate in exciting tech events, hackathons, and workshops.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;