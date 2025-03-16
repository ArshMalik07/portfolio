import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Parul University',
      period: '2022 - 2026',
      description: 'I am pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering. My studies focus on programming, software development, algorithms, and emerging technologies. I am passionate about learning and applying my knowledge to solve real-world problems in the field of technology.',
      icon: <GraduationCap size={24} className="text-cyan-400" />,
    },
    {
      degree: 'Higher Secondary School',
      institution: 'Aleef English Medium School',
      period: '2020 - 2022',
      description: 'Passed my Higher Secondary School Certificate (HSC) with a focus on Science and Mathematics. I developed a strong foundation in subjects like Physics, Chemistry, Mathematics, and Computer Science. I was actively involved in extracurricular activities and leadership roles.',
      icon: <GraduationCap size={24} className="text-cyan-400" />,
    },
  ];

  const certifications = [
    {
      name: 'Data Science with Python',
      issuer: 'DevTown',
      date: 'December 2024',
      icon: <Award size={24} className="text-cyan-400" />,
    },
    {
      name: 'Theory of Computation',
      issuer: 'NPTEL',
      date: 'September 2024',
      icon: <Award size={24} className="text-cyan-400" />,
    },
    {
      name: 'Computer Networks and Internet Protocol',
      issuer: 'NPTEL',
      date: 'April 2024',
      icon: <Award size={24} className="text-cyan-400" />,
    },
    
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            My academic journey and professional certifications that have shaped my expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <BookOpen size={28} className="text-cyan-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-blue-500 before:to-purple-500">
              {education.map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-800 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    {item.icon}
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800/50 p-6 rounded-xl border border-slate-700 shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-semibold text-white">{item.degree}</h4>
                      <span className="text-sm font-medium text-cyan-400">{item.period}</span>
                    </div>
                    <div className="text-gray-400 mb-2">{item.institution}</div>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <Award size={28} className="text-cyan-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Certifications</h3>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 shadow-lg flex">
                  <div className="mr-4">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{cert.name}</h4>
                    <div className="text-gray-400 text-sm mb-1">{cert.issuer}</div>
                    <div className="text-cyan-400 text-xs font-medium">{cert.date}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/20">
              <h4 className="text-lg font-semibold text-white mb-3">Continuous Learning</h4>
              <p className="text-gray-300 text-sm">
                I'm committed to lifelong learning and regularly take courses to stay updated with the latest technologies and best practices in software development.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-700 rounded-full text-xs font-medium">Coursera</span>
                <span className="px-3 py-1 bg-slate-700 rounded-full text-xs font-medium">Udemy</span>
                <span className="px-3 py-1 bg-slate-700 rounded-full text-xs font-medium">Youtube</span>
        
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;