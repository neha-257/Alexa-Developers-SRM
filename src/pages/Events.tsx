import React from 'react';
import { Calendar } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Annual Hackathon',
    date: '2024-05-15',
    description: 'Join us for our annual 24-hour hackathon event!',
  },
  {
    id: 2,
    title: 'Tech Talk: AI and Machine Learning',
    date: '2024-06-10',
    description: 'Learn about the latest advancements in AI and ML from industry experts.',
  },
  {
    id: 3,
    title: 'Workshop: Building Alexa Skills',
    date: '2024-07-05',
    description: 'Hands-on workshop on creating custom Alexa skills.',
  },
];

const Events: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Upcoming Events</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div key={event.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <Calendar className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                  {event.date}
                </div>
                <p className="mt-3 text-base text-gray-500">{event.description}</p>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:px-6">
                <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;