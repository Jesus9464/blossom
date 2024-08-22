import React from "react";
import { useNavigate } from "react-router-dom";

const TryAgain: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => navigate(-1);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-red-500 mb-4">
        Something went wrong
      </h1>
      <p className="text-gray-700 mb-8">
        Please try again later or click the button below to retry.
      </p>
      <button
        onClick={handleGoBack}
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300"
      >
        Try Again
      </button>
    </div>
  );
};

export default TryAgain;
