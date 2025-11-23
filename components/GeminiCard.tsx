import React, { useState, useEffect } from 'react';
import { Sparkles, X, Loader2 } from 'lucide-react';
import { getGeminiInsight } from '../services/geminiService';
import { Location } from '../types';

interface GeminiCardProps {
  location: Location | null;
  onClose: () => void;
}

export const GeminiCard: React.FC<GeminiCardProps> = ({ location, onClose }) => {
  const [insight, setInsight] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchInsight = async () => {
      if (!location) return;
      setLoading(true);
      setInsight('');
      
      // Check if API key is missing to fail fast, though service handles it too
      if (!process.env.API_KEY) {
        setInsight("Gemini API Key is missing. Please set the API_KEY environment variable to unlock AI insights.");
        setLoading(false);
        return;
      }

      try {
        const text = await getGeminiInsight(location);
        setInsight(text);
      } catch (e) {
        setInsight("Could not load insight.");
      } finally {
        setLoading(false);
      }
    };

    fetchInsight();
  }, [location]);

  if (!location) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md bg-white rounded-xl shadow-2xl border border-indigo-100 p-4 z-50 animate-in slide-in-from-bottom-10 duration-300">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-1.5 rounded-lg">
             <Sparkles className="w-4 h-4 text-white" />
          </div>
          <h3 className="font-bold text-gray-800 text-sm">{location.name}</h3>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X className="w-4 h-4" />
        </button>
      </div>
      
      <div className="text-gray-600 text-sm leading-relaxed">
        {loading ? (
           <div className="flex items-center gap-2 py-2">
             <Loader2 className="w-4 h-4 animate-spin text-indigo-500" />
             <span>Thinking...</span>
           </div>
        ) : (
          <p>{insight}</p>
        )}
      </div>
      
      {!process.env.API_KEY && !loading && (
         <div className="mt-2 text-xs text-red-500 bg-red-50 p-2 rounded">
           Dev Note: Add <code>API_KEY</code> to your environment to enable this.
         </div>
      )}
    </div>
  );
};