import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-black text-green-500 font-mono overflow-hidden">
      <div className="relative z-10">
        <footer className="mt-20 p-8 border-t border-green-500">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Access Points</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-green-400 transition-colors duration-200">Home</Link>
                </li>
                {['Vision', 'Connect', 'Testimonials'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase()}`} className="hover:text-green-400 transition-colors duration-200">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Network Nodes</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.linkedin.com/company/30dc/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-200">LinkedIn</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/30dayscoding/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-200">Instagram</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@30DaysOfCoding" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-200">YouTube</a>
                </li>
                <li>
                  <a href="https://x.com/30dayscoding" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-200">Twitter</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Allied Systems</h3>
              <ul className="space-y-2">
                {['Shell', 'Ferrari', 'Apple', 'Microsoft'].map((item) => (
                  <li key={item}>
                    <Link to="/" className="hover:text-green-400 transition-colors duration-200">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-sm opacity-70">
            © 2024 Code With Nexus, Inc. All rights reserved. | The Matrix has you.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
