import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import CharacterComponent from "../components/Character.component";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_DETAILS } from "../../../common/graphql/querys";
import Loading from "../../shared/components/Loading";

const CharacterContainer = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_CHARACTER_DETAILS, {
    variables: { id },
  });

  const characterDetails = data?.character;

  const handleGoBack = () => navigate(-1);

  React.useEffect(() => {
    if (error) {
      navigate("/TryAgain");
    }
  }, [error, navigate]);

  if (loading) {
    return <Loading />;
  }

  return (
    <CharacterComponent
      characterDetails={characterDetails}
      handleGoBack={handleGoBack}
    />
  );
};

export default CharacterContainer;
