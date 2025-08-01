import { Compass, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Compass className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Career Compass</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Navigate Your Learning Journey</p>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <button
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold py-2 px-4 rounded-lg transition-[var(--transition-smooth)] text-sm"
            >
              Get Started
            </button>
            <button
              className="p-2 hover:bg-muted rounded-lg transition-[var(--transition-smooth)]"
              aria-label="User profile"
            >
              <User className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;