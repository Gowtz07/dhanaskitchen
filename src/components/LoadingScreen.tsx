import { useEffect, useState } from 'react';

export const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background to-background/95 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-6 animate-fade-in">
        {/* Steaming Bowl Icon */}
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-saffron/20 to-saffron/10 border-2 border-saffron/30 flex items-center justify-center animate-pulse">
            {/* Bowl */}
            <div className="w-16 h-12 rounded-b-full border-4 border-saffron bg-gradient-to-t from-saffron/20 to-transparent"></div>
          </div>
          
          {/* Steam Animation */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-1">
              <div className="w-1 h-6 bg-saffron/40 rounded-full animate-[fade-in_1.5s_ease-in-out_infinite]"></div>
              <div className="w-1 h-4 bg-saffron/30 rounded-full animate-[fade-in_1.5s_ease-in-out_infinite_0.3s]"></div>
              <div className="w-1 h-5 bg-saffron/40 rounded-full animate-[fade-in_1.5s_ease-in-out_infinite_0.6s]"></div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">Dhana's Home Food</h2>
          <p className="text-muted-foreground animate-pulse">Preparing your feast...</p>
        </div>

        {/* Loading Dots */}
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-saffron rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
          <div className="w-2 h-2 bg-saffron rounded-full animate-[pulse_1s_ease-in-out_infinite_0.2s]"></div>
          <div className="w-2 h-2 bg-saffron rounded-full animate-[pulse_1s_ease-in-out_infinite_0.4s]"></div>
        </div>
      </div>
    </div>
  );
};