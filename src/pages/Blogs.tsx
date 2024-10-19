import React from 'react';
import { ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Alexa Skills Development',
    excerpt: 'Learn the basics of creating your first Alexa skill and dive into the world of voice-controlled applications.',
    author: 'John Doe',
    date: '2024-03-15',
  },
  {
    id: 2,
    title: 'The Future of AI in Education',
    excerpt: 'Explore how artificial intelligence is revolutionizing the education sector and what it means for students and educators.',
    author: 'Jane Smith',
    date: '2024-03-10',
  },
  {
    id: 3,
    title: 'Building Responsive Web Apps with React',
    excerpt: 'A comprehensive guide to creating modern, responsive web applications using React and best practices.',
    author: 'Mike Johnson',
    date: '2024-03-05',
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Latest Blog Posts</h2>
        <div className="space-y-10 sm:space-y-16">
          {blogPosts.map((post) => (
            <div key={post.id} className="border-t border-gray-200 pt-10 sm:pt-16">
              <article>
                <h3 className="text-2xl font-bold text-gray-900">{post.title}</h3>
                <p className="mt-2 text-sm text-gray-500">
                  {post.author} • {post.date}
                </p>
                <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                <div className="mt-4">
                  <a
                    href={`/blog/${post.id}`}
                    className="text-base font-semibold text-indigo-600 hover:text-indigo-500 inline-flex items-center"
                  >
                    Read full story
                    <ChevronRight className="ml-1 h-5 w-5" />
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;