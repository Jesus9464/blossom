import React from "react";
import { useLazyQuery } from "@apollo/client";

import { CharactersData } from "../../../common/types";
import { GET_CHARACTERS } from "../../../common/graphql/querys";
import { useAppDispatch } from "../../../common/store/hooks";
import { setCharacters } from "../../../common/modules/characters/store/actions";

const useFetchCharacters = () => {
  const dispatch = useAppDispatch();
  const [fetchCharacters, { loading, error, data }] =
    useLazyQuery<CharactersData>(GET_CHARACTERS);

  // Calls fetchCharacters when mounting the component or when retrying
  React.useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  // Handles error status
  const handleRetry = () => {
    fetchCharacters();
  };

  // Updates the status with the data obtained
  React.useEffect(() => {
    if (data) {
      React.startTransition(() => {
        dispatch(setCharacters({ character: data.characters.results }));
      });
    }
  }, [data, dispatch]);

  // Returns load status, error and retry function
  return {
    loading,
    error,
    onRetry: handleRetry,
  };
};

export default useFetchCharacters;
