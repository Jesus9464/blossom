import React from "react";
import { useNavigate } from "react-router-dom";

import HomeComponent from "../components/Home.component";
import useFetchCharacters from "../hooks/useFetchCharacters";
import { useAppSelector } from "../../../common/store/hooks";
import { charactersSelector } from "../../../common/modules/characters/store/selectors";
import Loading from "../../shared/components/Loading";

const HomeContainer = () => {
  const navigate = useNavigate();
  const { error, loading } = useFetchCharacters();
  const characters = useAppSelector(charactersSelector);

  React.useEffect(() => {
    if (error) {
      navigate("/TryAgain");
    }
  }, [error, navigate]);

  if (loading) {
    return <Loading />;
  }

  return <HomeComponent characters={characters} />;
};

export default HomeContainer;
