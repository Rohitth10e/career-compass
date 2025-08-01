import { Compass } from "lucide-react";

const LoadingSpinner = ({ message = "Generating your roadmap, please wait..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <Compass className="w-12 h-12 text-primary animate-spin" />
        <div className="absolute inset-0 w-12 h-12 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-foreground font-medium animate-pulse">
        {message}
      </p>
      <div className="mt-2 flex space-x-1">
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;