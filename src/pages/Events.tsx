import React from 'react';
import EventCard from '../components/EventCard';

// Import your images
import e1 from '../assets/images/e1.jpg';
import e2 from '../assets/images/e2.jpg';
import e3 from '../assets/images/e3.jpg';
import e4 from '../assets/images/e4.jpg';

const Events: React.FC = () => {
  const events = [
    { 
      image: e1, 
      number: "01", 
      tags: "#git #github", 
      category: "GIT 101",
      description: "Learn the fundamentals of version control with Git and GitHub. This workshop will cover basic commands, branching strategies, and collaborative workflows. Perfect for beginners and those looking to solidify their Git knowledge. Venue: Mini Hall 2, TP Ganesan Auditorium. Date: 15 November, 2023."
    },
    { 
      image: e2, 
      number: "02", 
      tags: "#UI #UX #design", 
      category: "UI/UX Workshop",
      description: "Dive into the world of User Interface and User Experience design. This hands-on workshop will cover design principles, prototyping tools, and user research techniques. Bring your laptop and creativity! Venue: Mini Hall 2, TP Ganesan Auditorium. Date: 21 April, 2024."
    },
    { 
      image: e3, 
      number: "03", 
      tags: "#NFT #blockchain", 
      category: "TechneXGen",
      description: "Explore the cutting-edge intersection of technology and art with our NFT creation workshop. Learn about blockchain technology, digital art, and how to mint your own NFTs. Open to both tech enthusiasts and artists. Venue: Mini Hall 2, TP Ganesan Auditorium. Date: 28 July, 2024."
    },
    { 
      image: e4, 
      number: "04", 
      tags: "#GraphQL #API", 
      category: "Graph-Q?",
      description: "Unravel the power of GraphQL in modern API development. This technical workshop will cover GraphQL basics, schema design, and integration with various backend technologies. Some programming experience recommended. Venue: Mini Hall 2, TP Ganesan Auditorium. Date: 26 September, 2024."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#2C5364] via-[#203A43] to-[#0F2027] text-white">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-8 text-center font-poppins" style={{ fontVariationSettings: '"slnt" 0, "wdth" 400, "wght" 900, "INKT" 400' }}>Events</h1>
        <p className="text-xl mb-12 text-center font-poppins">
          The SRM Alexa Developer Club is a hub of excitement with events like Git 101, hackathons, workshops, and tech games. Learn essential skills in Git 101, unleash your creativity in hackathons, dive deep into cutting-edge tech during workshops, and enjoy the thrill of competition in tech games. Each event ignites passion, fosters innovation, and builds a strong tech community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Events;
