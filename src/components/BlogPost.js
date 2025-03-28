import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/BlogData';
import { ArrowLeftIcon, TagIcon } from '@heroicons/react/24/outline';
import { Helmet } from 'react-helmet';

const BlogPost = () => {
  const { id, slug } = useParams();
  const [post, setPost] = useState(null);
  
  useEffect(() => {
    let currentPost;
    
    if (id) {
      currentPost = blogPosts.find(post => post.id === parseInt(id));
    } else if (slug) {
      currentPost = blogPosts.find(post => post.slug === slug);
    }
    
    setPost(currentPost);
    window.scrollTo(0, 0);
  }, [id, slug]);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading post...</p>
      </div>
    );
  }

  return (
    <>
      {post.seo && (
        <Helmet>
          <title>2 & 3 BHK Gated Community Apartments in Guntur for sale.</title>
          <meta name="description" content={"2 & 3 BHK Gated Community Apartments in Guntur for sale | Book your dream home now in Lakshmi Nilayam Apartments."} />
          <meta name="keywords" content={post.tags?.join(', ')} />
          <meta name="robots" content="index, follow" /> {/* Added meta tag for SEO */}
        </Helmet>
      )}
      
      <div className="container mx-auto px-4 py-20 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/blog" className="inline-flex items-center text-[#EB6484] mb-8">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Blog
          </Link>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              className="w-full h-72 object-cover" 
              src={post.imageUrl} 
              alt={post.title} 
            />
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#EB6484] font-medium">{post.category}</span>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              <p className="text-gray-500 mb-6">By {post.author}</p>
              
              <div 
                className="prose max-w-none" 
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {post.tags && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center">
                    <TagIcon className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-700 font-medium">Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default BlogPost;
