import React from "react";

const Home = () => {
  const isMobile = window.innerWidth < 768;
  return isMobile ? (
    <></>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <p className="text-gray-600 text-lg font-semibold">Select a character</p>
    </div>
  );
};

export default Home;
