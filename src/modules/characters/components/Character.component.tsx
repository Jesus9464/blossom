import React, { Dispatch, SetStateAction } from "react";
import { CharacterDetails } from "../../../common/types";
import Button from "../../shared/components/Button";

type Props = {
  characterDetails: CharacterDetails;
  comment: string;
  comments: string[];
  isDisabledAddToFavorite: boolean;
  handleGoBack: () => void;
  handleAddComment: () => void;
  addToFavorites: () => void;
  setComment: Dispatch<SetStateAction<string>>;
};

const CharacterComponent: React.FC<Props> = ({
  characterDetails,
  handleGoBack,
  handleAddComment,
  addToFavorites,
  setComment,
  comments,
  comment,
  isDisabledAddToFavorite,
}) => {
  console.log("isDisabledAddToFavorite", isDisabledAddToFavorite);
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
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Comments:</h2>
              <ul className="list-disc list-inside pl-5">
                {comments?.map((comment, index) => (
                  <li key={index} className="text-gray-700">
                    {comment}
                  </li>
                ))}
              </ul>
              <textarea
                className="mt-2 p-2 w-full border rounded-md"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment"
              />
            </div>
            <Button
              onClick={handleAddComment}
              className="mt-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors duration-300"
              text="Add Comment"
            />
            <Button
              isDisabled={isDisabledAddToFavorite}
              onClick={addToFavorites}
              className={`px-4 py-2 font-semibold rounded-md transition-colors duration-300 ${
                isDisabledAddToFavorite
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-red-900 text-white hover:bg-red-700"
              }`}
              text="Add to Favorites"
            />
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
