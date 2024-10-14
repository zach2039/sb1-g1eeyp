import React, { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';
import LandingPage from './components/LandingPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-purple-900 flex items-center justify-center">
        <Zap size={64} className="text-yellow-400 animate-pulse" />
      </div>
    );
  }

  return <LandingPage />;
}

export default App;