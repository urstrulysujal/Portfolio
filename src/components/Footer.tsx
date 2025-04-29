import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Sujal Tirumale</h2>
            <p className="text-gray-400 mt-2">Full Stack Developer</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="Sujalhome" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="Sujalabout" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="Sujalskills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
            <a href="Sujalprojects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="Sujalexperience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
            <a href="Sujalcontact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
          
          <button 
            onClick={scrollToTop} 
            className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center shadow-lg transition-colors mt-6 md:mt-0"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-center items-center w-full">
        <p className="text-gray-400 text-sm text-center">
        © {new Date().getFullYear()} Sujal Tirumale. All rights reserved.
        </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;