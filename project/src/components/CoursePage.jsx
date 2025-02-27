import React, { useState, useMemo } from 'react';
import { Menu, Search, ChevronRight, BookOpen, Code, Brain, Globe, Database, Layout } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('All courses');
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const topCourses = [
    { title: "Generative AI in Practice", icon: <Brain className="w-6 h-6" />, students: "50K+" },
    { title: "Coding Foundations", icon: <Code className="w-6 h-6" />, students: "100K+" },
    { title: "Python Developer", icon: <BookOpen className="w-6 h-6" />, students: "200K+" },
    { title: "Web Development", icon: <Globe className="w-6 h-6" />, students: "150K+" },
    { title: "Coding for Data", icon: <Database className="w-6 h-6" />, students: "75K+" },
    { title: "Front-end for Beginners", icon: <Layout className="w-6 h-6" />, students: "125K+" },
  ];

  const languages = ["Python", "JavaScript", "HTML/CSS", "Java", "C++", "SQL", "TypeScript", "Ruby"];

  const buttons = [
    "All courses",
    "Generative AI",
    "Website",
    "Mobile apps",
    "Games",
    "Backend",
    "Data Science",
  ];

  const exploreCourses = [
    {
      title: "Generative AI in Practice",
      icon: <Brain className="w-6 h-6" />,
      description: "Master prompt engineering and learn to leverage AI tools for automation and productivity enhancement.",
      level: "Intermediate",
      duration: "8 weeks",
      category: "Generative AI"
    },
    {
      title: "Python Mastery",
      icon: <Code className="w-6 h-6" />,
      description: "Comprehensive Python programming from basics to advanced concepts including OOP and data structures.",
      level: "Beginner",
      duration: "12 weeks",
      category: "Backend"
    },
    {
      title: "Full-Stack Development",
      icon: <Globe className="w-6 h-6" />,
      description: "Build modern web applications with React, Node.js, and MongoDB. Master both frontend and backend.",
      level: "Advanced",
      duration: "16 weeks",
      category: "Website"
    },
    {
      title: "Data Science Fundamentals",
      icon: <Database className="w-6 h-6" />,
      description: "Learn data analysis, visualization, and machine learning with Python and popular libraries.",
      level: "Intermediate",
      duration: "10 weeks",
      category: "Data Science"
    },
  ];

  const filteredCourses = useMemo(() => {
    return exploreCourses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTab = activeTab === 'All courses' || course.category === activeTab;
      return matchesSearch && matchesTab;
    });
  }, [searchQuery, activeTab]);

  const handleEnroll = (courseTitle) => {
    alert(`Enrolling in ${courseTitle}`);
  };

  const handleLanguageClick = (language) => {
    setSearchQuery(language);
    setActiveTab('All courses');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold cursor-pointer" 
                  onClick={() => {setActiveTab('All courses'); setSearchQuery('');}}>
                SoloLearn
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative rounded-md shadow-sm hidden md:block">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-700 bg-gray-900 text-white focus:ring-white focus:border-white block w-full sm:text-sm rounded-md placeholder-gray-400"
                  placeholder="Search courses..."
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <button 
                onClick={() => alert('Sign in functionality would be implemented here')}
                className="inline-flex items-center px-4 py-2 border border-white text-sm font-medium rounded-md text-white hover:bg-white hover:text-black transition-colors duration-200">
                Sign In
              </button>
              <Menu 
                className="h-6 w-6 cursor-pointer md:hidden" 
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Courses Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Top-Rated Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-black rounded-lg text-white">
                    {course.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-black">{course.title}</h3>
                    <p className="text-sm text-gray-600">{course.students} students</p>
                    <button 
                      onClick={() => handleEnroll(course.title)}
                      className="mt-2 text-sm bg-black text-white px-4 py-1 rounded hover:bg-gray-800 transition-colors duration-200"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Languages Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Popular Languages</h2>
          <div className="flex flex-wrap gap-3">
            {languages.map((language, index) => (
              <button
                key={index}
                onClick={() => handleLanguageClick(language)}
                className="px-4 py-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition-all duration-200"
              >
                {language}
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
