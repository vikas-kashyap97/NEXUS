import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MatrixRain from './MatrixRain';

export default function Component() {
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
                <h2 className="text-6xl font-bold mb-6">Unlock the Code</h2>
                <p className="text-xl mb-8 max-w-2xl">
                  Welcome to the digital frontier. Discover "Code With Nexus" - the revolutionary tech application that's redefining reality. Are you ready to see how deep the rabbit hole goes?
                </p>
                <motion.button
                  className="px-8 py-4 bg-green-500 text-black rounded-md text-lg font-semibold hover:bg-green-400 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Take the Red Pill
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          <section className="mt-20">
            <h3 className="text-4xl font-bold mb-6">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Existing Features */}
              <motion.div
                className="bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-2xl font-semibold mb-2">Real-time Analytics</h4>
                <p className="text-lg">Track your code performance with live metrics that help you optimize your development process.</p>
              </motion.div>
              <motion.div
                className="bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-2xl font-semibold mb-2">Customizable Interface</h4>
                <p className="text-lg">Personalize your dashboard with widgets and views tailored to your needs and preferences.</p>
              </motion.div>
              <motion.div
                className="bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-2xl font-semibold mb-2">AI-Powered Suggestions</h4>
                <p className="text-lg">Leverage AI to improve code quality, find optimizations, and get recommendations for your projects.</p>
              </motion.div>

              <motion.div
                className="bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-2xl font-semibold mb-2">Collaboration Tools</h4>
                <p className="text-lg">Work seamlessly with your team using built-in communication and collaboration tools to share ideas and code.</p>
              </motion.div>
              <motion.div
                className="bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-2xl font-semibold mb-2">Version Control Integration</h4>
                <p className="text-lg">Integrate with popular version control systems to manage your code changes effortlessly.</p>
              </motion.div>
              <motion.div
                className="bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-2xl font-semibold mb-2">Custom Alerts</h4>
                <p className="text-lg">Set up custom alerts to notify you about code performance, errors, and other critical metrics.</p>
              </motion.div>
            </div>
          </section>

          <section className="mt-20">
            <h3 className="text-4xl font-bold mb-6">How It Works</h3>
            <p className="text-lg mb-4">Code With Nexus is designed to streamline your development experience. Here's how:</p>
            <ol className="list-decimal pl-8">
              <li>Connect your repository to the dashboard.</li>
              <li>Track live updates on code changes and performance.</li>
              <li>Use built-in tools to enhance code quality and collaboration.</li>
              <li>Deploy with ease, all within the platform.</li>
              <li>Analyze metrics and gather insights to optimize your code.</li>
              <li>Collaborate with team members in real-time.</li>
              <li>Access a library of resources and tutorials to enhance your skills.</li>
            </ol>
          </section>

          <section className="mt-20">
            <h3 className="text-4xl font-bold mb-6">Why Choose Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-4">We are more than just a coding platform. Our solution is built for developers who want to push boundaries and innovate at the highest levels.</p>
                <p className="text-lg mb-4">With our tools, you'll not only enhance productivity but also unlock new levels of creativity.</p>
              </div>
              <div>
              <motion.img
                      src="/why.png"
                      alt="Why Choose Us"
                      className="w-[30rem] h-auto rounded-lg"
                      animate={{ 
                        y: [0, -100, 0] 
                      }}
                      transition={{
                        duration: 4,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
              </div>
            </div>
          </section>

          <section className="mt-20">
            <h3 className="text-4xl font-bold mb-6">FAQ</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-2xl font-semibold">What is Code With Nexus?</h4>
                <p>Code With Nexus is a cutting-edge platform designed to help developers manage, monitor, and optimize their code in real-time.</p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold">How does the AI feature work?</h4>
                <p>Our AI uses machine learning algorithms to analyze your code and provide suggestions for improving performance, reducing bugs, and increasing efficiency.</p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold">Is Code With Nexus free?</h4>
                <p>Yes, we offer a free tier with limited features, and a premium tier for advanced users with more comprehensive tools and integrations.</p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold">What kind of support do you offer?</h4>
                <p>We provide 24/7 support through our help center, email, and live chat to assist users with any issues they may encounter.</p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold">Can I integrate with other tools?</h4>
                <p>Absolutely! Code With Nexus supports integration with various tools and services, including version control systems, CI/CD platforms, and more.</p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold">How do I get started?</h4>
                <p>Simply sign up for an account on our website, connect your repository, and explore the platform to unlock its full potential.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
