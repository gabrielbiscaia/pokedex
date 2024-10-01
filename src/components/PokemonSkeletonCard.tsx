import React from "react";

const PokemonSkeletonCard: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-xl relative border-2 border-slate-800 animate-pulse">
      <div className="absolute top-2 right-2 h-6 w-10 bg-gray-300 rounded"></div>
      <div className="w-full h-48 bg-gray-300 rounded-t-xl"></div>
      <div className="bg-slate-200 p-4 rounded-xl">
        <div className="h-6 w-3/4 bg-gray-300 rounded mx-auto mb-2"></div>
        <div className="flex justify-center gap-2 mt-2">
          <div className="h-8 w-20 bg-gray-300 rounded-full"></div>
          <div className="h-8 w-20 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default PokemonSkeletonCard;
