import { useState } from 'react';
import SearchBar from './SearchBar';
import CharacterCard from './CharacterCard';
import characters from "../data/characters.js";


const CharacterList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="character-list">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
