import React from "react";
import { Character } from "../../../common/types";

type Props = {
  characters: Character[];
};

const HomeComponent: React.FC<Props> = ({ characters }) => {
  return <div>Home.component</div>;
};

export default HomeComponent;
