import React from 'react';

export const StepIndicator = React.memo(({ currentStep, totalSteps }) => {
  return (
    <div className="flex justify-between mb-8">
      {[...Array(totalSteps)].map((_, index) => (
        <div key={index} className={`w-8 h-8 rounded-full flex items-center justify-center ${index < currentStep ? 'bg-primary-default text-white' : 'bg-gray-200 text-gray-600'}`}>
          {index + 1}
        </div>
      ))}
    </div>
  );
});
