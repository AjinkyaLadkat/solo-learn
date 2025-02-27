import { useState } from 'react';
import { Code2, Search, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center cursor-pointer">
              <Code2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Sololearn</span>
            </div>
            
            <div className="hidden lg:flex items-center ml-8 space-x-1">
            <Link to="/SignIn" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
  Learn
</Link>
<Link to="/" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
  Home
</Link>
<Link to="/SignIn" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">

  Code Playground   
  
</Link>
                
             
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <div className={`relative transition-all duration-300 ${isSearchFocused ? 'w-96' : 'w-64'}`}>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="What do you want to learn?"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300"
                />
              </div>
            </div>
            <Link to="/discuss" className="text-gray-600 hover:text-gray-900">Discuss</Link>
            <Link to="/TeamsPage" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
  Teams
</Link>

            <Link to="/Loginmain" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
  Sign in
</Link>
<Link to="/SignUp" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Sign Up Free
              </Link>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-2">
              <input
                type="text"
                placeholder="What do you want to learn?"
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="px-2 py-3 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">Learn</a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">Code Playground</a>
              <Link to="/discuss" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
  Discuss
</Link>
<Link to="/TeamsPage" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
  Teams
</Link>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">Pro</a>
              <div className="pt-4 flex flex-col gap-2">
              <Link to="/Loginmain" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
  Sign in
</Link>
                <button className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                  Sign Up Free
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}