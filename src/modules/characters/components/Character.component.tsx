import React from "react";
import { CharacterDetails } from "../../../common/types";
import Button from "../../shared/components/Button";

type Props = {
  characterDetails: CharacterDetails;
  handleGoBack: () => void;
};

const CharacterComponent: React.FC<Props> = ({
  characterDetails,
  handleGoBack,
}) => {
  return (
    <div className="p-4 flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className="flex justify-center items-center">
            <img
              src={characterDetails.image}
              alt={characterDetails.name}
              className="w-full max-w-sm h-auto rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-2 p-4">
            <h1 className="text-3xl font-bold mb-2">{characterDetails.name}</h1>
            <p className="text-lg text-gray-700">
              <strong>Species:</strong> {characterDetails.species}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Gender:</strong> {characterDetails.gender}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Status:</strong> {characterDetails.status}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Origin:</strong> {characterDetails.origin.name}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Location:</strong> {characterDetails.location.name}
            </p>
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Episodes:</h2>
              <ul className="list-disc list-inside pl-5">
                {characterDetails.episode.map((ep, index) => (
                  <li key={index} className="text-gray-700">
                    {ep.name}
                  </li>
                ))}
              </ul>
            </div>
            <Button
              onClick={handleGoBack}
              className="mt-10 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300 "
              text="Go Back"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterComponent;
