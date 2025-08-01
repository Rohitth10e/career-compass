import { AlertTriangle, X } from "lucide-react";

const ErrorModal = ({ isOpen, onClose, message = "An error occurred. Please try again later." }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div 
        className="bg-card rounded-2xl p-8 max-w-md w-full shadow-[var(--shadow-glow)] border border-destructive/20"
        role="dialog"
        aria-labelledby="error-title"
        aria-describedby="error-description"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="p-3 bg-destructive/10 rounded-xl mr-4">
              <AlertTriangle className="w-6 h-6 text-destructive" />
            </div>
            <h2 id="error-title" className="text-xl font-bold text-foreground">
              Error
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-[var(--transition-smooth)]"
            aria-label="Close error modal"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
        
        <p id="error-description" className="text-foreground mb-6 leading-relaxed">
          {message}
        </p>
        
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-destructive hover:bg-destructive/90 text-destructive-foreground font-semibold py-3 px-4 rounded-lg transition-[var(--transition-smooth)]"
          >
            Try Again
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-muted hover:bg-muted/80 text-muted-foreground font-semibold py-3 px-4 rounded-lg transition-[var(--transition-smooth)]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;