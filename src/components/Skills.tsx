
const Skills = () => {
  
  const technicalSkills = [
    'Data Structures',
    'Algorithms',
    'Python',
    'Java',
    'Web Development',
    'Database Management',

    'MongoDB',
    'Express.js',
    'React.js',
    'Node.js',
    'Machine Learning',
    'Data Analytics',
    'SQL',
    'IoT',
    'Deep Learning',
    'Computer Vision'
  ];
    

  const softSkills = [
    'Problem Solving',
    'Communication',
    'Team Collaboration',
    'Time Management',
    'Adaptability',
    'Critical Thinking',
    'Attention to Detail',
    'Project Management',
  ];

  const tools = [
    'VS Code',
    'Git',
    'GitHub',
    'Docker',
    'Postman',
    'AWS',
    'PowerBI',
    'Jupyter Notebook',
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-zinc-900 to-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my journey as a software engineer.
            Here's a glimpse of what I bring to the table.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="bg-zinc-800/50 p-8 rounded-xl border border-zinc-700 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Technical Skills</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills & Tools */}
          <div className="space-y-8">
            {/* Soft Skills */}
            <div className="bg-zinc-800/50 p-8 rounded-xl border border-slate-700 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Soft Skills</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tools & Technologies */}
            <div className="bg-zinc-800/50 p-8 rounded-xl border border-slate-700 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Tools & Technologies</h3>
              
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-zinc-700 rounded-full text-sm font-medium border border-slate-600"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;