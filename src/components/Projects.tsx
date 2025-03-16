import { Github} from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Event Managment System',
      description: 'A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.',
      image: 'public/event_managment.jpg',
      technologies: ['Node.js', 'MongoDB', 'Express', 'JavaScript','HTML','CSS'],
      githubLink: 'https://github.com/ArshMalik07/EventManager'
    },
    {
      title: 'Electronic Shop Management System',
      description: 'A collaborative task management application with real-time updates, task assignment, and progress tracking.',
      image: 'public/shop_managment.jpg',
      technologies: ['Python','Flask','MySQL','JavaScript','HTML','CSS'],
      githubLink: 'https://github.com/ArshMalik07/shop'
    },
    {
      title: 'Stock Price Predictor',
      description: 'A weather application that provides real-time weather data, forecasts, and location-based weather alerts.',
      image: 'public/stock_poster.jpg',
      technologies: ['Python','Machine Learning','LSTM Model','Data Analytics'],
      githubLink: 'https://github.com/ArshMalik07/StockMarketPrediction'
    },
    {
      title: 'Smart AgroTech Farming and Business Solution (Open Source Project)',
      description: 'An AI-powered smart farming system that optimizes crop management, automates irrigation, and provides real-time analytics for better agricultural decision-making.',
      image: 'public/FarmingSolution.jpg',
      technologies: ['Flask', 'Machine Learning', 'Random Forest Model', 'Data Analytics', 'JavaScript','HTML','CSS'],
      githubLink: 'https://github.com/ArshMalik07/InnovationMarathon'
    },
    {
      title: 'Personalised Expence Tracker',
      description: 'A smart financial management tool that helps users track spending, set budgets, and manage their expenses efficiently.',
      image: 'public/ExpenseTracker.jpg',
      technologies: ['Nextjs','JavaScript','HTML','CSS'],
      githubLink: 'https://github.com/ArshMalik07/Personalised-Expense-Tracker'
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-lg hover:shadow-cyan-500/10 transition-all hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-slate-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={18} className="mr-2" />
                    <span>Code</span>
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/ArshMalik07" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 bg-slate-700 rounded-lg font-medium hover:bg-slate-600 transition-all border border-slate-600"
          >
            <Github size={20} className="mr-2" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;