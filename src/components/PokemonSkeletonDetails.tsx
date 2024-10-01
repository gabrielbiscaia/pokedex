import React from "react";

const PokemonSkeletonDetails: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-800 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden relative">
        <div className="p-4 bg-gray-300 text-white flex justify-between items-center relative">
          <div className="w-24 h-6 bg-gray-400 rounded"></div>
          <div className="w-32 h-8 bg-gray-400 rounded"></div>
          <div className="w-16 h-6 bg-gray-400 rounded"></div>
        </div>

        <div className="p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-48 h-48 bg-gray-300 rounded-full mb-4 md:mb-0 md:mr-8"></div>
            <div className="w-full">
              <div className="flex gap-2 mb-4">
                <div className="w-20 h-8 bg-gray-300 rounded-full"></div>
                <div className="w-20 h-8 bg-gray-300 rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[1, 2, 3].map((index) => (
                  <div key={index}>
                    <div className="w-20 h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="w-24 h-6 bg-gray-300 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="w-40 h-8 bg-gray-300 rounded mx-auto mb-4"></div>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="flex items-center px-4">
                  <div className="w-24 h-4 bg-gray-300 rounded mr-4"></div>
                  <div className="flex-grow bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gray-300 h-full"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                  <div className="w-10 h-4 bg-gray-300 rounded ml-4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonSkeletonDetails;
