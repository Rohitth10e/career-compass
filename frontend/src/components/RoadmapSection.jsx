import { CheckCircle, Target, BookOpen } from "lucide-react";

const RoadmapSection = ({ roadmapData }) => {
  if (!roadmapData) return null;

  const { achievement, keyConcepts } = roadmapData;

  return (
    <div className="max-w-6xl mx-auto mt-16 space-y-12">
      {/* What You'll Achieve Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-primary/10 rounded-xl mr-4">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">What You'll Achieve</h2>
        </div>
        <div className="prose prose-gray max-w-none">
          <p className="text-foreground leading-relaxed text-lg">
            {achievement}
          </p>
        </div>
      </section>

      {/* Key Concepts Section */}
      <section className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] border border-border/50">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-accent/10 rounded-xl mr-4">
            <BookOpen className="w-6 h-6 text-accent" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Key Concepts You'll Master</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {keyConcepts.map((concept, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-highlight mt-1 flex-shrink-0" />
              <p className="text-foreground leading-relaxed">{concept}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RoadmapSection;