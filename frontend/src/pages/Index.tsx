import { useState } from "react";
import { Search, ChevronDown, Users, BookOpen, TrendingUp } from "lucide-react";
import Header from "../components/Header";
import LoadingSpinner from "../components/LoadingSpinner";
import RoadmapSection from "../components/RoadmapSection";
import CourseCard from "../components/CourseCard";
import ErrorModal from "../components/ErrorModal";
import compassHero from "../assets/compass-hero.jpg";

const Index = () => {
  const [topic, setTopic] = useState("");
  const [skillLevel, setSkillLevel] = useState("intermediate");
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);

  // Mock data for demonstration
  const mockRoadmapData = {
    achievement: "Master the fundamentals of React and build practical skills that will advance your career. You'll gain hands-on experience with industry-standard tools and methodologies, enabling you to tackle real-world challenges with confidence.",
    keyConcepts: [
      "Core React principles and best practices",
      "Industry-standard tools and frameworks", 
      "Real-world application scenarios",
      "Hands-on project development",
      "Problem-solving methodologies",
      "Performance optimization techniques"
    ]
  };

  const mockCourses = [
    {
      title: "Complete React Masterclass",
      partner: "TechEdu",
      rating: 4.8,
      description: "Comprehensive course covering all fundamentals with hands-on projects",
      duration: "12 weeks",
      level: "Intermediate",
      category: "Frontend"
    },
    {
      title: "React for Professionals", 
      partner: "CodeAcademy",
      rating: 4.6,
      description: "Industry-focused curriculum with real case studies",
      duration: "8 weeks",
      level: "Intermediate", 
      category: "Frontend"
    },
    {
      title: "Advanced React Techniques",
      partner: "DevMasters",
      rating: 4.9,
      description: "Deep dive into advanced concepts and optimization",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Frontend"
    }
  ];

  const handleGenerateRoadmap = async () => {
    if (!topic.trim()) {
      setError("Please enter a topic");
      setShowError(true);
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setRoadmap(mockRoadmapData);
    } catch (err) {
      setError("Unable to generate roadmap. Please check your input and try again.");
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleGenerateRoadmap();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Navigate Your{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Career Journey
                  </span>{" "}
                  with Confidence
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Get personalized learning roadmaps powered by AI. Discover the exact courses and skills you need to reach your career goals faster.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-5 h-5 text-primary mr-2" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">50K+</div>
                  <div className="text-sm text-muted-foreground">Learners Guided</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <BookOpen className="w-5 h-5 text-accent mr-2" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">1,200+</div>
                  <div className="text-sm text-muted-foreground">Learning Paths</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="w-5 h-5 text-highlight mr-2" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">94%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
                <img 
                  src={compassHero}
                  alt="Career guidance compass illustration"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Generation Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Create Your Learning Roadmap
            </h2>
            <p className="text-lg text-muted-foreground">
              Enter your topic and skill level to generate a personalized career roadmap
            </p>
          </div>

          {/* Input Form */}
          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] border border-border/50 max-w-2xl mx-auto">
            <div className="space-y-6">
              {/* Topic Input */}
              <div className="relative">
                <label htmlFor="topic-input" className="block text-sm font-medium text-foreground mb-2 text-left">
                  What do you want to learn?
                </label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    id="topic-input"
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter your topic, e.g., React"
                    className="w-full pl-12 pr-4 py-4 border border-input rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-[var(--transition-smooth)]"
                    aria-label="Topic input field"
                  />
                </div>
                {error && error.includes("topic") && (
                  <p className="text-destructive text-sm mt-1 text-left">Please enter a topic</p>
                )}
              </div>

              {/* Skill Level Dropdown */}
              <div>
                <label htmlFor="skill-level" className="block text-sm font-medium text-foreground mb-2 text-left">
                  Your current skill level
                </label>
                <div className="relative">
                  <select
                    id="skill-level"
                    value={skillLevel}
                    onChange={(e) => setSkillLevel(e.target.value)}
                    className="w-full appearance-none px-4 py-4 border border-input rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-[var(--transition-smooth)] cursor-pointer"
                    aria-label="Choose your current expertise level"
                  >
                    <option value="beginner">Beginner - New to this topic</option>
                    <option value="intermediate">Intermediate - Some experience</option>
                    <option value="advanced">Advanced - Significant expertise</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerateRoadmap}
                disabled={loading}
                className="w-full bg-primary hover:bg-primary-glow disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground font-bold py-4 px-8 rounded-xl transition-[var(--transition-smooth)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-0.5 transform"
              >
                {loading ? "Generating..." : "Generate Roadmap"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Loading State */}
      {loading && (
        <section className="py-16">
          <LoadingSpinner />
        </section>
      )}

      {/* Roadmap Results */}
      {roadmap && !loading && (
        <>
          <RoadmapSection roadmapData={roadmap} />
          
          {/* Recommended Courses */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Recommended Courses</h2>
                <p className="text-lg text-muted-foreground">
                  Curated courses to help you master {topic || 'your chosen topic'}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mockCourses.map((course, index) => (
                  <CourseCard key={index} {...course} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* No Results State */}
      {roadmap === null && !loading && topic && (
        <section className="py-16 text-center">
          <div className="max-w-md mx-auto">
            <p className="text-muted-foreground mb-4">No courses available for this topic</p>
            <button
              onClick={handleGenerateRoadmap}
              className="text-primary hover:text-primary-glow font-medium underline"
            >
              Retry
            </button>
          </div>
        </section>
      )}

      {/* Error Modal */}
      <ErrorModal
        isOpen={showError}
        onClose={() => setShowError(false)}
        message={error}
      />
    </div>
  );
};

export default Index;
