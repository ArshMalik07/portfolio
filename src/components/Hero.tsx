import { ArrowDown } from 'lucide-react';
import Typewriter from 'react-typewriter-effect';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Mohammad Arsh
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-gray-300 flex justify-center">
            <Typewriter
              multiText={["Software Engineer", "Full Stack Developer","Data Analyst", "Open Source Contributer","Tech Enthusiast"]}
              cursorColor="#ffffff"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
              multiTextLoop={true} 
            />
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
            Passionate about coding, eager to innovate – a fresher with a vision to build and grow.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-cyan-500/20"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 bg-slate-700 rounded-lg font-medium hover:bg-slate-600 transition-all border border-slate-600"
            >
              View My Work
            </a>
            <a 
              href="https://drive.google.com/drive/folders/15lUslRgPTpG2GUkPowIjnBHbaU7bt4-j" 
               className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-cyan-500/20"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
