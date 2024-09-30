import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-black text-green-500 font-mono overflow-hidden">
      <div className="relative z-10">
        <header className="p-4 flex flex-wrap justify-between items-center">
          <motion.div
            className="flex items-center space-x-2 mb-4 sm:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 bg-green-500 rounded-full animate-pulse" />
            <h1 className="text-xl sm:text-2xl font-bold">Code With Nexus</h1>
          </motion.div>

          <nav className="w-full sm:w-auto">
            <ul className="flex flex-wrap justify-center sm:justify-end space-x-4">
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link to="/" className="relative overflow-hidden group">
                  <span className="relative z-10 transition-colors duration-300 group-hover:px-2 group-hover:py-2 group-hover:text-black">
                    Home
                  </span>
                  <span className="absolute inset-0 bg-green-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link to="/vision" className="relative overflow-hidden group">
                  <span className="relative z-10 transition-colors duration-300 group-hover:px-2 group-hover:py-2 group-hover:text-black">
                    Vision
                  </span>
                  <span className="absolute inset-0 bg-green-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link to="/connect" className="relative overflow-hidden group">
                  <span className="relative z-10 transition-colors duration-300 group-hover:px-2 group-hover:py-2 group-hover:text-black">
                    Connect
                  </span>
                  <span className="absolute inset-0 bg-green-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link to="/QandA" className="relative overflow-hidden group">
                  <span className="relative z-10 transition-colors duration-300 group-hover:px-2 group-hover:py-2 group-hover:text-black">
                    QandA
                  </span>
                  <span className="absolute inset-0 bg-green-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </motion.li>
            </ul>
          </nav>

          <motion.button
            className="mt-4 sm:mt-0 px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-400 transition-colors duration-300"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Enter the Matrix
          </motion.button>
        </header>
      </div>
    </div>
  );
}

export default Header;
