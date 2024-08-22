import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import CharacterComponent from "../components/Character.component";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_DETAILS } from "../../../common/graphql/querys";
import Loading from "../../shared/components/Loading";
import { useAppDispatch, useAppSelector } from "../../../common/store/hooks";
import {
  addCommentCharacter,
  setAddFavorite,
} from "../../../common/modules/characters/store/actions";
import {
  charactersFavoriteSelector,
  commentSelector,
} from "../../../common/modules/characters/store/selectors";

const CharacterContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [comment, setComment] = React.useState<string>("");
  const [isDisabledAddToFavorite, setIsDisabledAddToFavorite] =
    React.useState<boolean>(false);

  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(GET_CHARACTER_DETAILS, {
    variables: { id },
  });

  const characterDetails = data?.character;

  const idComment = id ? id : characterDetails.id;

  const comments = useAppSelector((state) => commentSelector(state, idComment));
  const favoriteCharacters = useAppSelector(charactersFavoriteSelector);

  const handleAddComment = () => {
    if (comment.trim()) {
      dispatch(addCommentCharacter({ id: characterDetails.id, comment }));
      setComment("");
    }
  };

  const addToFavorites = () => {
    if (characterDetails) {
      dispatch(
        setAddFavorite({
          favorite: {
            id: characterDetails.id,
            name: characterDetails.name,
            image: characterDetails.image,
            species: characterDetails.species,
          },
        })
      );
    }
  };

  const handleGoBack = () => navigate(-1);

  React.useEffect(() => {
    if (error) {
      navigate("/TryAgain");
    }
  }, [error, navigate]);
  React.useEffect(() => {
    const alreadyExistsToFavorite = favoriteCharacters.some(
      (favorite) => favorite.id === characterDetails?.id
    );

    if (alreadyExistsToFavorite) {
      setIsDisabledAddToFavorite(true);
    }
  }, [characterDetails?.id, favoriteCharacters]);

  if (loading) {
    return <Loading />;
  }

  return (
    <CharacterComponent
      characterDetails={characterDetails}
      handleGoBack={handleGoBack}
      handleAddComment={handleAddComment}
      setComment={setComment}
      comments={comments}
      comment={comment}
      addToFavorites={addToFavorites}
      isDisabledAddToFavorite={isDisabledAddToFavorite}
    />
  );
};

export default CharacterContainer;
