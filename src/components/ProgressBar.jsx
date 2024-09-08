import React from 'react';

export const ProgressBar = React.memo(({ currentStep, totalSteps }) => {
  const progress = totalSteps > 1 ? ((currentStep - 1) / (totalSteps - 1)) * 100 : 100;

  return (
    <div className="w-full bg-gray-100 rounded-full h-2 mb-6 shadow-md" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" aria-label={`Progress: ${currentStep} of ${totalSteps}`}>
      <div className="bg-primary-default h-2 rounded-full transition-all duration-500 ease-in-out" style={{ width: `${progress}%` }}></div>
    </div>
  );
});
