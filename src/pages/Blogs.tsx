import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Automatic Speech Recognition Technology",
    date: "Sep 26, 2020",
    excerpt: "Speech is the primary mode of communication among human beings. On the other hand, prevalent means of input to computers is through a keyboard or a mouse. It would be nice if computers could listen to human speech and carry out their commands.",
    content: "Speech is the primary mode of communication among human beings. On the other hand, prevalent means of input to computers is through a keyboard or a mouse. It would be nice if computers could listen to human speech and carry out their commands. Automatic Speech Recognition (ASR) is a technology that allows human beings to use their voices to speak with a computer interface in a way that, in its most sophisticated variations, resembles normal human conversation. The most frequent applications of ASR include voice dialing, call routing, data entry, preparation of structured documents, speech-to-text processing, and aircraft (usually termed direct voice input)."
  },
  {
    title: "A Beginner's Roadmap to Mastering Cybersecurity",
    date: "Feb 29, 2024",
    excerpt: "Welcome to the important world of cybersecurity, where we work to keep digital information safe. Whether you're new or want to learn more, this guide will help you become a cybersecurity expert.",
    content: "Welcome to the important world of cybersecurity, where we work to keep digital information safe. Whether you're new or want to learn more, this guide will help you become a cybersecurity expert. Start by learning the basics of computer networks and how they work. Then, study different types of cyber attacks and how to protect against them. Practice your skills by setting up your own secure network at home. Stay updated on the latest cybersecurity news and trends. Join online communities to learn from others and share your knowledge. Remember, becoming a cybersecurity expert takes time and practice, but with dedication, you can help make the digital world safer for everyone."
  },
  {
    title: "Using AWS S3 with Node.js",
    date: "Sep 16, 2020",
    excerpt: "AWS or Amazon Web Services is the biggest and most popular cloud computing platform out there. AWS provides some of its easy to use and scalable services to its users for free for one year.",
    content: "AWS or Amazon Web Services is the biggest and most popular cloud computing platform out there. AWS provides some of its easy to use and scalable services to its users for free for one year. One such service is Amazon S3 or Simple Storage Service. Amazon S3 is an object storage service that offers industry-leading scalability, data availability, security, and performance. This means customers of all sizes and industries can use it to store and protect any amount of data for a range of use cases, such as websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics."
  }
];

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className="bg-white/10 p-6 rounded-lg cursor-pointer"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <motion.h2 layout="position" className="text-2xl font-bold mb-2">{post.title}</motion.h2>
      <motion.p layout="position" className="text-sm text-gray-300 mb-4">{post.date}</motion.p>
      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="mb-4">{post.content}</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="mb-4">{post.excerpt}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        layout="position"
        className="text-blue-300 hover:underline"
      >
        {isExpanded ? 'Read less' : 'Read more'}
      </motion.button>
    </motion.div>
  );
};

const Blogs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#2C5364] via-[#203A43] to-[#0F2027] text-white">
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold mb-12 text-center"
        >
          Our Blogs
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 gap-8"
        >
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Blogs;
