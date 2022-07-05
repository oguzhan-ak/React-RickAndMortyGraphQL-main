import React from "react";
import "./RickAndMortyCharacters.css";
import useCharacters from "../reactHooks/useCharacters";
import CharacterCard from "./CharacterCard";

function RickAndMortyCharacters(props: any) {
  const result = useCharacters(props.page, props.selectedValue);

  return (
    <div className="CharacterList">
      {!result?.loading &&
        result.data &&
        result.data?.characters.results.map((character : any) => {
          return (
            <CharacterCard
              key={character.id}
              image={character.image}
              name={character.name}
              id={character.id}
              locationName={character.location.name}
              selectedValue={props.selectedValue}
            ></CharacterCard>
          );
        })}
    </div>
  );
}

export default RickAndMortyCharacters;
