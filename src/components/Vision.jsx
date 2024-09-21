import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MatrixRain from './MatrixRain';  

const Vision = () => {
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
                <h2 className="text-6xl font-bold mb-6 text-center">Our Vision</h2>
                <p className="text-xl mb-8 max-w-3xl mx-auto text-center">
                  At "Code With Nexus", we're driven by a relentless pursuit of innovation. Our team of brilliant minds is dedicated to pushing the boundaries of what's possible.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <section className="mt-20">
            <h3 className="text-4xl font-bold mb-6 text-center">Key Aspects of Our Vision</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-2xl font-semibold mb-2">Innovation</h4>
                <p className="text-lg">
                  Our mission is to push technological boundaries, create revolutionary solutions, and stay ahead of industry trends.
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-2xl font-semibold mb-2">Empowerment</h4>
                <p className="text-lg">
                  We empower developers with the tools and insights they need to build, manage, and deploy their projects effectively.
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-2xl font-semibold mb-2">Collaboration</h4>
                <p className="text-lg">
                  Collaboration is at the core of our vision. We foster an environment where developers and innovators work together seamlessly.
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-2xl font-semibold mb-2">Inclusivity</h4>
                <p className="text-lg">
                  We believe in creating a space where developers from all backgrounds feel welcomed and valued.
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-2xl font-semibold mb-2">Education</h4>
                <p className="text-lg">
                  Continuous learning is essential. We provide resources and learning opportunities for developers to enhance their skills.
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-2xl font-semibold mb-2">Responsibility</h4>
                <p className="text-lg">
                  We strive to be responsible stewards of technology, ensuring our solutions are ethical and sustainable.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="mt-20">
            <h3 className="text-4xl font-bold mb-6 text-center">Our Long-Term Goals</h3>
            <p className="text-lg mb-4 text-center max-w-2xl mx-auto">
              "Code With Nexus" is more than just a platform. It's a movement designed to create a thriving developer community and change the way we think about tech.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-2xl font-semibold mb-4">Expansion</h4>
                <p>
                  We plan to expand our suite of tools and services, creating even more opportunities for developers to learn, grow, and innovate.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-2xl font-semibold mb-4">Sustainability</h4>
                <p>
                  Our focus is on long-term sustainability, both for the developers who use our platform and for the tech solutions we create.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-2xl font-semibold mb-4">Community Building</h4>
                <p>
                  We aim to foster a vibrant community where developers can network, share knowledge, and collaborate on exciting projects.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-2xl font-semibold mb-4">Innovation Hub</h4>
                <p>
                  Our goal is to establish "Code With Nexus" as a leading innovation hub in the tech industry, attracting talent and ideas from around the globe.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Vision;
