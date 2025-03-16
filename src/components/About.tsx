// import React from 'react';
import { Code, Lightbulb, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="public\Photo.jpg" 
              alt="Arsh Malek" 
              className="rounded-lg shadow-xl w-full max-w-md mx-auto object-cover h-[500px]"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Who I Am ?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate software engineer with a strong foundation in modern web technologies and a drive to create elegant, efficient solutions to complex problems. My journey in tech began with a curiosity about how digital products work, which evolved into a career dedicated to building them.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and pushing the boundaries of what's possible with code.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
                <div className="bg-blue-500/20 p-3 rounded-full w-fit mb-4">
                  <Code className="text-blue-400" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Clean Code</h4>
                <p className="text-gray-400 text-sm">I write maintainable, scalable, and efficient code.</p>
              </div>
              
              <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
                <div className="bg-cyan-500/20 p-3 rounded-full w-fit mb-4">
                  <Lightbulb className="text-cyan-400" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Problem Solver</h4>
                <p className="text-gray-400 text-sm">I enjoy tackling complex challenges with creative solutions.</p>
              </div>
              
              <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
                <div className="bg-purple-500/20 p-3 rounded-full w-fit mb-4">
                  <Users className="text-purple-400" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Team Player</h4>
                <p className="text-gray-400 text-sm">I thrive in collaborative environments and value communication.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
