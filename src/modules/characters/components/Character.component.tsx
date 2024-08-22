import React, { Dispatch, SetStateAction } from "react";

import { CharacterDetails } from "../../../common/types";
import Button from "../../shared/components/Button";

import heartGreenIcon from "../../../assets/icons/heart-green-icon.svg";

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
  return (
    <div className="p-4 flex flex-col items-start max-w-6xl mx-auto mb-8">
      <div className="items-start mb-4">
        <div className="relative">
          <img
            src={characterDetails.image}
            alt={characterDetails.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-gray-300"
          />
          {isDisabledAddToFavorite && (
            <div className="absolute bottom-0 right-50 left-12 p-2 rounded-full bg-white">
              <img src={heartGreenIcon} alt="Favorite" className="w-6 h-6" />
            </div>
          )}
        </div>
        <h1 className="text-2xl font-bold mt-4 mb-4">
          {characterDetails.name}
        </h1>
      </div>

      {/* Character Details Section */}
      <div className="w-full space-y-4">
        <DetailItem label="Species" value={characterDetails.species} />
        <DetailItem label="Gender" value={characterDetails.gender} />
        <DetailItem label="Status" value={characterDetails.status} />
        <DetailItem label="Origin" value={characterDetails.origin.name} />
        <DetailItem label="Location" value={characterDetails.location.name} />

        {/* Comments */}
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

        {/* Buttons */}
        <Button
          onClick={handleAddComment}
          className="mt-2 px-4 py-2 bg-[#8054C7] text-white font-semibold rounded-md hover:bg-[#8054C7] hover:opacity-[0.8] transition-colors duration-300 mr-4"
          text="Add Comment"
        />
        <Button
          isDisabled={isDisabledAddToFavorite}
          onClick={addToFavorites}
          className={`px-4 py-2 font-semibold rounded-md transition-colors duration-300 mr- 4 ${
            isDisabledAddToFavorite
              ? "bg-gray-300 text-gray-500 cursor-not-allowed mr- 4"
              : "bg-[#8054C7] text-white hover:bg-[#8054C7] hover:opacity-[0.8] mr- 4"
          }`}
          text="Add to Favorites"
        />
        <Button
          onClick={handleGoBack}
          className="mt-10 ml-4 px-4 py-2 bg-[#8054C7] text-white font-semibold rounded-md hover:bg-[#8054C7] hover:opacity-[0.8] transition-colors duration-300"
          text="Go Back"
        />
      </div>
    </div>
  );
};

// Component to show detail items with a divider
const DetailItem: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div>
    <p className="text-lg font-semibold">{label}:</p>
    <p className="text-lg text-gray-700">{value}</p>
    <hr className="my-2 border-gray-300" />
  </div>
);

export default CharacterComponent;
