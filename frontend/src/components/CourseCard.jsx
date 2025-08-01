import React from 'react';
import { ArrowRight } from 'lucide-react';

// Helper function to generate a reliable search URL
const generateSearchUrl = (title, platform) => {
  const encodedTitle = encodeURIComponent(title);
  
  // Map of known platforms to their search URL structures
  const platformSearchUrls = {
    'udemy': `https://www.udemy.com/courses/search/?q=${encodedTitle}`,
    'coursera': `https://www.coursera.org/search?query=${encodedTitle}`,
    'pluralsight': `https://www.pluralsight.com/search?q=${encodedTitle}`,
    'freecodecamp': `https://www.freecodecamp.org/news/search/?query=${encodedTitle}`,
    'edx': `https://www.edx.org/search?q=${encodedTitle}`,
    'codecademy': `https://www.codecademy.com/search?query=${encodedTitle}`,
    'youtube': `https://www.youtube.com/results?search_query=${encodedTitle}`,
    'github': `https://github.com/search?q=${encodedTitle}`,
  };

  const lowerCasePlatform = platform.toLowerCase();
  
  // Find a matching platform keyword within the platform string from the API
  const matchedPlatformKey = Object.keys(platformSearchUrls).find(key => 
    lowerCasePlatform.includes(key)
  );

  // Return the specific platform search URL if a keyword is found
  if (matchedPlatformKey) {
    return platformSearchUrls[matchedPlatformKey];
  }

  // Fallback to a generic Google search for unknown platforms
  return `https://www.google.com/search?q=${encodedTitle}+${encodeURIComponent(platform)}`;
};


const CourseCard = ({ title, partner, description, url }) => {
  // Generate a reliable search URL instead of using the potentially invalid one from the API
  const searchUrl = generateSearchUrl(title, partner);

  return (
    <a
      href={searchUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-full bg-card p-8 rounded-2xl shadow-md border border-border/50 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary/50 hover:-translate-y-1"
      aria-label={`Learn more about ${title} on ${partner}`}
    >
      {/* Platform name */}
      <p className="text-sm font-medium text-muted-foreground mb-2">{partner}</p>
      
      {/* Course Title */}
      <h3 className="text-xl font-bold text-foreground mb-3">
        {title}
      </h3>

      {/* Course Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Animated CTA Arrow */}
      <div className="absolute bottom-8 right-8 text-muted-foreground transition-all duration-300 ease-in-out group-hover:text-primary group-hover:translate-x-1">
        <ArrowRight className="w-6 h-6" />
      </div>
    </a>
  );
};

export default CourseCard;
