import { useState } from "react";
import characters from "../data/characters.js";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [selectedAffiliation, setSelectedAffiliation] = useState("");

  // Get unique species and affiliations from the characters data
  const speciesOptions = [...new Set(characters.map((char) => char.species))];
  const affiliationOptions = [
    ...new Set(characters.map((char) => char.affiliation)),
  ];

  // Filter characters based on search query, species, and affiliation
  const filteredCharacters = characters.filter((char) => {
    const matchesSearch = char.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesSpecies = selectedSpecies
      ? char.species === selectedSpecies
      : true;
    const matchesAffiliation = selectedAffiliation
      ? char.affiliation === selectedAffiliation
      : true;
    return matchesSearch && matchesSpecies && matchesAffiliation;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <select
        value={selectedSpecies}
        onChange={(e) => setSelectedSpecies(e.target.value)}
      >
        <option value="">All Species</option>
        {speciesOptions.map((species) => (
          <option key={species} value={species}>
            {species}
          </option>
        ))}
      </select>

      <select
        value={selectedAffiliation}
        onChange={(e) => setSelectedAffiliation(e.target.value)}
      >
        <option value="">All Affiliations</option>
        {affiliationOptions.map((affiliation) => (
          <option key={affiliation} value={affiliation}>
            {affiliation}
          </option>
        ))}
      </select>

      <div className="character-list">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
