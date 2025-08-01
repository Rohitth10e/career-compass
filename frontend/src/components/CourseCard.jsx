import { Star } from "lucide-react";

const CourseCard = ({ title, partner, rating, description, duration, level, category }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-highlight text-highlight" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 fill-highlight/50 text-highlight" />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)] hover:-translate-y-1 border border-border/50">
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
          {category}
        </span>
        <span className="text-xs text-muted-foreground font-medium">
          {level}
        </span>
      </div>

      <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
        {title}
      </h3>

      <div className="flex items-center mb-3">
        <div className="flex items-center mr-2">
          {renderStars(rating)}
        </div>
        <span className="text-sm font-semibold text-foreground mr-1">
          {rating}
        </span>
        <span className="text-xs text-muted-foreground">
          ({Math.floor(Math.random() * 2000) + 500} reviews)
        </span>
      </div>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
        {description}
      </p>

      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-muted-foreground">
          📚 {duration}
        </span>
        <span className="text-xs text-muted-foreground">
          by {partner}
        </span>
      </div>

      <button
        className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold py-3 px-4 rounded-lg transition-[var(--transition-smooth)] hover:shadow-[var(--shadow-elegant)]"
        aria-label={`View course: ${title}`}
      >
        View Course
      </button>
    </div>
  );
};

export default CourseCard;