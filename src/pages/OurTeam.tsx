import React from 'react';
import { motion } from 'framer-motion';

// Dummy data for team members
const teamMembers = {
  core: [
    { name: 'John Doe', role: 'President', image: 'https://via.placeholder.com/150' },
    { name: 'Jane Smith', role: 'Vice President', image: 'https://via.placeholder.com/150' },
  ],
  heads: [
    { name: 'Alice Johnson', role: 'Technical Head', image: 'https://via.placeholder.com/150' },
    { name: 'Bob Williams', role: 'Creative Head', image: 'https://via.placeholder.com/150' },
    { name: 'Charlie Brown', role: 'Events Head', image: 'https://via.placeholder.com/150' },
  ],
  leads: [
    { name: 'David Lee', role: 'Web Dev Lead', image: 'https://via.placeholder.com/150' },
    { name: 'Eva Garcia', role: 'AI/ML Lead', image: 'https://via.placeholder.com/150' },
    { name: 'Frank Chen', role: 'Design Lead', image: 'https://via.placeholder.com/150' },
    { name: 'Grace Kim', role: 'Content Lead', image: 'https://via.placeholder.com/150' },
  ],
  executives: [
    { name: 'Henry Wilson', role: 'Executive', image: 'https://via.placeholder.com/150' },
    { name: 'Ivy Taylor', role: 'Executive', image: 'https://via.placeholder.com/150' },
    { name: 'Jack Brown', role: 'Executive', image: 'https://via.placeholder.com/150' },
    { name: 'Kelly Davis', role: 'Executive', image: 'https://via.placeholder.com/150' },
    { name: 'Liam Moore', role: 'Executive', image: 'https://via.placeholder.com/150' },
    { name: 'Mia Johnson', role: 'Executive', image: 'https://via.placeholder.com/150' },
  ],
};

const TeamSection: React.FC<{ title: string; members: typeof teamMembers.core }> = ({ title, members }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {members.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white/10 p-6 rounded-lg text-center w-64"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-sm text-gray-300">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const OurTeam: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#2C5364] via-[#203A43] to-[#0F2027] text-white">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold mb-12 text-center"
        >
          Our Team
        </motion.h1>
        <TeamSection title="Core Team" members={teamMembers.core} />
        <TeamSection title="Department Heads" members={teamMembers.heads} />
        <TeamSection title="Team Leads" members={teamMembers.leads} />
        <TeamSection title="Executives" members={teamMembers.executives} />
      </main>
    </div>
  );
};

export default OurTeam;
