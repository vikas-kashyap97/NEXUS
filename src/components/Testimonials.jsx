import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MatrixRain from './MatrixRain';

const Testimonials = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono overflow-hidden">
      <MatrixRain />
      <div className="relative z-10">
        <section className="container mx-auto mt-20 relative">
          <AnimatePresence>
            {isLoaded && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.9 }}
              >
                <h2 className="text-6xl font-bold mb-12 text-center">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    className="bg-gray-800 p-8 rounded-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-semibold mb-4">Industry Leaders Trust Us</h3>
                    <p className="text-lg mb-6">
                      "The innovative solutions from 'Code With Nexus' have transformed our operations. Their technology has streamlined our workflow, enabling us to achieve our goals faster and more efficiently than ever before."
                    </p>
                    <button className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90">
                      Read More
                    </button>
                  </motion.div>
                  <motion.div
                    className="bg-gray-800 p-8 rounded-lg"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-semibold mb-4">Trusted by the Best</h3>
                    <p className="text-lg mb-6">
                      "Our partnership with 'Code With Nexus' has led to exceptional results. Their expert team has guided us through every step of the process, and we've seen a significant increase in our productivity and innovation."
                    </p>
                    <button className="bg-secondary text-white px-6 py-2 rounded hover:bg-opacity-90">
                      Learn More
                    </button>
                  </motion.div>
                </div>
                <div className="mt-12">
                  <h3 className="text-4xl font-bold mb-6 text-center">More Feedback</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { name: "Ravi Kumar", feedback: "The team at 'Code With Nexus' is incredibly supportive and innovative. Their commitment to our success has made a remarkable difference in our projects." },
                      { name: "Sneha Patel", feedback: "Working with 'Code With Nexus' has been a game-changer for us. Their insights and strategies have propelled our business forward." },
                      { name: "Ajay Singh", feedback: "We have consistently received top-notch service and innovative solutions from 'Code With Nexus'. Their team understands our needs and delivers beyond our expectations." },
                      { name: "Priya Sharma", feedback: "The collaborative environment fostered by 'Code With Nexus' allows us to share ideas and innovate. We've created some amazing projects together!" },
                      { name: "Karan Verma", feedback: "With 'Code With Nexus', we feel empowered to take on challenges that seemed impossible. Their expertise has been invaluable to our growth." },
                      { name: "Meera Reddy", feedback: "The passion and dedication of the 'Code With Nexus' team are evident in every interaction. They truly care about our success." },
                      { name: "Vikram Joshi", feedback: "Their solutions are not just effective; they are tailored to fit our unique requirements. 'Code With Nexus' has become our trusted partner." },
                      { name: "Anita Nair", feedback: "The creativity and professionalism of the 'Code With Nexus' team are unmatched. They make every project a success." },
                      { name: "Deepak Rao", feedback: "We are grateful for the opportunity to collaborate with 'Code With Nexus'. Their innovative approach has opened new doors for our business." },
                      { name: "Pooja Iyer", feedback: "I can't recommend 'Code With Nexus' enough. Their support and expertise have made a significant impact on our organization." },
                    ].map((testimonial, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-800 p-6 rounded-lg"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h4 className="text-2xl font-semibold mb-4">{testimonial.name}</h4>
                        <p className="text-lg">{testimonial.feedback}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
