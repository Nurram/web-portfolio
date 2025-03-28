
import React from 'react';
import { Trophy } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="bg-dark-elevated relative">
      {/* Background effect */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxQzFDMUUiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMjcgMGgydjU4aC0yek0zMyAwaDJ2NThoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Achievements</h2>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Achievement 1 */}
            <div className="glass-panel p-6 rounded-xl flex items-start space-x-4 hover:border-blue-accent/50 transition-all duration-300">
              <div className="flex-shrink-0 mt-1">
                <div className="bg-blue-accent/20 p-2.5 rounded-full">
                  <Trophy className="w-6 h-6 text-blue-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium">Asyst Hackathon Winner</h3>
                <p className="text-dark-secondary mt-2">
                  Winner of Asyst Hackathon in Mobile Development Category
                </p>
              </div>
            </div>
            
            {/* Achievement 2 */}
            <div className="glass-panel p-6 rounded-xl flex items-start space-x-4 hover:border-blue-accent/50 transition-all duration-300">
              <div className="flex-shrink-0 mt-1">
                <div className="bg-blue-accent/20 p-2.5 rounded-full">
                  <Trophy className="w-6 h-6 text-blue-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium">TOP 5 DEEP Trainee</h3>
                <p className="text-dark-secondary mt-2">
                  Recognized as one of the top 5 trainees in the Developer Development Program (DEEP)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
