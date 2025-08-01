import { useState } from "react";
import { Search, ChevronDown, Users, BookOpen, TrendingUp, Link, Lightbulb, Zap, AlertTriangle } from "lucide-react";
import Header from "../components/Header";
import LoadingSpinner from "../components/LoadingSpinner";
import CourseCard from "../components/CourseCard";
import ErrorModal from "../components/ErrorModal";
import compassHero from "../assets/compass-hero.jpg";
import axios from "axios";

const Index = () => {
  const [topic, setTopic] = useState("");
  const [skillLevel, setSkillLevel] = useState("intermediate");
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);

  const handleGenerateRoadmap = async () => {
    if (!topic.trim()) {
      setError("Please enter a topic");
      setShowError(true);
      return;
    }

    setLoading(true);
    setError(null);
    setRoadmap(null); // Clear previous results

    try {
      // Make a POST request to your running backend server
      const response = await axios.post('http://localhost:3000/api/get-roadmap', {
        topic,
        skillLevel
      });
      // Set the roadmap state with the data from the API
      setRoadmap(response.data);

    } catch (err) {
      const errorMessage = err.response?.data?.error || "Unable to generate roadmap. Please try again.";
      setError(errorMessage);
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

      {/* --- Roadmap Results --- */}
      {roadmap && !loading && (
        <>
          {/* Learning Path Section */}
          <section id="learning-path" className="py-16 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground">Your Learning Path for {roadmap.topic}</h2>
                <p className="mt-4 text-lg text-muted-foreground">{roadmap.what_you_will_achieve}</p>
              </div>
              
              <div className="space-y-12">
                {roadmap.learning_modules.map(module => (
                  <div key={module.module_number} className="p-8 bg-card rounded-2xl shadow-[var(--shadow-card)] border border-border/50">
                    <h3 className="text-2xl font-bold text-primary mb-2">Module {module.module_number}: {module.module_title}</h3>
                    <p className="text-muted-foreground mb-6 italic">{module.module_goal}</p>
                    
                    <div className="space-y-4 mb-6">
                      {module.key_concepts.map((concept, idx) => (
                        <div key={idx} className="p-4 border-l-4 border-accent bg-accent/10 rounded-r-lg">
                          <h4 className="font-semibold text-foreground">{concept.concept}</h4>
                          <p className="text-muted-foreground text-sm mt-1">{concept.description}</p>
                          <p className="text-xs text-primary/80 mt-2"><strong>Why it's important:</strong> {concept.why_it_is_important}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center"><Zap className="w-4 h-4 mr-2 text-highlight"/>Project Idea</h4>
                      <p className="text-muted-foreground text-sm">{module.project_idea}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Recommended Courses */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Recommended Courses</h2>
                <p className="text-lg text-muted-foreground">
                  Curated courses to help you master {roadmap.topic}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {roadmap.recommended_courses.map((course, index) => (
                  <CourseCard 
                    key={index} 
                    title={course.title}
                    partner={course.platform}
                    description={course.description}
                    rating={4.5} // Placeholder
                    duration="Varies" // Placeholder
                    level={roadmap.skillLevel}
                    category="Online Course"
                    url={course.url}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Tips for Success Section */}
          <section className="py-16">
             <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Tips for Success</h2>
                    <p className="text-lg text-muted-foreground">Avoid common pitfalls with this advice.</p>
                </div>
                <div className="space-y-6">
                    {roadmap.common_pitfalls_and_tips.map((item, index) => (
                        <div key={index} className="bg-card p-6 rounded-2xl border border-border/50">
                            <h4 className="font-semibold text-foreground flex items-center"><AlertTriangle className="w-5 h-5 mr-2 text-destructive"/> {item.pitfall}</h4>
                            <p className="text-muted-foreground mt-2 text-sm flex items-start"><Lightbulb className="w-5 h-5 mr-2 text-highlight flex-shrink-0 mt-1"/> {item.tip}</p>
                        </div>
                    ))}
                </div>
             </div>
          </section>

          {/* Other Resources Section */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">More Resources</h2>
                <p className="text-lg text-muted-foreground">
                  Supplement your learning with these articles, videos, and tutorials.
                </p>
              </div>
              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                {roadmap.other_resources.map((resource, index) => (
                  <a 
                    key={index} 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-6 bg-card rounded-2xl shadow-[var(--shadow-card)] border border-border/50 hover:border-primary transition-colors group"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <Link className="h-6 w-6 text-primary" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-primary capitalize">{resource.type.replace(/_/g, ' ')}</p>
                        <p className="text-lg font-semibold text-foreground mt-1 group-hover:text-primary">{resource.title}</p>
                        <p className="mt-2 text-sm text-muted-foreground">{resource.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

           {/* Next Steps Section */}
           <section className="py-16">
                <div className="max-w-3xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold text-foreground mb-4">What's Next?</h2>
                    <p className="text-lg text-muted-foreground">{roadmap.next_steps}</p>
                </div>
           </section>
        </>
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
