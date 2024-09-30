import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MatrixRain from './MatrixRain';

const QASection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([
    { id: 1, category: 'HTML', question: 'What is semantic HTML?', answer: 'Semantic HTML refers to the use of HTML elements that clearly describe their meaning in a human- and machine-readable way.' },
    { id: 2, category: 'CSS', question: 'What is Flexbox?', answer: 'Flexbox is a layout model that allows for the easy alignment and distribution of items within a container, even when their size is unknown or dynamic.' },
    { id: 3, category: 'JavaScript', question: 'What is the difference between let and var?', answer: 'The `let` keyword declares a block-scoped variable, while `var` is function-scoped or globally scoped.' },
    { id: 4, category: 'React', question: 'What are hooks in React?', answer: 'Hooks are functions that let you use state and other React features without writing a class.' },
    { id: 5, category: 'Machine Learning', question: 'What is supervised learning?', answer: 'Supervised learning is a type of machine learning where the model is trained on labeled data.' },
  ]);

  const categories = ['All', 'HTML', 'CSS', 'JavaScript', 'React', 'Machine Learning'];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredQuestions = selectedCategory === 'All'
    ? questionsAndAnswers
    : questionsAndAnswers.filter((qa) => qa.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono overflow-hidden">
      <MatrixRain />
      <div className="relative z-10">
        <section className="container mx-auto mt-10 md:mt-20 relative px-4">
          <AnimatePresence>
            {isLoaded && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.9 }}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">Questions and Answers</h2>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center mb-8">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`mx-2 my-1 px-4 py-2 rounded-lg ${selectedCategory === category ? 'bg-green-500 text-black' : 'bg-gray-800 text-green-500'} transition duration-300`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Q&A List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filteredQuestions.map((qa) => (
                    <motion.div
                      key={qa.id}
                      className="bg-gray-800 p-6 rounded-lg relative"
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h4 className="text-xl md:text-2xl font-semibold mb-4">{qa.question}</h4>
                      <p className="text-base md:text-lg">{qa.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
};

export default QASection;
