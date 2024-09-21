import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import MatrixRain from './MatrixRain';

const Connect = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono overflow-hidden">
      <MatrixRain />
      <div className="relative z-10">
        <main className="container mx-auto mt-20 relative">
          <AnimatePresence>
            {isLoaded && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.9 }}
              >
                <h2 className="text-6xl font-bold mb-6 text-center">Connect with Us</h2>
                <p className="text-xl mb-8 max-w-3xl mx-auto text-center">
                  Stay up-to-date with the latest news, insights, and innovations from "Code With Nexus". Follow us on our social media platforms to engage with our vibrant community.
                </p>
                <div className="flex justify-center">
                  <button className="bg-green-500 text-black px-6 py-3 rounded-lg text-lg hover:bg-opacity-90">
                    Get Started
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <section className="mt-20">
            <h3 className="text-4xl font-bold mb-6 text-center">Follow Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.a
                href="https://www.linkedin.com/company/30dc/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0077B5] p-6 rounded-lg text-white flex flex-col items-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FaLinkedin className="text-5xl mb-2" />
                <h4 className="text-2xl font-semibold mb-2 text-green-500">LinkedIn</h4>
                <p className='text-green-500 text-xl text-center'>Connect with us on LinkedIn for professional updates.</p>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/30dayscoding/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-6 rounded-lg text-white flex flex-col items-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FaInstagram className="text-5xl mb-2" />
                <h4 className="text-2xl font-semibold mb-2 text-green-500">Instagram</h4>
                <p className='text-green-500 text-xl text-center'>Explore our visually stunning portfolio and get inspired.</p>
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@30DaysOfCoding"
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-[#ff2525] p-6 rounded-lg text-white flex flex-col items-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FaYoutube className="text-5xl mb-2" />
                <h4 className="text-2xl font-semibold mb-2 text-green-500">YouTube</h4>
                <p className='text-green-500 text-xl text-center'>Dive into our extensive library of tech tutorials and masterclasses.</p>
              </motion.a>
              <motion.a
                href="https://x.com/30dayscoding"
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-[#1DA1F2] p-6 rounded-lg text-white flex flex-col items-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                
              >
                <FaTwitter className="text-5xl mb-2" />
                <h4 className="text-2xl font-semibold mb-2 text-green-800">X</h4>
                <p className='text-green-800 text-xl text-center'>Follow us for the latest updates and insights.</p>
              </motion.a>
            </div>
          </section>

          
          <section className="mt-20">
            <h3 className="text-4xl font-bold mb-6 text-center">Join Our Community</h3>
            <p className="text-lg mb-4 text-center max-w-2xl mx-auto">
              "Code With Nexus" is not just a platform; it's a thriving community of developers and innovators.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <motion.div
                className="bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-2xl font-semibold mb-4">Events</h4>
                <p>Join our upcoming events to learn, network, and grow your skills. We host workshops, webinars, and meetups where you can connect with industry leaders and fellow developers.</p>
              </motion.div>
              <motion.div
                className="bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-2xl font-semibold mb-4">Feedback</h4>
                <p>We value your feedback! Share your thoughts on our platform, tools, and content to help us improve and better serve our community.</p>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Connect;
